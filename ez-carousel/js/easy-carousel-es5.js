"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var interval = void 0;
var Carousel = function () {
  function Carousel() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#carousel";

    _classCallCheck(this, Carousel);

    this.selector = document.querySelector(e), this.number = null == this.selector.dataset.ezViewNumber ? 5 : this.selector.dataset.ezViewNumber, this.autoScroll = null == this.selector.dataset.ezAutoscroll ? "off" : this.selector.dataset.ezAutoscroll, this.width = null == this.selector.dataset.ezWidth ? "100%" : this.selector.dataset.ezWidth, this.height = null == this.selector.dataset.ezHeight ? "200px" : this.selector.dataset.ezHeight, this.arrowColor = null == this.selector.dataset.ezArrowColor ? "black" : this.selector.dataset.ezArrowColor, this.bgColor = null == this.selector.dataset.ezBg ? "white" : this.selector.dataset.ezBg, this.arrowSize = null == this.selector.dataset.ezArrowSize ? "2rem" : this.selector.dataset.ezArrowSize, this.linked = null == this.selector.dataset.ezLinked ? "false" : this.selector.dataset.ezLinked, this.arrowType = null == this.selector.dataset.ezArrowType ? 1 : this.selector.dataset.ezArrowType, this.identifier = e, this.scrollTime = null == this.selector.dataset.ezScrollTime ? 5e3 : this.selector.dataset.ezScrollTime, this.linked = null == this.selector.dataset.ezLinked ? "false" : this.selector.dataset.ezLinked, 1 == this.arrowType ? (this.arrowSymbol_l = "&larr;", this.arrowSymbol_r = "&rarr;") : 2 == this.arrowType ? (this.arrowSymbol_l = "&#8672;", this.arrowSymbol_r = "&#8674;") : 3 == this.arrowType ? (this.arrowSymbol_l = "&lsaquo;", this.arrowSymbol_r = "&rsaquo;") : 4 == this.arrowType ? (this.arrowSymbol_l = "&laquo;", this.arrowSymbol_r = "&raquo;") : 5 == this.arrowType ? (this.arrowSymbol_l = "&lArr;", this.arrowSymbol_r = "&rArr;") : 6 == this.arrowType ? (this.arrowSymbol_l = "&#8668;", this.arrowSymbol_r = "&zigrarr;") : 7 == this.arrowType ? (this.arrowSymbol_l = "&#8678;", this.arrowSymbol_r = "&#8680;") : 8 == this.arrowType ? (this.arrowSymbol_l = "&loarr;", this.arrowSymbol_r = "&roarr;") : 9 == this.arrowType ? (this.arrowSymbol_l = "&pr;", this.arrowSymbol_r = "&sc;") : 10 == this.arrowType ? (this.arrowSymbol_l = "&#10096;", this.arrowSymbol_r = "&#10097;") : (this.arrowSymbol_l = "&#8672;", this.arrowSymbol_r = "&#8674;");
  }

  _createClass(Carousel, [{
    key: "makeCarousel",
    value: function makeCarousel() {
      var e = void 0,
          t = void 0,
          l = [],
          s = "<div class='previous'><p>" + this.arrowSymbol_l + "</p></div><div class='rotater'>";var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.selector.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _o2 = _step.value;
          e = _o2.getAttribute("src"), l.push(e), s = "false" == this.linked ? s + "<div class='carousel-img-holder'><img src=" + e + " class='carousel-img' /></div>" : s + "<a class='carousel-links' href=" + (t = _o2.getAttribute("data-ez-href")) + "><div class='carousel-img-holder'><img src=" + e + " class='carousel-img' /></div></a>";
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      s = s + "</div><div class='next'><p>" + this.arrowSymbol_r + "</p></div><div class=\"carousel-buttons\"></div>", this.selector.innerHTML = s;var o = this.selector.style;var _ref = [this.bgColor, this.width, this.height, "flex", "center", "relative", "wrap"];
      o.background = _ref[0];
      o.width = _ref[1];
      o.height = _ref[2];
      o.display = _ref[3];
      o.justifyContent = _ref[4];
      o.position = _ref[5];
      o.flexWrap = _ref[6];
      var i = this.selector.childNodes[0].style,
          r = this.selector.childNodes[2].style;i.position = r.position = "relative", i.top = r.top = "0", i.height = r.height = "90%", i.width = r.width = "10%", i.display = r.display = "flex", i.alignItems = r.alignItems = "center", i.fontSize = r.fontSize = this.arrowSize, i.color = r.color = this.arrowColor, i.justifyContent = r.justifyContent = "center", i.flexFlow = "row", r.flexFlow = "row-reverse", i.left = "0", r.right = "0", i.cursor = r.cursor = "pointer";var c = this.selector.childNodes[1];c.style.display = "flex", c.style.height = "90%", c.style.width = "80%", c.style.position = "relative", c.style.overflow = "hidden";var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.selector.childNodes[1].childNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _e3 = _step2.value;
          var _t3 = .8 * this.selector.getBoundingClientRect().height,
              _l3 = _t3;_t3 += "px";var _s3 = this.selector.getBoundingClientRect().height / 10 + "px",
              _o3 = (this.selector.getBoundingClientRect().width - document.querySelectorAll(this.identifier + " .next")[0].getBoundingClientRect().width - document.querySelectorAll(this.identifier + " .previous")[0].getBoundingClientRect().width) / this.number - this.selector.getBoundingClientRect().height / 10 * 2 + "px";_e3.setAttribute("style", "height: " + _t3 + "; width: " + _o3 + "; margin: " + _s3 + "; display: flex; align-items: center; justify-content: center;  transition: 0.5s;"), _e3.childNodes[0].style.width = _o3, _e3.childNodes[0].style.height = .8 * _l3 + "px", _e3.childNodes[0].style.margin = "auto";
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if ("true" == this.linked) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.selector.childNodes[1].childNodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _e = _step3.value;
            var _t = .8 * this.selector.getBoundingClientRect().height,
                _l = _t;_t += "px";var _s = this.selector.getBoundingClientRect().height / 10 + "px",
                _o = (this.selector.getBoundingClientRect().width - document.querySelectorAll(this.identifier + " .next")[0].getBoundingClientRect().width - document.querySelectorAll(this.identifier + " .previous")[0].getBoundingClientRect().width) / this.number - this.selector.getBoundingClientRect().height / 10 * 2 + "px";_e.childNodes[0].setAttribute("style", "height: " + _t + "; width: " + _o + "; margin: " + _s + "; display: flex; align-items: center; justify-content: center;  transition: 0.5s;"), _e.childNodes[0].childNodes[0].style.width = _o, _e.childNodes[0].childNodes[0].style.height = .8 * _l + "px", _e.childNodes[0].childNodes[0].style.margin = "auto";
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }var d = this.selector.childNodes[3].style,
          n = Math.ceil(this.selector.childNodes[1].childNodes.length / this.number),
          h = this.selector.getBoundingClientRect().height / 10 + "px";var _ref2 = ["100%", h, "flex", "wrap", "center", "center"];
      d.width = _ref2[0];
      d.height = _ref2[1];
      d.display = _ref2[2];
      d.flexFlow = _ref2[3];
      d.justifyContent = _ref2[4];
      d.alignItems = _ref2[5];
      for (var _e2 = 0; _e2 < n; _e2++) {
        var _t2 = .4 * this.selector.childNodes[3].getBoundingClientRect().height,
            _l2 = .4 * this.selector.childNodes[3].getBoundingClientRect().height,
            _s2 = _t2 / 2;var a = document.createElement("div");a.setAttribute("class", "carousel-button-blob"), a.setAttribute("style", "height: " + _t2 + "px; width: " + _l2 + "px; margin: " + _s2 + "px; background: " + this.arrowColor + "; border: 1px solid " + this.arrowColor + "; border-radius: 50%; transition: 0.2s; cursor: pointer;"), this.selector.childNodes[3].appendChild(a), a.setAttribute("id", "ez-cbb-" + (_e2 + 1)), 0 == _e2 && a.setAttribute("class", "carousel-button-blob selected");
      }this.carouselActions(), "on" == this.autoScroll && this.autoScroller();
    }
  }, {
    key: "carouselActions",
    value: function carouselActions() {
      var e = void 0,
          t = void 0,
          l = void 0,
          s = void 0,
          o = void 0,
          i = void 0,
          r = void 0;s = 1, i = 0, t = this.selector, r = this.identifier, l = Math.ceil(this.selector.childNodes[1].childNodes.length / this.number), console.log(t), document.querySelector(this.identifier + " .selected").style.background = "transparent";var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = document.querySelectorAll(r + " .carousel-button-blob")[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _t8 = _step4.value;
          if (-1 == [].concat(_toConsumableArray(_t8.classList)).indexOf("selected")) {
            e = _t8.style.background;break;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        var _loop = function _loop() {
          var l = _step5.value;
          l.onmouseover = function () {
            l.style.background = "transparent";
          }, l.onmouseout = function () {
            -1 == [].concat(_toConsumableArray(this.classList)).indexOf("selected") && (l.style.background = e);
          }, l.onclick = function () {
            var _iteratorNormalCompletion14 = true;
            var _didIteratorError14 = false;
            var _iteratorError14 = undefined;

            try {
              for (var _iterator14 = document.querySelectorAll(r + " .carousel-button-blob")[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                var _e10 = _step14.value;
                -1 != [].concat(_toConsumableArray(_e10.classList)).indexOf("selected") && (s = _e10.id.slice(-1 * (_e10.id.length - 7)));
              }
            } catch (err) {
              _didIteratorError14 = true;
              _iteratorError14 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion14 && _iterator14.return) {
                  _iterator14.return();
                }
              } finally {
                if (_didIteratorError14) {
                  throw _iteratorError14;
                }
              }
            }

            var _iteratorNormalCompletion15 = true;
            var _didIteratorError15 = false;
            var _iteratorError15 = undefined;

            try {
              for (var _iterator15 = document.querySelectorAll(r + " .carousel-button-blob")[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                var _e11 = _step15.value;
                -1 != [].concat(_toConsumableArray(_e11.classList)).indexOf("selected") && _e11.classList.remove("selected");
              }
            } catch (err) {
              _didIteratorError15 = true;
              _iteratorError15 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion15 && _iterator15.return) {
                  _iterator15.return();
                }
              } finally {
                if (_didIteratorError15) {
                  throw _iteratorError15;
                }
              }
            }

            this.classList.add("selected");var _iteratorNormalCompletion16 = true;
            var _didIteratorError16 = false;
            var _iteratorError16 = undefined;

            try {
              for (var _iterator16 = document.querySelectorAll(r + " .carousel-button-blob")[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                var _t9 = _step16.value;
                -1 == [].concat(_toConsumableArray(_t9.classList)).indexOf("selected") && (_t9.style.background = e);
              }
            } catch (err) {
              _didIteratorError16 = true;
              _iteratorError16 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion16 && _iterator16.return) {
                  _iterator16.return();
                }
              } finally {
                if (_didIteratorError16) {
                  throw _iteratorError16;
                }
              }
            }

            o = l.id.slice(-1 * (l.id.length - 7));var c = t.getBoundingClientRect().width - document.querySelectorAll(r + " .next")[0].getBoundingClientRect().width - document.querySelectorAll(r + " .previous")[0].getBoundingClientRect().width,
                d = s - o;var _iteratorNormalCompletion17 = true;
            var _didIteratorError17 = false;
            var _iteratorError17 = undefined;

            try {
              for (var _iterator17 = t.childNodes[1].childNodes[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                var _e12 = _step17.value;
                _e12.style.transform = "translateX(" + (i + d * c) + "px)";
              }
            } catch (err) {
              _didIteratorError17 = true;
              _iteratorError17 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion17 && _iterator17.return) {
                  _iterator17.return();
                }
              } finally {
                if (_didIteratorError17) {
                  throw _iteratorError17;
                }
              }
            }

            i += d * c;
          };
        };

        for (var _iterator5 = document.querySelectorAll(r + " .carousel-button-blob")[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      document.querySelector(r + " .previous").onclick = function () {
        var s = void 0;var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = document.querySelectorAll(r + " .carousel-button-blob").entries()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var _step6$value = _slicedToArray(_step6.value, 2),
                _e6 = _step6$value[0],
                _t4 = _step6$value[1];

            if (-1 != [].concat(_toConsumableArray(_t4.classList)).indexOf("selected")) {
              s = _t4.id, _t4.classList.remove("selected");0 == _e6 ? _t4.classList.add("selected") : document.querySelectorAll(r + " .carousel-button-blob")[_e6 - 1].classList.add("selected");break;
            }
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        var o = t.getBoundingClientRect().width - document.querySelectorAll(r + " .next")[0].getBoundingClientRect().width - document.querySelectorAll(r + " .previous")[0].getBoundingClientRect().width;if ("ez-cbb-1" == s) {
          i = -1 * (l - 1) * o;var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = t.childNodes[1].childNodes[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var _e4 = _step7.value;
              _e4.style.transform = "translateX(" + i + "px)";
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7.return) {
                _iterator7.return();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }

          document.querySelectorAll(r + " .carousel-button-blob")[0].classList.remove("selected"), document.querySelectorAll(r + " .carousel-button-blob")[l - 1].classList.add("selected");
        } else {
          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = t.childNodes[1].childNodes[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var _e5 = _step8.value;
              _e5.style.transform = "translateX(" + (i + o) + "px)";
            }
          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8.return) {
                _iterator8.return();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }

          i += o;
        }var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = document.querySelectorAll(r + " .carousel-button-blob")[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var _t5 = _step9.value;
            -1 == [].concat(_toConsumableArray(_t5.classList)).indexOf("selected") ? _t5.style.background = e : _t5.style.background = "transparent";
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9.return) {
              _iterator9.return();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }
      }, document.querySelector(r + " .next").onclick = function () {
        var s = void 0;var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
          for (var _iterator10 = document.querySelectorAll(r + " .carousel-button-blob").entries()[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            var _step10$value = _slicedToArray(_step10.value, 2),
                _e9 = _step10$value[0],
                _t6 = _step10$value[1];

            if (-1 != [].concat(_toConsumableArray(_t6.classList)).indexOf("selected")) {
              s = _t6.id, _t6.classList.remove("selected");_e9 == l - 1 ? _t6.classList.add("selected") : document.querySelectorAll(r + " .carousel-button-blob")[_e9 + 1].classList.add("selected");break;
            }
          }
        } catch (err) {
          _didIteratorError10 = true;
          _iteratorError10 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion10 && _iterator10.return) {
              _iterator10.return();
            }
          } finally {
            if (_didIteratorError10) {
              throw _iteratorError10;
            }
          }
        }

        var o = t.getBoundingClientRect().width - document.querySelectorAll(r + " .next")[0].getBoundingClientRect().width - document.querySelectorAll(r + " .previous")[0].getBoundingClientRect().width;if (s == "ez-cbb-" + l) {
          i = 0;var _iteratorNormalCompletion11 = true;
          var _didIteratorError11 = false;
          var _iteratorError11 = undefined;

          try {
            for (var _iterator11 = t.childNodes[1].childNodes[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
              var _e7 = _step11.value;
              _e7.style.transform = "translateX(" + i + "px)";
            }
          } catch (err) {
            _didIteratorError11 = true;
            _iteratorError11 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion11 && _iterator11.return) {
                _iterator11.return();
              }
            } finally {
              if (_didIteratorError11) {
                throw _iteratorError11;
              }
            }
          }

          document.querySelectorAll(r + " .carousel-button-blob")[0].classList.add("selected"), document.querySelectorAll(r + " .carousel-button-blob")[l - 1].classList.remove("selected");
        } else {
          i -= o;var _iteratorNormalCompletion12 = true;
          var _didIteratorError12 = false;
          var _iteratorError12 = undefined;

          try {
            for (var _iterator12 = t.childNodes[1].childNodes[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
              var _e8 = _step12.value;
              _e8.style.transform = "translateX(" + i + "px)";
            }
          } catch (err) {
            _didIteratorError12 = true;
            _iteratorError12 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion12 && _iterator12.return) {
                _iterator12.return();
              }
            } finally {
              if (_didIteratorError12) {
                throw _iteratorError12;
              }
            }
          }
        }var _iteratorNormalCompletion13 = true;
        var _didIteratorError13 = false;
        var _iteratorError13 = undefined;

        try {
          for (var _iterator13 = document.querySelectorAll(r + " .carousel-button-blob")[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
            var _t7 = _step13.value;
            -1 == [].concat(_toConsumableArray(_t7.classList)).indexOf("selected") ? _t7.style.background = e : _t7.style.background = "transparent";
          }
        } catch (err) {
          _didIteratorError13 = true;
          _iteratorError13 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion13 && _iterator13.return) {
              _iterator13.return();
            }
          } finally {
            if (_didIteratorError13) {
              throw _iteratorError13;
            }
          }
        }
      };
    }
  }, {
    key: "autoScroller",
    value: function autoScroller() {
      var _iteratorNormalCompletion18 = true;
      var _didIteratorError18 = false;
      var _iteratorError18 = undefined;

      try {
        for (var _iterator18 = document.querySelectorAll(this.identifier + " .carousel-button-blob")[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
          var _e16 = _step18.value;
          _e16.onclick = function () {};
        }
      } catch (err) {
        _didIteratorError18 = true;
        _iteratorError18 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion18 && _iterator18.return) {
            _iterator18.return();
          }
        } finally {
          if (_didIteratorError18) {
            throw _iteratorError18;
          }
        }
      }

      var e = this;e.selector.childNodes[0].innerHTML = e.selector.childNodes[2].innerHTML = "", e.selector.childNodes[0].style.width = e.selector.childNodes[2].style.width = "0";var t = this.selector.childNodes[1];t.style.display = "flex", t.style.height = "90%", t.style.width = "100%", t.style.position = "relative", t.style.overflow = "hidden";var _iteratorNormalCompletion19 = true;
      var _didIteratorError19 = false;
      var _iteratorError19 = undefined;

      try {
        for (var _iterator19 = this.selector.childNodes[1].childNodes[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
          var _e17 = _step19.value;
          var _t13 = .8 * this.selector.getBoundingClientRect().height,
              _l4 = _t13;_t13 += "px";var _s4 = this.selector.getBoundingClientRect().height / 10 + "px",
              _o4 = (this.selector.getBoundingClientRect().width - document.querySelectorAll(this.identifier + " .next")[0].getBoundingClientRect().width - document.querySelectorAll(this.identifier + " .previous")[0].getBoundingClientRect().width) / this.number - this.selector.getBoundingClientRect().height / 10 * 2 + "px";_e17.setAttribute("style", "height: " + _t13 + "; width: " + _o4 + "; margin: " + _s4 + "; display: flex; align-items: center; justify-content: center;  transition: 0.5s;"), _e17.childNodes[0].style.width = _o4, _e17.childNodes[0].style.height = .8 * _l4 + "px", _e17.childNodes[0].style.margin = "auto";
        }
      } catch (err) {
        _didIteratorError19 = true;
        _iteratorError19 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion19 && _iterator19.return) {
            _iterator19.return();
          }
        } finally {
          if (_didIteratorError19) {
            throw _iteratorError19;
          }
        }
      }

      var _iteratorNormalCompletion20 = true;
      var _didIteratorError20 = false;
      var _iteratorError20 = undefined;

      try {
        for (var _iterator20 = document.querySelectorAll(this.identifier + " .carousel-button-blob")[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
          var _e18 = _step20.value;
          _e18.style.cursor = "default";
        }
      } catch (err) {
        _didIteratorError20 = true;
        _iteratorError20 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion20 && _iterator20.return) {
            _iterator20.return();
          }
        } finally {
          if (_didIteratorError20) {
            throw _iteratorError20;
          }
        }
      }

      var l = void 0,
          s = void 0,
          o = e.identifier,
          i = 0,
          r = e.selector.getBoundingClientRect().width - document.querySelectorAll(o + " .next")[0].getBoundingClientRect().width - document.querySelectorAll(o + " .previous")[0].getBoundingClientRect().width,
          c = Math.ceil(e.selector.childNodes[1].childNodes.length / this.number);document.body.onload = function () {
        interval = setInterval(function () {
          var _iteratorNormalCompletion21 = true;
          var _didIteratorError21 = false;
          var _iteratorError21 = undefined;

          try {
            for (var _iterator21 = document.querySelectorAll(o + " .carousel-button-blob")[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
              var _e13 = _step21.value;
              if (-1 == [].concat(_toConsumableArray(_e13.classList)).indexOf("selected")) {
                s = _e13.style.background;break;
              }
            }
          } catch (err) {
            _didIteratorError21 = true;
            _iteratorError21 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion21 && _iterator21.return) {
                _iterator21.return();
              }
            } finally {
              if (_didIteratorError21) {
                throw _iteratorError21;
              }
            }
          }

          var _iteratorNormalCompletion22 = true;
          var _didIteratorError22 = false;
          var _iteratorError22 = undefined;

          try {
            for (var _iterator22 = document.querySelectorAll(o + " .carousel-button-blob").entries()[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
              var _step22$value = _slicedToArray(_step22.value, 2),
                  _e14 = _step22$value[0],
                  _t12 = _step22$value[1];

              if (-1 != [].concat(_toConsumableArray(_t12.classList)).indexOf("selected")) {
                l = _t12.id, _t12.classList.remove("selected");_e14 == c - 1 ? _t12.classList.add("selected") : document.querySelectorAll(o + " .carousel-button-blob")[_e14 + 1].classList.add("selected");break;
              }
            }
          } catch (err) {
            _didIteratorError22 = true;
            _iteratorError22 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion22 && _iterator22.return) {
                _iterator22.return();
              }
            } finally {
              if (_didIteratorError22) {
                throw _iteratorError22;
              }
            }
          }

          if (l == "ez-cbb-" + c) {
            i = 0;var _iteratorNormalCompletion23 = true;
            var _didIteratorError23 = false;
            var _iteratorError23 = undefined;

            try {
              for (var _iterator23 = e.selector.childNodes[1].childNodes[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                var _t10 = _step23.value;
                _t10.style.transform = "translateX(" + i + "px)";
              }
            } catch (err) {
              _didIteratorError23 = true;
              _iteratorError23 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion23 && _iterator23.return) {
                  _iterator23.return();
                }
              } finally {
                if (_didIteratorError23) {
                  throw _iteratorError23;
                }
              }
            }

            document.querySelectorAll(o + " .carousel-button-blob")[0].classList.add("selected"), document.querySelectorAll(o + " .carousel-button-blob")[c - 1].classList.remove("selected");
          } else {
            i -= r;var _iteratorNormalCompletion24 = true;
            var _didIteratorError24 = false;
            var _iteratorError24 = undefined;

            try {
              for (var _iterator24 = e.selector.childNodes[1].childNodes[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
                var _t11 = _step24.value;
                _t11.style.transform = "translateX(" + i + "px)";
              }
            } catch (err) {
              _didIteratorError24 = true;
              _iteratorError24 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion24 && _iterator24.return) {
                  _iterator24.return();
                }
              } finally {
                if (_didIteratorError24) {
                  throw _iteratorError24;
                }
              }
            }
          }var _iteratorNormalCompletion25 = true;
          var _didIteratorError25 = false;
          var _iteratorError25 = undefined;

          try {
            for (var _iterator25 = document.querySelectorAll(o + " .carousel-button-blob")[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
              var _e15 = _step25.value;
              -1 == [].concat(_toConsumableArray(_e15.classList)).indexOf("selected") ? _e15.style.background = s : _e15.style.background = "transparent";
            }
          } catch (err) {
            _didIteratorError25 = true;
            _iteratorError25 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion25 && _iterator25.return) {
                _iterator25.return();
              }
            } finally {
              if (_didIteratorError25) {
                throw _iteratorError25;
              }
            }
          }
        }, e.scrollTime);
      };
    }
  }]);

  return Carousel;
}();