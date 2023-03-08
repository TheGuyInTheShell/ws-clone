const {parallel, watch, src, dest} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcss = require('gulp-postcss') 
const sourcemaps = require('gulp-sourcemaps')
const terser = require('gulp-terser-js');
const swc = require('gulp-swc');
const htmlmin = require('gulp-htmlmin');
const nodemon = require('gulp-nodemon');
const exec = require('child_process').exec;



const scssDirSession = 'src/session/scss/**/*.scss'
const imgsDirSession = 'img/**/*.{png,jpg}'
const jsDirSession = 'src/session/js/**/*.js'
const htmlDirSession = 'src/session/**/*.html'

const serverDir = 'server/**/*.js'
const buildDirServer = 'build/server' 

const buildDirsSession = {
    js: 'build/session/app',
    css: 'build/session/style',
    html: 'build/session',
}
const swcOptions = {
  jsc: {
    target: "es5",
  }
};

// const cache = require('gulp-cache')
// const webp = require('gulp-webp')
// const imagemin = require('gulp-imagemin') 
// const avif = require('gulp-avif')



nodemonGulp = async ()=> {
  await nodemon({
    script: 'build/server/server.js', // el archivo que quieres ejecutar con nodemon
    ext: 'js', // las extensiones de archivo que nodemon debe vigilar
    env: { 'NODE_ENV': 'development' } // variables de entorno
  }).on('restart', function() {
    console.log('reiniciado!')
    });
}


serverCompile = async () => {
  await src(serverDir)
		    .pipe(swc(swcOptions))
        .pipe(terser())
        .pipe(dest(buildDirServer))
}

jsTransform = async ()=> {
    await src(jsDirSession)
		    .pipe(swc(swcOptions))
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
		    .pipe(dest(buildDirsSession.js))

}

sassToCss = async ()=>{
    //directorio sass
    //.pipe(sourcemaps.init())
    await src(scssDirSession)
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest(buildDirsSession.css))
    // .pipe( postcss([cssnano(), autoprefixer()]) )
    // .pipe(sourcemaps.write('.'))
}

htmlCompress = async ()=> {
    await src(htmlDirSession)
            .pipe(htmlmin({
                collapseWhitespace: true,
                removeComments: true,
            })).pipe(dest(buildDirsSession.html))
}

// turnWebp = async()=>{

//     await src(imgsDir)
//     .pipe(webp({
//         quality: 50
//     }))
//     .pipe(dest(buildDirs.imgs))
// }

// compressImages = async ()=>{
//    await src(imgsDir)
//     .pipe(cache(imagemin({
//         optimizationLevel: 3
//     })))
//     .pipe(dest(buildDirs.imgs))
// }

// turnAvif = async ()=>{
//     await src(imgsDir)
//     .pipe(avif({
//         quality: 50
//     }))
//     .pipe(dest(buildDirs.imgs))
// }

devSession = async ()=>{
   await watch(scssDirSession, sassToCss)
   await watch(jsDirSession, jsTransform)
   await watch(htmlDirSession, htmlCompress)
}

devServer = async ()=> {
  await watch(serverDir, serverCompile)
}

exports.compileServer = serverCompile
exports.sassToCss = sassToCss
exports.devSession = parallel(devSession)
exports.devServer = parallel(devServer)
exports.devFull = parallel(devServer, devSession)