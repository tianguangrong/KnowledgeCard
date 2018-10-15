import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
    entry:'./src/index.js',
    format:'cjs',
    plugins:[
        resolve(),
        babel({
            babelrc: false,
		    presets: [['es2015', { modules: false }]],
            exclude:'node_modules/**'
        })
    ],
    dest:'build/bundle.js'
}