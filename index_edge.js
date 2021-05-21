/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'fill',
                type: 'image',
                rect: ['9px', '-6px','420px','160px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fill.jpg",'0px','0px']
            },
            {
                id: 'b',
                type: 'image',
                rect: ['22px', '97px','48px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b.png",'0px','0px'],
                transform: [[],['45']]
            },
            {
                id: 'a',
                type: 'image',
                rect: ['108px', '2px','300px','53px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a.png",'0px','0px'],
                transform: [[],[],[],['0.85','0.85']]
            },
            {
                id: 'f',
                type: 'image',
                rect: ['-7px', '-10px','121px','169px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f.png",'0px','0px']
            },
            {
                id: 't',
                type: 'image',
                rect: ['79px', '130px','374px','18px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'i',
                type: 'image',
                rect: ['77px', '100px','369px','22px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"i.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 's',
                type: 'image',
                rect: ['149px', '53px','240px','46px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"s.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_fill}": [
                ["style", "top", '-6px'],
                ["style", "height", '165px'],
                ["style", "opacity", '0'],
                ["style", "left", '-4px'],
                ["style", "width", '434px']
            ],
            "${_s}": [
                ["style", "top", '53px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '149px']
            ],
            "${_b}": [
                ["style", "top", '107px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '45deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '72px'],
                ["style", "clip", [0,48,42,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_a}": [
                ["style", "top", '2px'],
                ["transform", "scaleY", '0.85'],
                ["transform", "scaleX", '0.85'],
                ["style", "opacity", '0'],
                ["style", "left", '108px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '420px'],
                ["style", "height", '150px'],
                ["style", "overflow", 'hidden']
            ],
            "${_t}": [
                ["style", "top", '130px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '79px']
            ],
            "${_i}": [
                ["style", "top", '100px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '77px']
            ],
            "${_f}": [
                ["style", "top", '-10px'],
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0'],
                ["transform", "rotateZ", '-20deg'],
                ["style", "height", '169px'],
                ["style", "opacity", '0'],
                ["style", "left", '-7px'],
                ["style", "width", '121px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7000,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_b}", "top", '-12px', { fromValue: '107px'}], position: 1610, duration: 4390, easing: "swing" },
                { id: "eid70", tween: [ "style", "${_fill}", "top", '-6px', { fromValue: '-6px'}], position: 0, duration: 0, easing: "easeOutCubic" },
                { id: "eid33", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 1610, duration: 140, easing: "swing" },
                { id: "eid93", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 6944, duration: 56, easing: "swing" },
                { id: "eid31", tween: [ "style", "${_s}", "opacity", '1', { fromValue: '0'}], position: 1610, duration: 140, easing: "swing" },
                { id: "eid88", tween: [ "style", "${_s}", "opacity", '0', { fromValue: '1'}], position: 6944, duration: 56, easing: "swing" },
                { id: "eid39", tween: [ "transform", "${_f}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 140, easing: "swing" },
                { id: "eid41", tween: [ "transform", "${_f}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 140, easing: "swing" },
                { id: "eid23", tween: [ "transform", "${_b}", "rotateZ", '60deg', { fromValue: '45deg'}], position: 2076, duration: 266, easing: "easeOutCubic" },
                { id: "eid1", tween: [ "style", "${_b}", "left", '419px', { fromValue: '72px'}], position: 1610, duration: 4390, easing: "swing" },
                { id: "eid32", tween: [ "style", "${_i}", "opacity", '1', { fromValue: '0'}], position: 3893, duration: 140, easing: "swing" },
                { id: "eid90", tween: [ "style", "${_i}", "opacity", '0', { fromValue: '1'}], position: 6944, duration: 56, easing: "swing" },
                { id: "eid37", tween: [ "transform", "${_f}", "rotateZ", '0deg', { fromValue: '-20deg'}], position: 0, duration: 76, easing: "swing" },
                { id: "eid42", tween: [ "style", "${_b}", "opacity", '1', { fromValue: '0'}], position: 1610, duration: 212, easing: "swing" },
                { id: "eid92", tween: [ "style", "${_b}", "opacity", '0', { fromValue: '1'}], position: 6944, duration: 56, easing: "swing" },
                { id: "eid34", tween: [ "style", "${_f}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 140, easing: "swing" },
                { id: "eid87", tween: [ "style", "${_f}", "opacity", '0', { fromValue: '1'}], position: 6944, duration: 56, easing: "swing" },
                { id: "eid95", tween: [ "style", "${_fill}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 140, easing: "swing" },
                { id: "eid89", tween: [ "style", "${_fill}", "opacity", '0', { fromValue: '1'}], position: 6944, duration: 56, easing: "swing" },
                { id: "eid13", tween: [ "style", "${_b}", "clip", [0,26.400390625,42,21.400390625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,48,42,0]}], position: 1784, duration: 50, easing: "easeOutCubic" },
                { id: "eid15", tween: [ "style", "${_b}", "clip", [0,48,42,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,26.400390625,42,21.400390625]}], position: 1861, duration: 50, easing: "easeOutCubic" },
                { id: "eid19", tween: [ "style", "${_b}", "clip", [0,26.400390625,42,21.400390625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,48,42,0]}], position: 2199, duration: 86, easing: "easeOutCubic" },
                { id: "eid20", tween: [ "style", "${_b}", "clip", [0,48,42,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,26.400390625,42,21.400390625]}], position: 2312, duration: 50, easing: "easeOutCubic" },
                { id: "eid21", tween: [ "style", "${_b}", "clip", [0,26.400390625,42,21.400390625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,48,42,0]}], position: 2671, duration: 145, easing: "easeOutCubic" },
                { id: "eid22", tween: [ "style", "${_b}", "clip", [0,48,42,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,26.400390625,42,21.400390625]}], position: 2855, duration: 50, easing: "easeOutCubic" },
                { id: "eid24", tween: [ "style", "${_b}", "clip", [0,26.400390625,42,21.400390625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,48,42,0]}], position: 3404, duration: 145, easing: "easeOutCubic" },
                { id: "eid25", tween: [ "style", "${_b}", "clip", [0,48,42,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,26.400390625,42,21.400390625]}], position: 3588, duration: 50, easing: "easeOutCubic" },
                { id: "eid43", tween: [ "style", "${_b}", "clip", [0,26.400390625,42,21.400390625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,48,42,0]}], position: 4240, duration: 145, easing: "easeOutCubic" },
                { id: "eid44", tween: [ "style", "${_b}", "clip", [0,48,42,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,26.400390625,42,21.400390625]}], position: 4424, duration: 50, easing: "easeOutCubic" },
                { id: "eid56", tween: [ "style", "${_b}", "clip", [0,26.400390625,42,21.400390625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,48,42,0]}], position: 5130, duration: 390, easing: "easeOutCubic" },
                { id: "eid35", tween: [ "style", "${_a}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 140, easing: "swing" },
                { id: "eid91", tween: [ "style", "${_a}", "opacity", '0', { fromValue: '1'}], position: 6944, duration: 56, easing: "swing" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-19210092");
