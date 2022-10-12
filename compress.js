// {
//     "warnings": "verbose",
//     "compress": {
//         "collapse_vars": true,
//         "comparisons": true,
//         "conditionals": true,
//         "dead_code": true,
//         "drop_console": true,
//         "evaluate": false,
//         "if_return": true,
//         "inline": true,
//         "reduce_vars": true,
//         "loops": true,
//         "passes": 1,
//         "unsafe_comps": true,
//         "typeofs": false
//     },
//     "output": {
//         "semicolons": false
//     },
//     "mangle": false,
//     "toplevel": false,
//     "ie8": false
// }


export default {
    // prevent any compression
    compress: false,
    mangle: false,
    format: {
        comments: /^\**!|@preserve|@license|@cc_on/i,
    },
}
