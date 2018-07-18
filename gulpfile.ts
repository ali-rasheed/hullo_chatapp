import * as es from "event-stream";
import * as gulp from "gulp";
import * as clean from "gulp-clean";
import * as concat from "gulp-concat";
import * as vulcanize from "gulp-vulcanize";
import { Gulpclass, Task } from "gulpclass";
import * as webpackStream from "webpack-stream";

@Gulpclass()
export class Gulpfile {
  public inputFiles = [
    "views/**/*.js",   ];

  public vulcanizedFiles = [
    "index.html"
  ];

  public tmpFiles = ["./main.build.js"].concat(this.vulcanizedFiles.map(
    f => "build/" + f,
  ));

  @Task()
  public views() {
    console.log("view");
    return gulp.src(this.inputFiles)
      .pipe(webpackStream({
        module: {
          loaders: [
            {
              exclude: /node-modules/,
              loader: "ts-loader",
              test: /\.tsx?$/,
            },
          ],
        },
      }))
      .pipe(concat("main.build.js"))
      .pipe(gulp.dest("./"));
  }

  @Task("vulcanize", ["views"])
  public vulcanize() {
    return gulp.src(this.vulcanizedFiles)
      .pipe(vulcanize({
        inlineCss: true,
        inlineScripts: true,
        stripComments: true,
      }))
      .pipe(gulp.dest("build"))
      .pipe(gulp.dest("build/src/"));
  }

  @Task("variantBuilds", ["vulcanize"])
  public variantBuilds() {
    const files = this.vulcanizedFiles.map((f) => {
      return "./build/" + f;
    });

    return es.concat(
      gulp.src(files)
        .pipe(gulp.dest("./build/")));
  }

  @Task("cleanTmp", ["variantBuilds"])
  public cleanTmp() {
    return gulp.src(
      this.tmpFiles, { read: false },
    ).pipe(
      clean(),
    );
  }

  @Task("default", ["views", "vulcanize", "variantBuilds", "cleanTmp"])
  public default() {
    console.log("default")
   }
}
