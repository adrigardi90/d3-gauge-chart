webpackJsonp([2],{

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(263);


var App = function App() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container-fluid" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", { className: "jumbotron text-center" }, "GAUGE CHART"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__components__["a" /* GaugeChart */], null));
};

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugeChart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(266);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var updateReadings = function updateReadings(gauge) {
    gauge.update(Math.random() * 10);
};
var GaugeChart = function (_React$Component) {
    _inherits(GaugeChart, _React$Component);

    function GaugeChart(props) {
        _classCallCheck(this, GaugeChart);

        var _this = _possibleConstructorReturn(this, (GaugeChart.__proto__ || Object.getPrototypeOf(GaugeChart)).call(this, props));

        _this.state = {
            size: 300,
            clipWidth: 300,
            clipHeight: 300,
            ringWidth: 60,
            maxValue: 10,
            transitionMs: 4000
        };
        return _this;
    }

    _createClass(GaugeChart, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Gauge chart
            var powerGauge = new __WEBPACK_IMPORTED_MODULE_1__models__["a" /* Gauge */]('#power-gauge', this.state);
            // Render
            powerGauge.render();
            // First gauge value
            updateReadings(powerGauge);
            // Update each 5 seconds
            setInterval(function () {
                return updateReadings(powerGauge);
            }, 5 * 1000);
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "row text-center" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: "power-gauge" }));
        }
    }]);

    return GaugeChart;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gaugeChart__ = __webpack_require__(262);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__gaugeChart__["a"]; });


/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__(259);



__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__app__["a" /* App */], null), document.getElementById('root'));

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gauge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__(144);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var Gauge = function Gauge(container, configuration) {
    var _this = this;

    _classCallCheck(this, Gauge);

    // Degrees to Radians conversion
    this.deg2rad = function (deg) {
        return deg * Math.PI / 180;
    };
    // Center translation
    this.centerTranslation = function () {
        return 'translate(' + _this.r + ',' + _this.r + ')';
    };
    // Get the new angle
    this.newAngle = function (d) {
        return _this.config.minAngle + _this.scale(d) * _this.range;
    };
    // isRendered Gauge
    this.isRendered = function () {
        return _this.svg !== undefined;
    };
    // Update pointer value
    this.update = function (newValue, newConfiguration) {
        if (newConfiguration) {
            _this.configure(newConfiguration);
        }
        var newAngle = _this.newAngle(newValue); // Get the new angle
        _this.pointer.transition().duration(_this.config.transitionMs) // Duration
        .ease(__WEBPACK_IMPORTED_MODULE_0_d3__["easeElastic"]) // Transition type
        .attr('transform', 'rotate(' + newAngle + ')'); // Rotate to new angle
    };
    // Configure
    this.configure = function (configuration) {
        var prop = void 0;
        // New configuration
        for (prop in configuration) {
            _this.config[prop] = configuration[prop];
        }
        _this.range = _this.config.maxAngle - _this.config.minAngle;
        _this.r = _this.config.size / 2;
        _this.pointerHeadLength = Math.round(_this.r * _this.config.pointerHeadLengthPercent);
        // Linear scale that maps domain values to a percent from 0 to 1
        _this.scale = __WEBPACK_IMPORTED_MODULE_0_d3__["scaleLinear"]().range([0, 1]).domain([_this.config.minValue, _this.config.maxValue]);
        // Tick configuration
        _this.ticks = _this.scale.ticks(_this.config.majorTicks); // Get the tick
        _this.tickData = __WEBPACK_IMPORTED_MODULE_0_d3__["range"](_this.config.majorTicks).map(function () {
            return 1 / _this.config.majorTicks;
        }); // Get the range value for each tick (semicircle divided between 5 majorTicks)
        // Semicircle configuration
        _this.arc = __WEBPACK_IMPORTED_MODULE_0_d3__["arc"]().innerRadius(_this.r - _this.config.ringWidth - _this.config.ringInset) // Inner radio value
        .outerRadius(_this.r - _this.config.ringInset) // Outer radio value
        .startAngle(function (d, i) {
            var ratio = d * i;
            return _this.deg2rad(_this.config.minAngle + ratio * _this.range); // Start angle value
        }).endAngle(function (d, i) {
            var ratio = d * (i + 1);
            return _this.deg2rad(_this.config.minAngle + ratio * _this.range); // End angle value
        });
    };
    // Render gauge chart
    this.render = function (newValue) {
        // Get the html element and append it the chart
        _this.svg = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](_this.container).append('svg:svg').attr('class', 'gauge').attr('width', _this.config.clipWidth).attr('height', _this.config.clipHeight);
        var centerTx = _this.centerTranslation(); // Get the translation
        // ARC: Append g html element to display the circle arc
        var arcs = _this.svg.append('g').attr('class', 'arc').attr('transform', centerTx);
        // Fill each semicircle portion with different colors
        arcs.selectAll('path').data(_this.tickData).enter().append('path').attr('fill', function (d, i) {
            return _this.config.arcColorFn(d * i);
        }).attr('d', _this.arc);
        // LABEL: Append g html element to display each range value
        var lg = _this.svg.append('g').attr('class', 'label').attr('transform', centerTx);
        // Get and display each range value
        lg.selectAll('text').data(_this.ticks).enter().append('text').attr('transform', function (d) {
            var ratio = _this.scale(d);
            var newAngle = _this.config.minAngle + ratio * _this.range;
            return 'rotate(' + newAngle + ') translate(0,' + (_this.config.labelInset - _this.r) + ')';
        }).text(_this.config.labelFormat);
        var lineData = [[_this.config.pointerWidth / 2, 0], [0, -_this.pointerHeadLength], [-(_this.config.pointerWidth / 2), 0], [0, _this.config.pointerTailLength], [_this.config.pointerWidth / 2, 0]];
        var pointerLine = __WEBPACK_IMPORTED_MODULE_0_d3__["line"]().curve(__WEBPACK_IMPORTED_MODULE_0_d3__["curveMonotoneX"]); // Get the pointer line
        // POINTER: Append g html element to display the pointer
        var pg = _this.svg.append('g').data([lineData]).attr('class', 'pointer').attr('transform', centerTx);
        // Set the pointer value
        _this.pointer = pg.append('path').attr('d', pointerLine).attr('transform', 'rotate(' + _this.config.minAngle + ')');
        _this.update(newValue ? newValue : 0);
    };
    this.container = container;
    this.configuration = configuration;
    this.config = {
        size: 200,
        clipWidth: 200,
        clipHeight: 110,
        ringInset: 20,
        ringWidth: 20,
        pointerWidth: 10,
        pointerTailLength: 5,
        pointerHeadLengthPercent: 0.9,
        minValue: 0,
        maxValue: 10,
        minAngle: -90,
        maxAngle: 90,
        transitionMs: 750,
        majorTicks: 5,
        labelFormat: __WEBPACK_IMPORTED_MODULE_0_d3__["format"](',g'),
        labelInset: 10,
        arcColorFn: __WEBPACK_IMPORTED_MODULE_0_d3__["interpolateHsl"](__WEBPACK_IMPORTED_MODULE_0_d3__["rgb"]('#e8e2ca'), __WEBPACK_IMPORTED_MODULE_0_d3__["rgb"]('#3e6c0a'))
    };
    this.donut = __WEBPACK_IMPORTED_MODULE_0_d3__["pie"]();
    this.configure(configuration);
};

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gauge__ = __webpack_require__(265);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__gauge__["a"]; });


/***/ })

},[264]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2F1Z2VDaGFydC50c3giLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL21vZGVscy9nYXVnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQjtBQUNXO0FBRXBDLElBQVU7QUFBdUMsV0FDckQsOERBQWMsV0FBa0IscUJBQzlCLDZEQUFhLFdBQXdCLDJCQUFpQixnQkFDdEQscURBQVcsaUVBRWI7Q0FMSyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h3QjtBQUdLO0FBRXBDLElBQW9CLGlCQUFHLHdCQUFlO0FBQVEsVUFBTyxPQUFLLEtBQVMsV0FBTztBQUFFO0FBRXRFLElBQWtCOzs7QUFFdEIsd0JBQWlCO0FBQ1Y7OzRIQUFROztBQUNULGNBQU07QUFDSixrQkFBSztBQUNBLHVCQUFLO0FBQ0osd0JBQUs7QUFDTix1QkFBSTtBQUNMLHNCQUFJO0FBQ0EsMEJBRWhCO0FBUmU7O0FBVUU7Ozs7O0FBQ0Q7QUFDZCxnQkFBZ0IsYUFBRyxJQUFTLHVEQUFlLGdCQUFNLEtBQVE7QUFDaEQ7QUFDQyx1QkFBVTtBQUNBO0FBQ04sMkJBQWE7QUFDSDtBQUNiO0FBQU0sdUJBQWUsZUFBWTtlQUFHLElBQ2pEO0FBRU07Ozs7QUFDRyxtQkFDTCw4REFBYyxXQUFrQixxQkFDOUIsOERBQU8sSUFHYjtBQUNEOzs7O0VBaENvQyxnREFBa0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHhCO0FBQ087QUFDWjtBQUVsQixpREFBTyxDQUNiLHFEQUFJLG1EQUFFLE9BQ0UsU0FBZSxlQUN2QixTOzs7Ozs7Ozs7Ozs7QUNQdUI7QUFFbkIsWUFpQkYsZUFBcUIsV0FBZTs7Ozs7QUFrQ0o7QUFDeEIsU0FBTyxvQkFBWTtBQUFULGVBQWEsTUFBTyxLQUFHLEtBQVE7O0FBRTVCO0FBQ2IsU0FBaUI7QUFBUyxlQUFhLGVBQU8sTUFBRSxJQUFN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RSxHQUFFLENBQUssTUFBbUIsb0JBQUUsQ0FBRSxFQUFLLE1BQU8sT0FBYSxlQUFLLElBQUksSUFDckcsQ0FBRSxHQUFNLE1BQU8sT0FBbUIsb0JBQUUsQ0FBSyxNQUFPLE9BQWEsZUFBSSxHQUNoRTtBQUVuQixZQUFpQixjQUFLLHdDQUFPLEdBQU0sTUFBRyxrREFBaUIsR0FBd0I7QUFHdkI7QUFDeEQsWUFBUSxLQUFPLE1BQUksSUFBTyxPQUFLLEtBQUssS0FBQyxDQUFXLFdBQ3ZDLEtBQVEsU0FBWSxXQUNwQixLQUFZLGFBQVk7QUFFVDtBQUNwQixjQUFRLFVBQUssR0FBTyxPQUFRLFFBQ3ZCLEtBQUksS0FBYyxhQUNsQixLQUFZLGFBQVcsWUFBTyxNQUFPLE9BQVMsV0FBUTtBQUUzRCxjQUFPLE9BQVcsV0FBVyxXQUNyQztBQUFDO0FBNUpPLFNBQVUsWUFBYTtBQUN2QixTQUFjLGdCQUFpQjtBQUMvQixTQUFPO0FBQ0gsY0FBSztBQUNBLG1CQUFLO0FBQ0osb0JBQUs7QUFDTixtQkFBSTtBQUNKLG1CQUFJO0FBRUQsc0JBQUk7QUFDQywyQkFBRztBQUNJLGtDQUFLO0FBRXJCLGtCQUFHO0FBQ0gsa0JBQUk7QUFFSixrQkFBRSxDQUFHO0FBQ0wsa0JBQUk7QUFFQSxzQkFBSztBQUVQLG9CQUFHO0FBQ0YscUJBQUksMENBQU8sQ0FBTTtBQUNsQixvQkFBSTtBQUVKLG9CQUFJLGtEQUFlLENBQUcsdUNBQUksQ0FBVyxZQUFJLHVDQUFJLENBQ3pEO0FBeEJZO0FBMEJWLFNBQU0sUUFBSyx1Q0FBTztBQUVsQixTQUFVLFVBQ2xCO0FBOEhILEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2F1Z2VDaGFydCB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBBcHA6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgPGgxIGNsYXNzTmFtZT1cImp1bWJvdHJvbiB0ZXh0LWNlbnRlclwiPkdBVUdFIENIQVJUPC9oMT5cbiAgICA8R2F1Z2VDaGFydCAvPlxuICA8L2Rpdj5cbik7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5cbmltcG9ydCB7IEdhdWdlIH0gZnJvbSAnLi8uLi9tb2RlbHMnO1xuXG5jb25zdCB1cGRhdGVSZWFkaW5ncyA9IChnYXVnZTogYW55KSA9PiB7IGdhdWdlLnVwZGF0ZShNYXRoLnJhbmRvbSgpICogMTApIH07XG5cbmV4cG9ydCBjbGFzcyBHYXVnZUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaXplOiAzMDAsXG4gICAgICBjbGlwV2lkdGg6IDMwMCxcbiAgICAgIGNsaXBIZWlnaHQ6IDMwMCxcbiAgICAgIHJpbmdXaWR0aDogNjAsXG4gICAgICBtYXhWYWx1ZTogMTAsXG4gICAgICB0cmFuc2l0aW9uTXM6IDQwMDAsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gR2F1Z2UgY2hhcnRcbiAgICBjb25zdCBwb3dlckdhdWdlID0gbmV3IEdhdWdlKCcjcG93ZXItZ2F1Z2UnLCB0aGlzLnN0YXRlKTtcbiAgICAvLyBSZW5kZXJcbiAgICBwb3dlckdhdWdlLnJlbmRlcigpO1xuICAgIC8vIEZpcnN0IGdhdWdlIHZhbHVlXG4gICAgdXBkYXRlUmVhZGluZ3MocG93ZXJHYXVnZSk7XG4gICAgLy8gVXBkYXRlIGVhY2ggNSBzZWNvbmRzXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gdXBkYXRlUmVhZGluZ3MocG93ZXJHYXVnZSksIDUgKiAxMDAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBpZD1cInBvd2VyLWdhdWdlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2dhdWdlQ2hhcnQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7QXBwfSBmcm9tICcuL2FwcCc7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXgudHN4IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuXG5leHBvcnQgY2xhc3MgR2F1Z2Uge1xuXG4gICAgY29udGFpbmVyOiBzdHJpbmc7XG4gICAgY29uZmlndXJhdGlvbjogYW55O1xuICAgIGNvbmZpZzogYW55O1xuXG4gICAgcmFuZ2U7IC8vIEFuZ2xlIHJhbmdlIHBvaW50ZXIgbW92ZW1lbnRcbiAgICByOyAvLyBDaXJjbGUgcmFkaW9cbiAgICBwb2ludGVySGVhZExlbmd0aDsgLy8gUG9pbnRlciBsZW5ndGhcbiAgICBzdmc7IC8vIFN2ZyBnYXVnZSBcbiAgICBhcmM7IC8vIENpcmNsZSBhcmNcbiAgICBzY2FsZTtcbiAgICB0aWNrczsgLy8gR2F1Z2UgdGlja3NcbiAgICB0aWNrRGF0YTsgLy8gUmFuZ2Ugb2Ygc2VtaWNpcmNsZSB0aGF0IG1hdGNoIG9uZSB0aWNrXG4gICAgcG9pbnRlcjsgLy8gR2F1Z2UgcG9pbnRlclxuICAgIGRvbnV0O1xuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyLCBjb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgICAgIHNpemU6IDIwMCxcbiAgICAgICAgICAgIGNsaXBXaWR0aDogMjAwLFxuICAgICAgICAgICAgY2xpcEhlaWdodDogMTEwLFxuICAgICAgICAgICAgcmluZ0luc2V0OiAyMCxcbiAgICAgICAgICAgIHJpbmdXaWR0aDogMjAsXG5cbiAgICAgICAgICAgIHBvaW50ZXJXaWR0aDogMTAsXG4gICAgICAgICAgICBwb2ludGVyVGFpbExlbmd0aDogNSxcbiAgICAgICAgICAgIHBvaW50ZXJIZWFkTGVuZ3RoUGVyY2VudDogMC45LFxuXG4gICAgICAgICAgICBtaW5WYWx1ZTogMCxcbiAgICAgICAgICAgIG1heFZhbHVlOiAxMCxcblxuICAgICAgICAgICAgbWluQW5nbGU6IC05MCxcbiAgICAgICAgICAgIG1heEFuZ2xlOiA5MCxcblxuICAgICAgICAgICAgdHJhbnNpdGlvbk1zOiA3NTAsXG5cbiAgICAgICAgICAgIG1ham9yVGlja3M6IDUsXG4gICAgICAgICAgICBsYWJlbEZvcm1hdDogZDMuZm9ybWF0KCcsZycpLFxuICAgICAgICAgICAgbGFiZWxJbnNldDogMTAsXG5cbiAgICAgICAgICAgIGFyY0NvbG9yRm46IGQzLmludGVycG9sYXRlSHNsKGQzLnJnYignI2U4ZTJjYScpLCBkMy5yZ2IoJyMzZTZjMGEnKSlcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRvbnV0ID0gZDMucGllKCk7XG5cbiAgICAgICAgdGhpcy5jb25maWd1cmUoY29uZmlndXJhdGlvbik7XG4gICAgfVxuXG4gICAgLy8gRGVncmVlcyB0byBSYWRpYW5zIGNvbnZlcnNpb25cbiAgICBwcml2YXRlIGRlZzJyYWQgPSAoZGVnKSA9PiAoZGVnICogTWF0aC5QSSAvIDE4MCk7XG5cbiAgICAvLyBDZW50ZXIgdHJhbnNsYXRpb25cbiAgICBwcml2YXRlIGNlbnRlclRyYW5zbGF0aW9uID0gKCkgPT4gKCd0cmFuc2xhdGUoJyArIHRoaXMuciArICcsJyArIHRoaXMuciArICcpJyk7XG5cbiAgICAvLyBHZXQgdGhlIG5ldyBhbmdsZVxuICAgIHByaXZhdGUgbmV3QW5nbGUgPSAoZCkgPT4gKHRoaXMuY29uZmlnLm1pbkFuZ2xlICsgKHRoaXMuc2NhbGUoZCkgKiB0aGlzLnJhbmdlKSk7XG5cbiAgICAvLyBpc1JlbmRlcmVkIEdhdWdlXG4gICAgaXNSZW5kZXJlZCA9ICgpID0+ICgodGhpcy5zdmcgIT09IHVuZGVmaW5lZCkpO1xuXG4gICAgLy8gVXBkYXRlIHBvaW50ZXIgdmFsdWVcbiAgICB1cGRhdGUgPSAobmV3VmFsdWUsIG5ld0NvbmZpZ3VyYXRpb24/KSA9PiB7XG4gICAgICAgIGlmIChuZXdDb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyZShuZXdDb25maWd1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld0FuZ2xlID0gdGhpcy5uZXdBbmdsZShuZXdWYWx1ZSk7IC8vIEdldCB0aGUgbmV3IGFuZ2xlXG5cbiAgICAgICAgdGhpcy5wb2ludGVyLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKHRoaXMuY29uZmlnLnRyYW5zaXRpb25NcykgLy8gRHVyYXRpb25cbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFbGFzdGljKSAvLyBUcmFuc2l0aW9uIHR5cGVcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKCcgKyBuZXdBbmdsZSArICcpJyk7IC8vIFJvdGF0ZSB0byBuZXcgYW5nbGVcbiAgICB9XG5cbiAgICAvLyBDb25maWd1cmVcbiAgICBjb25maWd1cmUgPSAoY29uZmlndXJhdGlvbikgPT4ge1xuICAgICAgICBsZXQgcHJvcDtcblxuICAgICAgICAvLyBOZXcgY29uZmlndXJhdGlvblxuICAgICAgICBmb3IgKHByb3AgaW4gY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jb25maWdbcHJvcF0gPSBjb25maWd1cmF0aW9uW3Byb3BdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yYW5nZSA9IHRoaXMuY29uZmlnLm1heEFuZ2xlIC0gdGhpcy5jb25maWcubWluQW5nbGU7XG4gICAgICAgIHRoaXMuciA9IHRoaXMuY29uZmlnLnNpemUgLyAyO1xuICAgICAgICB0aGlzLnBvaW50ZXJIZWFkTGVuZ3RoID0gTWF0aC5yb3VuZCh0aGlzLnIgKiB0aGlzLmNvbmZpZy5wb2ludGVySGVhZExlbmd0aFBlcmNlbnQpO1xuXG4gICAgICAgIC8vIExpbmVhciBzY2FsZSB0aGF0IG1hcHMgZG9tYWluIHZhbHVlcyB0byBhIHBlcmNlbnQgZnJvbSAwIHRvIDFcbiAgICAgICAgdGhpcy5zY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5yYW5nZShbMCwgMV0pXG4gICAgICAgICAgICAuZG9tYWluKFt0aGlzLmNvbmZpZy5taW5WYWx1ZSwgdGhpcy5jb25maWcubWF4VmFsdWVdKTtcblxuICAgICAgICAvLyBUaWNrIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgdGhpcy50aWNrcyA9IHRoaXMuc2NhbGUudGlja3ModGhpcy5jb25maWcubWFqb3JUaWNrcyk7ICAvLyBHZXQgdGhlIHRpY2tcbiAgICAgICAgdGhpcy50aWNrRGF0YSA9IGQzLnJhbmdlKHRoaXMuY29uZmlnLm1ham9yVGlja3MpXG4gICAgICAgICAgICAubWFwKCgpID0+ICgxIC8gdGhpcy5jb25maWcubWFqb3JUaWNrcykpOyAvLyBHZXQgdGhlIHJhbmdlIHZhbHVlIGZvciBlYWNoIHRpY2sgKHNlbWljaXJjbGUgZGl2aWRlZCBiZXR3ZWVuIDUgbWFqb3JUaWNrcylcblxuICAgICAgICAvLyBTZW1pY2lyY2xlIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgdGhpcy5hcmMgPSBkMy5hcmMoKVxuICAgICAgICAgICAgLmlubmVyUmFkaXVzKHRoaXMuciAtIHRoaXMuY29uZmlnLnJpbmdXaWR0aCAtIHRoaXMuY29uZmlnLnJpbmdJbnNldCkgLy8gSW5uZXIgcmFkaW8gdmFsdWVcbiAgICAgICAgICAgIC5vdXRlclJhZGl1cyh0aGlzLnIgLSB0aGlzLmNvbmZpZy5yaW5nSW5zZXQpIC8vIE91dGVyIHJhZGlvIHZhbHVlXG4gICAgICAgICAgICAuc3RhcnRBbmdsZSgoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhdGlvID0gZCAqIGk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVnMnJhZCh0aGlzLmNvbmZpZy5taW5BbmdsZSArIChyYXRpbyAqIHRoaXMucmFuZ2UpKTsgLy8gU3RhcnQgYW5nbGUgdmFsdWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZW5kQW5nbGUoKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByYXRpbyA9IGQgKiAoaSArIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZzJyYWQodGhpcy5jb25maWcubWluQW5nbGUgKyAocmF0aW8gKiB0aGlzLnJhbmdlKSk7IC8vIEVuZCBhbmdsZSB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVuZGVyIGdhdWdlIGNoYXJ0XG4gICAgcmVuZGVyID0gKG5ld1ZhbHVlPykgPT4ge1xuXG4gICAgICAgIC8vIEdldCB0aGUgaHRtbCBlbGVtZW50IGFuZCBhcHBlbmQgaXQgdGhlIGNoYXJ0XG4gICAgICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHRoaXMuY29udGFpbmVyKVxuICAgICAgICAgICAgLmFwcGVuZCgnc3ZnOnN2ZycpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnZ2F1Z2UnKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy5jb25maWcuY2xpcFdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuY29uZmlnLmNsaXBIZWlnaHQpO1xuXG4gICAgICAgIGNvbnN0IGNlbnRlclR4ID0gdGhpcy5jZW50ZXJUcmFuc2xhdGlvbigpOyAvLyBHZXQgdGhlIHRyYW5zbGF0aW9uXG5cbiAgICAgICAgLy8gQVJDOiBBcHBlbmQgZyBodG1sIGVsZW1lbnQgdG8gZGlzcGxheSB0aGUgY2lyY2xlIGFyY1xuICAgICAgICBjb25zdCBhcmNzID0gdGhpcy5zdmcuYXBwZW5kKCdnJylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdhcmMnKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGNlbnRlclR4KTtcblxuICAgICAgICAvLyBGaWxsIGVhY2ggc2VtaWNpcmNsZSBwb3J0aW9uIHdpdGggZGlmZmVyZW50IGNvbG9yc1xuICAgICAgICBhcmNzLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgICAgICAgICAuZGF0YSh0aGlzLnRpY2tEYXRhKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgKGQsIGkpID0+ICh0aGlzLmNvbmZpZy5hcmNDb2xvckZuKGQgKiBpKSkpXG4gICAgICAgICAgICAuYXR0cignZCcsIHRoaXMuYXJjKTtcblxuXG4gICAgICAgIC8vIExBQkVMOiBBcHBlbmQgZyBodG1sIGVsZW1lbnQgdG8gZGlzcGxheSBlYWNoIHJhbmdlIHZhbHVlXG4gICAgICAgIGNvbnN0IGxnID0gdGhpcy5zdmcuYXBwZW5kKCdnJylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdsYWJlbCcpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgY2VudGVyVHgpO1xuXG4gICAgICAgIC8vIEdldCBhbmQgZGlzcGxheSBlYWNoIHJhbmdlIHZhbHVlXG4gICAgICAgIGxnLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgICAgICAuZGF0YSh0aGlzLnRpY2tzKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5zY2FsZShkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBbmdsZSA9IHRoaXMuY29uZmlnLm1pbkFuZ2xlICsgKHJhdGlvICogdGhpcy5yYW5nZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdyb3RhdGUoJyArIG5ld0FuZ2xlICsgJykgdHJhbnNsYXRlKDAsJyArICh0aGlzLmNvbmZpZy5sYWJlbEluc2V0IC0gdGhpcy5yKSArICcpJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGV4dCh0aGlzLmNvbmZpZy5sYWJlbEZvcm1hdCk7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxpbmVEYXRhID0gW1t0aGlzLmNvbmZpZy5wb2ludGVyV2lkdGggLyAyLCAwXSwgWzAsIC10aGlzLnBvaW50ZXJIZWFkTGVuZ3RoXSwgWy0odGhpcy5jb25maWcucG9pbnRlcldpZHRoIC8gMiksIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbMCwgdGhpcy5jb25maWcucG9pbnRlclRhaWxMZW5ndGhdLCBbdGhpcy5jb25maWcucG9pbnRlcldpZHRoIC8gMiwgMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IHBvaW50ZXJMaW5lID0gZDMubGluZSgpLmN1cnZlKGQzLmN1cnZlTW9ub3RvbmVYKTsgLy8gR2V0IHRoZSBwb2ludGVyIGxpbmVcblxuXG4gICAgICAgIC8vIFBPSU5URVI6IEFwcGVuZCBnIGh0bWwgZWxlbWVudCB0byBkaXNwbGF5IHRoZSBwb2ludGVyXG4gICAgICAgIGNvbnN0IHBnID0gdGhpcy5zdmcuYXBwZW5kKCdnJykuZGF0YShbbGluZURhdGFdKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3BvaW50ZXInKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGNlbnRlclR4KTtcblxuICAgICAgICAvLyBTZXQgdGhlIHBvaW50ZXIgdmFsdWVcbiAgICAgICAgdGhpcy5wb2ludGVyID0gcGcuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgIC5hdHRyKCdkJywgcG9pbnRlckxpbmUpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSgnICsgdGhpcy5jb25maWcubWluQW5nbGUgKyAnKScpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlKG5ld1ZhbHVlID8gbmV3VmFsdWUgOiAwKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbW9kZWxzL2dhdWdlLnRzeCJdLCJzb3VyY2VSb290IjoiIn0=