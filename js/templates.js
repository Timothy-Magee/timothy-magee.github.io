(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["dummy-view.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<li>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "item"), env.opts.autoescape);
output += "</li>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

