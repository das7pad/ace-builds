ace.define("ace/snippets/gobstones",[],function(e,t,n){"use strict";t.snippetText="# Procedure\nsnippet proc\n	procedure ${1?:name}(${2:argument}) {\n		${3:// body...}\n	}\n\n# Function\nsnippet fun\n	function ${1?:name}(${2:argument}) {\n		return ${3:// body...}\n	}\n\n# Repeat\nsnippet rep\n	repeat ${1?:times} {\n		${2:// body...}\n	}\n\n# For\nsnippet for\n	foreach ${1?:e} in ${2?:list} {\n		${3:// body...}	\n	}\n\n# If\nsnippet if\n	if (${1?:condition}) {\n		${3:// body...}	\n	}\n\n# While\n  while (${1?:condition}) {\n    ${2:// body...}	\n  }\n",t.scope="gobstones"});                (function() {
                    ace.require(["ace/snippets/gobstones"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            