
(function ($) {
    'use strict';

    // Plugin default options
    var defaultOptions = {
    };

    function buildLinkDef (trumbowyg) {
        return {
            fn: function () {
                var t = trumbowyg,
                    documentSelection = t.doc.getSelection(),
                    selectedRange = documentSelection.getRangeAt(0),
                    node = documentSelection.focusNode,
                    text = new XMLSerializer().serializeToString(selectedRange.cloneContents()) || selectedRange + '',
                    url,
                    title,
                    target;
        
                while (['A', 'DIV'].indexOf(node.nodeName) < 0) {
                    node = node.parentNode;
                }
        
                if (node && node.nodeName === 'A') {
                    var $a = $(node);
                    text = $a.text();
                    url = $a.attr('href');
                    if (!t.o.minimalLinks) {
                        title = $a.attr('title');
                        target = $a.attr('target') || t.o.defaultLinkTarget;
                    }
                    var range = t.doc.createRange();
                    range.selectNode(node);
                    documentSelection.removeAllRanges();
                    documentSelection.addRange(range);
                }
        
                t.saveRange();
        
                var options = {
                    url: {
                        label: 'URL',
                        required: true,
                        value: url
                    },
                    text: {
                        label: t.lang.text,
                        value: text
                    },
                    newWindow: {
                        label: 'Open in new window',
                        value: false,
                        type: 'checkbox',
                    }
                };
                if (!t.o.minimalLinks) {
                    $.extend(options, {
                        title: {
                            label: t.lang.title,
                            value: title
                        },
                        target: {
                            label: t.lang.target,
                            value: target
                        }
                    });
                }
                
                t.openModalInsert(t.lang.createLink, options, function (v) { // v is value
                    var url = v.url;
                    if (!url.length) {
                        return false;
                    }

                    var link = $(['<a href="', url, '">', v.text || v.url, '</a>'].join(''));
        
                    if (v.title) {
                        link.attr('title', v.title);
                    }
                    if (v.target || t.o.defaultLinkTarget) {
                        link.attr('target', v.target || t.o.defaultLinkTarget);
                    }
                    if(v.newWindow){
                        link.attr('target', '_blank');
                    }
                    t.range.deleteContents();
                    t.range.insertNode(link[0]);
                    t.syncCode();
                    t.$c.trigger('tbwchange');
                    return true;
                });
            },
            text: 'Insert link',
            title: 'Link',
            hasIcon: true,
            ico: 'createLink',
            isSupported: function () { return true; },
        }
    }

    function buildArrowDef (trumbowyg) {
        return {
            fn: function () {
                var t = trumbowyg,
                    documentSelection = t.doc.getSelection(),
                    selectedRange = documentSelection.getRangeAt(0),
                    node = documentSelection.focusNode,
                    text = new XMLSerializer().serializeToString(selectedRange.cloneContents()) || selectedRange + '',
                    url,
                    title,
                    target;
        
                while (['A', 'DIV'].indexOf(node.nodeName) < 0) {
                    node = node.parentNode;
                }
        
                if (node && node.nodeName === 'A') {
                    var $a = $(node);
                    text = $a.text();
                    url = $a.attr('href');
                    if (!t.o.minimalLinks) {
                        title = $a.attr('title');
                        target = $a.attr('target') || t.o.defaultLinkTarget;
                    }
                    var range = t.doc.createRange();
                    range.selectNode(node);
                    documentSelection.removeAllRanges();
                    documentSelection.addRange(range);
                }
        
                t.saveRange();
        
                var options = {
                    url: {
                        label: 'URL',
                        required: true,
                        value: url
                    },
                    text: {
                        label: t.lang.text,
                        value: text
                    },
                    newWindow: {
                        label: 'Open in new window',
                        value: false,
                        type: 'checkbox',
                    }
                };
                if (!t.o.minimalLinks) {
                    $.extend(options, {
                        title: {
                            label: t.lang.title,
                            value: title
                        },
                        target: {
                            label: t.lang.target,
                            value: target
                        }
                    });
                }
                
                t.openModalInsert(t.lang.createLink, options, function (v) { // v is value
                    var url = v.url;
                    if (!url.length) {
                        return false;
                    }

                    var link = $(['<a class="link" href="', url, '">', '→', v.text || v.url, '</a>'].join(''));
        
                    if (v.title) {
                        link.attr('title', v.title);
                    }
                    if (v.target || t.o.defaultLinkTarget) {
                        link.attr('target', v.target || t.o.defaultLinkTarget);
                    }
                    if(v.newWindow){
                        link.attr('target', '_blank');
                    }
                    t.range.deleteContents();
                    t.range.insertNode(link[0]);
                    t.syncCode();
                    t.$c.trigger('tbwchange');
                    return true;
                });
            },
            text: 'Insert arrow',
            title: 'Arrow link',
            hasIcon: true,
            ico: 'createLink',
            isSupported: function () { return true; },
        }
    }


    function buildButtonDef (trumbowyg) {
        return {
            fn: function () {
                var t = trumbowyg,
                    documentSelection = t.doc.getSelection(),
                    selectedRange = documentSelection.getRangeAt(0),
                    node = documentSelection.focusNode,
                    text = new XMLSerializer().serializeToString(selectedRange.cloneContents()) || selectedRange + '',
                    url,
                    title,
                    target;
        
                while (['A', 'DIV'].indexOf(node.nodeName) < 0) {
                    node = node.parentNode;
                }
        
                if (node && node.nodeName === 'A') {
                    var $a = $(node);
                    text = $a.text();
                    url = $a.attr('href');
                    if (!t.o.minimalLinks) {
                        title = $a.attr('title');
                        target = $a.attr('target') || t.o.defaultLinkTarget;
                    }
                    var range = t.doc.createRange();
                    range.selectNode(node);
                    documentSelection.removeAllRanges();
                    documentSelection.addRange(range);
                }
        
                t.saveRange();
        
                var options = {
                    url: {
                        label: 'URL',
                        required: true,
                        value: url
                    },
                    text: {
                        label: t.lang.text,
                        value: text
                    },
                    newWindow: {
                        label: 'Open in new window',
                        value: false,
                        type: 'checkbox',
                    }
                };
                if (!t.o.minimalLinks) {
                    $.extend(options, {
                        title: {
                            label: t.lang.title,
                            value: title
                        },
                        target: {
                            label: t.lang.target,
                            value: target
                        }
                    });
                }
        
                t.openModalInsert(t.lang.createLink, options, function (v) { // v is value
                    var url = v.url;
                    if (!url.length) {
                        return false;
                    }

                    var link = $(['<a class="button" href="', url, '">', v.text || v.url, '</a>'].join(''));
        
                    if (v.title) {
                        link.attr('title', v.title);
                    }
                    if (v.target || t.o.defaultLinkTarget) {
                        link.attr('target', v.target || t.o.defaultLinkTarget);
                    }
                    if(v.newWindow){
                        link.attr('target', '_blank');
                    }
                    t.range.deleteContents();
                    t.range.insertNode(link[0]);
                    t.syncCode();
                    t.$c.trigger('tbwchange');
                    return true;
                });
            },
            text: 'Insert button',
            title: 'Button link',
            ico: 'createLink',
            hasIcon: true,
            isSupported: function () { return true; },
        }
    }

    function buildSubtitleDef (trumbowyg) {
        return {
            fn: function () {
                document.execCommand('formatBlock', false, 'p')
                var el = window.getSelection().focusNode.parentNode;
                $(el).addClass("subtitle");
            },
            text: 'Subtitle',
            title: 'Subtitle',
            ico: 'p',
            hasIcon: true,
            isSupported: function () { return true; },
        }
    }


    $.extend(true, $.trumbowyg, {

        // Register plugin in Trumbowyg
        plugins: {
            myplugin: {
                // Code called by Trumbowyg core to register the plugin
                init: function (trumbowyg) {
                    // Fill current Trumbowyg instance with the plugin default options
                    trumbowyg.o.plugins.myplugin = $.extend(true, {},
                        defaultOptions,
                        trumbowyg.o.plugins.myplugin || {}
                    );


                    // If the plugin is a button
                    trumbowyg.addBtnDef('subtitle', buildSubtitleDef(trumbowyg));
                    trumbowyg.addBtnDef('arrow', buildArrowDef(trumbowyg));
                    trumbowyg.addBtnDef('button', buildButtonDef(trumbowyg));
                    trumbowyg.addBtnDef('link', buildLinkDef(trumbowyg));
                },
                // Return a list of button names which are active on current element
                tagHandler: function (element, trumbowyg) {
                    console.log(element)
                    return [];
                },
                destroy: function (trumbowyg) {
                }
            }
        }
    })
})(jQuery);