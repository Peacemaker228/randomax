var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key != "symbol" ? key + "" : key, value);
import { c as createReactComponent, I as Icon, _ as _extends, g as genStyleHooks, r as resetComponent, u as unit, d as devUseWarning, C as ConfigContext, a as cn, p as pickAttrs, b as CSSMotion, e as composeRef, f as replaceElement, R as RefIcon$7, h as RefIcon$8, i as RefIcon$9, j as RefIcon$a, k as _possibleConstructorReturn, l as _getPrototypeOf, m as _isNativeReflectConstruct, n as _inherits, o as _createClass, q as _classCallCheck, s as _slicedToArray, t as _typeof, v as _defineProperty, K as KeyCode, w as CSSMotionList, x as _objectWithoutProperties, y as _objectSpread2, z as _toConsumableArray, A as toArray$1, B as useMergedState, D as warningOnce, E as merge, F as genCollapseMotion, G as resetIcon, H as useSize, J as RefIcon$b, L as cloneElement, M as initCollapseMotion, N as omit, O as useSafeState, P as Button, Q as convertLegacyProps, S as useComposeRef, T as warning, U as useId, V as contains, W as Portal, X as canUseDom, Y as useEvent, Z as useLocale, $ as getConfirmLocale, a0 as DisabledContextProvider, a1 as initFadeMotion, a2 as initZoomMotion, a3 as genFocusStyle, a4 as useCSSVarCls, a5 as useZIndex, a6 as ContextIsolator, a7 as zIndexContext, a8 as getTransitionName, a9 as Skeleton$1, aa as genSubStyleComponent, ab as clearFix, ac as ConfigProvider, ad as useToken, ae as CONTAINER_MAX_OFFSET, af as globalConfig, ag as warnContext, ah as getReactRender, ai as warning$1, aj as localeValues, ak as Keyframe, al as Select, am as genPurePanel, an as Dropdown$1, ao as RefIcon$c, ap as useLayoutEffect, aq as isPresetSize, ar as isEqual, as as wrapperRaf, at as getClientSize, au as addEventListenerWrap, av as getOffset, aw as TinyColor, ax as textEllipsis, ay as RefIcon$d, az as RefIcon$e, aA as Col$1, aB as extendsObject, aC as Pagination$1, aD as useBreakpoint, aE as responsiveArray, aF as Row$1, aG as DefaultRenderEmpty, aH as Spin, aI as withPureRenderTheme, aJ as _unsupportedIterableToArray, aK as genFocusOutline, aL as RefIcon$f, aM as Progress$1, aN as Tooltip, aO as DisabledContext, aP as Wave, aQ as RefIcon$g, aR as genPresetColor, aS as isPresetColor, aT as isPresetStatusColor, aU as RefIcon$h, aV as Checkbox, aW as Input, aX as RefIcon$i, aY as Dropdown$2, aZ as operationUnit, a_ as useMultipleSelect, a$ as FormItemInputContext, b0 as getStatusClassNames, b1 as getMergedStatus, b2 as conductCheck, b3 as convertDataToEntities, b4 as useBaseProps, b5 as useMemo$1, b6 as Tree$1, b7 as useId$1, b8 as BaseSelect, b9 as initComponentToken, ba as genTreeStyle, bb as getStyle, bc as useCompactItemContext, bd as useSelectStyle, be as useVariant, bf as useShowArrow, bg as useIcons, bh as mergedBuiltinPlacements, bi as SwitcherIconCom, bj as useTheme, bk as jsxRuntimeExports, bl as IconX, bm as IconCircleXFilled, bn as GlobalNotificationContext, bo as IconChevronRight, bp as Button$1, bq as Prism, br as Typography, bs as Tooltip$1, bt as Layout$1, bu as styles$j, bv as Title, bw as Space, bx as Badge, by as Select$1, bz as Radio$1, bA as Icon$1, bB as FileInput, bC as createRoot, bD as ThemeProvider, bE as nanoid, bF as Tabs$1, bG as Menu$1, bH as IconChevronsRight, bI as IconChevronsLeft, bJ as IconChevronLeft, bK as _$1, bL as IconChevronDown, bM as Table, bN as client, bO as Empty, bP as InputSearch, bQ as Input$1, bR as Tree$2, bS as lodashExports, bT as Empty$1, bU as instance, bV as resources } from "./сommon-CiYO9esG.js";
import { cl, cf, b_, bZ, c1, c7, c5, c4, cm, c6, cb, ca, c9, ce, cc, cj, ck, cg, ch, c2, ci, bY, cd, c0, b$, c3, c8, bW, bX } from "./сommon-CiYO9esG.js";
import * as React from "react";
import React__default, { useContext, useRef, useState, useEffect, useMemo, Children, useCallback, cloneElement as cloneElement$1, createElement, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
/**
 * @license @tabler/icons-react v3.21.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconDots = createReactComponent("outline", "dots", "IconDots", [["path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]]);
/**
 * @license @tabler/icons-react v3.21.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconAlertCircleFilled = createReactComponent("filled", "alert-circle-filled", "IconAlertCircleFilled", [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.21.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconCircleCheckFilled = createReactComponent("filled", "circle-check-filled", "IconCircleCheckFilled", [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.21.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconInfoCircleFilled = createReactComponent("filled", "info-circle-filled", "IconInfoCircleFilled", [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z", key: "svg-0" }]]), InfoCircleFilled$1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, InfoCircleFilled = /* @__PURE__ */ __name(function(props, ref) {
  return /* @__PURE__ */ React.createElement(Icon, _extends({}, props, {
    ref,
    icon: InfoCircleFilled$1
  }));
}, "InfoCircleFilled"), RefIcon$6 = /* @__PURE__ */ React.forwardRef(InfoCircleFilled);
process.env.NODE_ENV !== "production" && (RefIcon$6.displayName = "InfoCircleFilled");
const genAlertTypeStyle = /* @__PURE__ */ __name((bgColor, borderColor, iconColor, token, alertCls) => ({
  background: bgColor,
  border: `${unit(token.lineWidth)} ${token.lineType} ${borderColor}`,
  [`${alertCls}-icon`]: {
    color: iconColor
  }
}), "genAlertTypeStyle"), genBaseStyle$4 = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    motionDurationSlow: duration,
    marginXS,
    marginSM,
    fontSize,
    fontSizeLG,
    lineHeight,
    borderRadiusLG: borderRadius,
    motionEaseInOutCirc,
    withDescriptionIconSize,
    colorText,
    colorTextHeading,
    withDescriptionPadding,
    defaultPadding
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: defaultPadding,
      wordWrap: "break-word",
      borderRadius,
      [`&${componentCls}-rtl`]: {
        direction: "rtl"
      },
      [`${componentCls}-content`]: {
        flex: 1,
        minWidth: 0
      },
      [`${componentCls}-icon`]: {
        marginInlineEnd: marginXS,
        lineHeight: 0
      },
      "&-description": {
        display: "none",
        fontSize,
        lineHeight
      },
      "&-message": {
        color: colorTextHeading
      },
      [`&${componentCls}-motion-leave`]: {
        overflow: "hidden",
        opacity: 1,
        transition: `max-height ${duration} ${motionEaseInOutCirc}, opacity ${duration} ${motionEaseInOutCirc},
        padding-top ${duration} ${motionEaseInOutCirc}, padding-bottom ${duration} ${motionEaseInOutCirc},
        margin-bottom ${duration} ${motionEaseInOutCirc}`
      },
      [`&${componentCls}-motion-leave-active`]: {
        maxHeight: 0,
        marginBottom: "0 !important",
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
      }
    }),
    [`${componentCls}-with-description`]: {
      alignItems: "flex-start",
      padding: withDescriptionPadding,
      [`${componentCls}-icon`]: {
        marginInlineEnd: marginSM,
        fontSize: withDescriptionIconSize,
        lineHeight: 0
      },
      [`${componentCls}-message`]: {
        display: "block",
        marginBottom: marginXS,
        color: colorTextHeading,
        fontSize: fontSizeLG
      },
      [`${componentCls}-description`]: {
        display: "block",
        color: colorText
      }
    },
    [`${componentCls}-banner`]: {
      marginBottom: 0,
      border: "0 !important",
      borderRadius: 0
    }
  };
}, "genBaseStyle$4"), genTypeStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    colorSuccess,
    colorSuccessBorder,
    colorSuccessBg,
    colorWarning,
    colorWarningBorder,
    colorWarningBg,
    colorError,
    colorErrorBorder,
    colorErrorBg,
    colorInfo,
    colorInfoBorder,
    colorInfoBg
  } = token;
  return {
    [componentCls]: {
      "&-success": genAlertTypeStyle(colorSuccessBg, colorSuccessBorder, colorSuccess, token, componentCls),
      "&-info": genAlertTypeStyle(colorInfoBg, colorInfoBorder, colorInfo, token, componentCls),
      "&-warning": genAlertTypeStyle(colorWarningBg, colorWarningBorder, colorWarning, token, componentCls),
      "&-error": Object.assign(Object.assign({}, genAlertTypeStyle(colorErrorBg, colorErrorBorder, colorError, token, componentCls)), {
        [`${componentCls}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, "genTypeStyle"), genActionStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    iconCls,
    motionDurationMid,
    marginXS,
    fontSizeIcon,
    colorIcon,
    colorIconHover
  } = token;
  return {
    [componentCls]: {
      "&-action": {
        marginInlineStart: marginXS
      },
      [`${componentCls}-close-icon`]: {
        marginInlineStart: marginXS,
        padding: 0,
        overflow: "hidden",
        fontSize: fontSizeIcon,
        lineHeight: unit(fontSizeIcon),
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        [`${iconCls}-close`]: {
          color: colorIcon,
          transition: `color ${motionDurationMid}`,
          "&:hover": {
            color: colorIconHover
          }
        }
      },
      "&-close-text": {
        color: colorIcon,
        transition: `color ${motionDurationMid}`,
        "&:hover": {
          color: colorIconHover
        }
      }
    }
  };
}, "genActionStyle"), prepareComponentToken$d = /* @__PURE__ */ __name((token) => ({
  withDescriptionIconSize: token.fontSizeHeading3,
  defaultPadding: `${token.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${token.paddingMD}px ${token.paddingContentHorizontalLG}px`
}), "prepareComponentToken$d"), useStyle$d = genStyleHooks("Alert", (token) => [genBaseStyle$4(token), genTypeStyle(token), genActionStyle(token)], prepareComponentToken$d);
var __rest$m = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
const iconMapFilled = {
  success: RefIcon$9,
  info: RefIcon$6,
  error: RefIcon$8,
  warning: RefIcon$7
}, IconNode = /* @__PURE__ */ __name((props) => {
  const {
    icon: icon2,
    prefixCls,
    type
  } = props, iconType = iconMapFilled[type] || null;
  return icon2 ? replaceElement(icon2, /* @__PURE__ */ React.createElement("span", {
    className: `${prefixCls}-icon`
  }, icon2), () => ({
    className: cn(`${prefixCls}-icon`, icon2.props.className)
  })) : /* @__PURE__ */ React.createElement(iconType, {
    className: `${prefixCls}-icon`
  });
}, "IconNode"), CloseIconNode = /* @__PURE__ */ __name((props) => {
  const {
    isClosable,
    prefixCls,
    closeIcon,
    handleClose,
    ariaProps
  } = props, mergedCloseIcon = closeIcon === !0 || closeIcon === void 0 ? /* @__PURE__ */ React.createElement(RefIcon$a, null) : closeIcon;
  return isClosable ? /* @__PURE__ */ React.createElement("button", Object.assign({
    type: "button",
    onClick: handleClose,
    className: `${prefixCls}-close-icon`,
    tabIndex: 0
  }, ariaProps), mergedCloseIcon) : null;
}, "CloseIconNode"), Alert$2 = /* @__PURE__ */ React.forwardRef((props, ref) => {
  const {
    description,
    prefixCls: customizePrefixCls,
    message,
    banner,
    className,
    rootClassName,
    style,
    onMouseEnter,
    onMouseLeave,
    onClick,
    afterClose,
    showIcon,
    closable,
    closeText,
    closeIcon,
    action,
    id
  } = props, otherProps = __rest$m(props, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [closed, setClosed] = React.useState(!1);
  process.env.NODE_ENV !== "production" && devUseWarning("Alert").deprecated(!closeText, "closeText", "closable.closeIcon");
  const internalRef = React.useRef(null);
  React.useImperativeHandle(ref, () => ({
    nativeElement: internalRef.current
  }));
  const {
    getPrefixCls,
    direction,
    alert
  } = React.useContext(ConfigContext), prefixCls = getPrefixCls("alert", customizePrefixCls), [wrapCSSVar, hashId, cssVarCls] = useStyle$d(prefixCls), handleClose = /* @__PURE__ */ __name((e2) => {
    var _a;
    setClosed(!0), (_a = props.onClose) === null || _a === void 0 || _a.call(props, e2);
  }, "handleClose"), type = React.useMemo(() => props.type !== void 0 ? props.type : banner ? "warning" : "info", [props.type, banner]), isClosable = React.useMemo(() => typeof closable == "object" && closable.closeIcon || closeText ? !0 : typeof closable == "boolean" ? closable : closeIcon !== !1 && closeIcon !== null && closeIcon !== void 0 ? !0 : !!(alert != null && alert.closable), [closeText, closeIcon, closable, alert == null ? void 0 : alert.closable]), isShowIcon = banner && showIcon === void 0 ? !0 : showIcon, alertCls = cn(prefixCls, `${prefixCls}-${type}`, {
    [`${prefixCls}-with-description`]: !!description,
    [`${prefixCls}-no-icon`]: !isShowIcon,
    [`${prefixCls}-banner`]: !!banner,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, alert == null ? void 0 : alert.className, className, rootClassName, cssVarCls, hashId), restProps = pickAttrs(otherProps, {
    aria: !0,
    data: !0
  }), mergedCloseIcon = React.useMemo(() => {
    var _a, _b;
    return typeof closable == "object" && closable.closeIcon ? closable.closeIcon : closeText || (closeIcon !== void 0 ? closeIcon : typeof (alert == null ? void 0 : alert.closable) == "object" && (!((_a = alert == null ? void 0 : alert.closable) === null || _a === void 0) && _a.closeIcon) ? (_b = alert == null ? void 0 : alert.closable) === null || _b === void 0 ? void 0 : _b.closeIcon : alert == null ? void 0 : alert.closeIcon);
  }, [closeIcon, closable, closeText, alert == null ? void 0 : alert.closeIcon]), mergedAriaProps = React.useMemo(() => {
    const merged = closable ?? (alert == null ? void 0 : alert.closable);
    if (typeof merged == "object") {
      const {
        closeIcon: _2
      } = merged;
      return __rest$m(merged, ["closeIcon"]);
    }
    return {};
  }, [closable, alert == null ? void 0 : alert.closable]);
  return wrapCSSVar(/* @__PURE__ */ React.createElement(CSSMotion, {
    visible: !closed,
    motionName: `${prefixCls}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: /* @__PURE__ */ __name((node) => ({
      maxHeight: node.offsetHeight
    }), "onLeaveStart"),
    onLeaveEnd: afterClose
  }, (_ref, setRef) => {
    let {
      className: motionClassName,
      style: motionStyle
    } = _ref;
    return /* @__PURE__ */ React.createElement("div", Object.assign({
      id,
      ref: composeRef(internalRef, setRef),
      "data-show": !closed,
      className: cn(alertCls, motionClassName),
      style: Object.assign(Object.assign(Object.assign({}, alert == null ? void 0 : alert.style), style), motionStyle),
      onMouseEnter,
      onMouseLeave,
      onClick,
      role: "alert"
    }, restProps), isShowIcon ? /* @__PURE__ */ React.createElement(IconNode, {
      description,
      icon: props.icon,
      prefixCls,
      type
    }) : null, /* @__PURE__ */ React.createElement("div", {
      className: `${prefixCls}-content`
    }, message ? /* @__PURE__ */ React.createElement("div", {
      className: `${prefixCls}-message`
    }, message) : null, description ? /* @__PURE__ */ React.createElement("div", {
      className: `${prefixCls}-description`
    }, description) : null), action ? /* @__PURE__ */ React.createElement("div", {
      className: `${prefixCls}-action`
    }, action) : null, /* @__PURE__ */ React.createElement(CloseIconNode, {
      isClosable,
      prefixCls,
      closeIcon: mergedCloseIcon,
      handleClose,
      ariaProps: mergedAriaProps
    }));
  }));
});
process.env.NODE_ENV !== "production" && (Alert$2.displayName = "Alert");
function _callSuper(t2, o2, e2) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t2, _isNativeReflectConstruct() ? Reflect.construct(o2, e2 || [], _getPrototypeOf(t2).constructor) : o2.apply(t2, e2));
}
__name(_callSuper, "_callSuper");
let ErrorBoundary = /* @__PURE__ */ function(_React$Component) {
  function ErrorBoundary2() {
    var _this;
    return _classCallCheck(this, ErrorBoundary2), _this = _callSuper(this, ErrorBoundary2, arguments), _this.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, _this;
  }
  return __name(ErrorBoundary2, "ErrorBoundary"), _inherits(ErrorBoundary2, _React$Component), _createClass(ErrorBoundary2, [{
    key: "componentDidCatch",
    value: /* @__PURE__ */ __name(function(error, info) {
      this.setState({
        error,
        info
      });
    }, "componentDidCatch")
  }, {
    key: "render",
    value: /* @__PURE__ */ __name(function() {
      const {
        message,
        description,
        id,
        children
      } = this.props, {
        error,
        info
      } = this.state, componentStack = (info == null ? void 0 : info.componentStack) || null, errorMessage = typeof message > "u" ? (error || "").toString() : message, errorDescription = typeof description > "u" ? componentStack : description;
      return error ? /* @__PURE__ */ React.createElement(Alert$2, {
        id,
        type: "error",
        message: errorMessage,
        description: /* @__PURE__ */ React.createElement("pre", {
          style: {
            fontSize: "0.9em",
            overflowX: "auto"
          }
        }, errorDescription)
      }) : children;
    }, "render")
  }]);
}(React.Component);
const Alert$1 = Alert$2;
Alert$1.ErrorBoundary = ErrorBoundary;
var Notify = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls, style = props.style, className = props.className, _props$duration = props.duration, duration = _props$duration === void 0 ? 4.5 : _props$duration, showProgress = props.showProgress, _props$pauseOnHover = props.pauseOnHover, pauseOnHover = _props$pauseOnHover === void 0 ? !0 : _props$pauseOnHover, eventKey = props.eventKey, content = props.content, closable = props.closable, _props$closeIcon = props.closeIcon, closeIcon = _props$closeIcon === void 0 ? "x" : _props$closeIcon, divProps = props.props, onClick = props.onClick, onNoticeClose = props.onNoticeClose, times = props.times, forcedHovering = props.hovering, _React$useState = React.useState(!1), _React$useState2 = _slicedToArray(_React$useState, 2), hovering = _React$useState2[0], setHovering = _React$useState2[1], _React$useState3 = React.useState(0), _React$useState4 = _slicedToArray(_React$useState3, 2), percent = _React$useState4[0], setPercent = _React$useState4[1], _React$useState5 = React.useState(0), _React$useState6 = _slicedToArray(_React$useState5, 2), spentTime = _React$useState6[0], setSpentTime = _React$useState6[1], mergedHovering = forcedHovering || hovering, mergedShowProgress = duration > 0 && showProgress, onInternalClose = /* @__PURE__ */ __name(function() {
    onNoticeClose(eventKey);
  }, "onInternalClose"), onCloseKeyDown = /* @__PURE__ */ __name(function(e2) {
    (e2.key === "Enter" || e2.code === "Enter" || e2.keyCode === KeyCode.ENTER) && onInternalClose();
  }, "onCloseKeyDown");
  React.useEffect(function() {
    if (!mergedHovering && duration > 0) {
      var start = Date.now() - spentTime, timeout = setTimeout(function() {
        onInternalClose();
      }, duration * 1e3 - spentTime);
      return function() {
        pauseOnHover && clearTimeout(timeout), setSpentTime(Date.now() - start);
      };
    }
  }, [duration, mergedHovering, times]), React.useEffect(function() {
    if (!mergedHovering && mergedShowProgress && (pauseOnHover || spentTime === 0)) {
      var start = performance.now(), animationFrame, calculate = /* @__PURE__ */ __name(function calculate2() {
        cancelAnimationFrame(animationFrame), animationFrame = requestAnimationFrame(function(timestamp) {
          var runtime = timestamp + spentTime - start, progress = Math.min(runtime / (duration * 1e3), 1);
          setPercent(progress * 100), progress < 1 && calculate2();
        });
      }, "calculate");
      return calculate(), function() {
        pauseOnHover && cancelAnimationFrame(animationFrame);
      };
    }
  }, [duration, spentTime, mergedHovering, mergedShowProgress, times]);
  var closableObj = React.useMemo(function() {
    return _typeof(closable) === "object" && closable !== null ? closable : closable ? {
      closeIcon
    } : {};
  }, [closable, closeIcon]), ariaProps = pickAttrs(closableObj, !0), validPercent = 100 - (!percent || percent < 0 ? 0 : percent > 100 ? 100 : percent), noticePrefixCls = "".concat(prefixCls, "-notice");
  return /* @__PURE__ */ React.createElement("div", _extends({}, divProps, {
    ref,
    className: cn(noticePrefixCls, className, _defineProperty({}, "".concat(noticePrefixCls, "-closable"), closable)),
    style,
    onMouseEnter: /* @__PURE__ */ __name(function(e2) {
      var _divProps$onMouseEnte;
      setHovering(!0), divProps == null || (_divProps$onMouseEnte = divProps.onMouseEnter) === null || _divProps$onMouseEnte === void 0 || _divProps$onMouseEnte.call(divProps, e2);
    }, "onMouseEnter"),
    onMouseLeave: /* @__PURE__ */ __name(function(e2) {
      var _divProps$onMouseLeav;
      setHovering(!1), divProps == null || (_divProps$onMouseLeav = divProps.onMouseLeave) === null || _divProps$onMouseLeav === void 0 || _divProps$onMouseLeav.call(divProps, e2);
    }, "onMouseLeave"),
    onClick
  }), /* @__PURE__ */ React.createElement("div", {
    className: "".concat(noticePrefixCls, "-content")
  }, content), closable && /* @__PURE__ */ React.createElement("a", _extends({
    tabIndex: 0,
    className: "".concat(noticePrefixCls, "-close"),
    onKeyDown: onCloseKeyDown,
    "aria-label": "Close"
  }, ariaProps, {
    onClick: /* @__PURE__ */ __name(function(e2) {
      e2.preventDefault(), e2.stopPropagation(), onInternalClose();
    }, "onClick")
  }), closableObj.closeIcon), mergedShowProgress && /* @__PURE__ */ React.createElement("progress", {
    className: "".concat(noticePrefixCls, "-progress"),
    max: "100",
    value: validPercent
  }, validPercent + "%"));
}), NotificationContext = /* @__PURE__ */ React__default.createContext({}), NotificationProvider = /* @__PURE__ */ __name(function(_ref) {
  var children = _ref.children, classNames = _ref.classNames;
  return /* @__PURE__ */ React__default.createElement(NotificationContext.Provider, {
    value: {
      classNames
    }
  }, children);
}, "NotificationProvider"), DEFAULT_OFFSET$1 = 8, DEFAULT_THRESHOLD = 3, DEFAULT_GAP = 16, useStack = /* @__PURE__ */ __name(function(config) {
  var result = {
    offset: DEFAULT_OFFSET$1,
    threshold: DEFAULT_THRESHOLD,
    gap: DEFAULT_GAP
  };
  if (config && _typeof(config) === "object") {
    var _config$offset, _config$threshold, _config$gap;
    result.offset = (_config$offset = config.offset) !== null && _config$offset !== void 0 ? _config$offset : DEFAULT_OFFSET$1, result.threshold = (_config$threshold = config.threshold) !== null && _config$threshold !== void 0 ? _config$threshold : DEFAULT_THRESHOLD, result.gap = (_config$gap = config.gap) !== null && _config$gap !== void 0 ? _config$gap : DEFAULT_GAP;
  }
  return [!!config, result];
}, "useStack"), _excluded$c = ["className", "style", "classNames", "styles"], NoticeList = /* @__PURE__ */ __name(function(props) {
  var configList = props.configList, placement = props.placement, prefixCls = props.prefixCls, className = props.className, style = props.style, motion = props.motion, onAllNoticeRemoved = props.onAllNoticeRemoved, onNoticeClose = props.onNoticeClose, stackConfig = props.stack, _useContext = useContext(NotificationContext), ctxCls = _useContext.classNames, dictRef = useRef({}), _useState = useState(null), _useState2 = _slicedToArray(_useState, 2), latestNotice = _useState2[0], setLatestNotice = _useState2[1], _useState3 = useState([]), _useState4 = _slicedToArray(_useState3, 2), hoverKeys = _useState4[0], setHoverKeys = _useState4[1], keys2 = configList.map(function(config) {
    return {
      config,
      key: String(config.key)
    };
  }), _useStack = useStack(stackConfig), _useStack2 = _slicedToArray(_useStack, 2), stack = _useStack2[0], _useStack2$ = _useStack2[1], offset2 = _useStack2$.offset, threshold = _useStack2$.threshold, gap = _useStack2$.gap, expanded = stack && (hoverKeys.length > 0 || keys2.length <= threshold), placementMotion = typeof motion == "function" ? motion(placement) : motion;
  return useEffect(function() {
    stack && hoverKeys.length > 1 && setHoverKeys(function(prev) {
      return prev.filter(function(key) {
        return keys2.some(function(_ref) {
          var dataKey = _ref.key;
          return key === dataKey;
        });
      });
    });
  }, [hoverKeys, keys2, stack]), useEffect(function() {
    var _keys;
    if (stack && dictRef.current[(_keys = keys2[keys2.length - 1]) === null || _keys === void 0 ? void 0 : _keys.key]) {
      var _keys2;
      setLatestNotice(dictRef.current[(_keys2 = keys2[keys2.length - 1]) === null || _keys2 === void 0 ? void 0 : _keys2.key]);
    }
  }, [keys2, stack]), /* @__PURE__ */ React__default.createElement(CSSMotionList, _extends({
    key: placement,
    className: cn(prefixCls, "".concat(prefixCls, "-").concat(placement), ctxCls == null ? void 0 : ctxCls.list, className, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-stack"), !!stack), "".concat(prefixCls, "-stack-expanded"), expanded)),
    style,
    keys: keys2,
    motionAppear: !0
  }, placementMotion, {
    onAllRemoved: /* @__PURE__ */ __name(function() {
      onAllNoticeRemoved(placement);
    }, "onAllRemoved")
  }), function(_ref2, nodeRef) {
    var config = _ref2.config, motionClassName = _ref2.className, motionStyle = _ref2.style, motionIndex = _ref2.index, _ref3 = config, key = _ref3.key, times = _ref3.times, strKey = String(key), _ref4 = config, configClassName = _ref4.className, configStyle = _ref4.style, configClassNames = _ref4.classNames, configStyles = _ref4.styles, restConfig = _objectWithoutProperties(_ref4, _excluded$c), dataIndex = keys2.findIndex(function(item) {
      return item.key === strKey;
    }), stackStyle = {};
    if (stack) {
      var index = keys2.length - 1 - (dataIndex > -1 ? dataIndex : motionIndex - 1), transformX = placement === "top" || placement === "bottom" ? "-50%" : "0";
      if (index > 0) {
        var _dictRef$current$strK, _dictRef$current$strK2, _dictRef$current$strK3;
        stackStyle.height = expanded ? (_dictRef$current$strK = dictRef.current[strKey]) === null || _dictRef$current$strK === void 0 ? void 0 : _dictRef$current$strK.offsetHeight : latestNotice == null ? void 0 : latestNotice.offsetHeight;
        for (var verticalOffset = 0, i2 = 0; i2 < index; i2++) {
          var _dictRef$current$keys;
          verticalOffset += ((_dictRef$current$keys = dictRef.current[keys2[keys2.length - 1 - i2].key]) === null || _dictRef$current$keys === void 0 ? void 0 : _dictRef$current$keys.offsetHeight) + gap;
        }
        var transformY = (expanded ? verticalOffset : index * offset2) * (placement.startsWith("top") ? 1 : -1), scaleX = !expanded && latestNotice !== null && latestNotice !== void 0 && latestNotice.offsetWidth && (_dictRef$current$strK2 = dictRef.current[strKey]) !== null && _dictRef$current$strK2 !== void 0 && _dictRef$current$strK2.offsetWidth ? ((latestNotice == null ? void 0 : latestNotice.offsetWidth) - offset2 * 2 * (index < 3 ? index : 3)) / ((_dictRef$current$strK3 = dictRef.current[strKey]) === null || _dictRef$current$strK3 === void 0 ? void 0 : _dictRef$current$strK3.offsetWidth) : 1;
        stackStyle.transform = "translate3d(".concat(transformX, ", ").concat(transformY, "px, 0) scaleX(").concat(scaleX, ")");
      } else
        stackStyle.transform = "translate3d(".concat(transformX, ", 0, 0)");
    }
    return /* @__PURE__ */ React__default.createElement("div", {
      ref: nodeRef,
      className: cn("".concat(prefixCls, "-notice-wrapper"), motionClassName, configClassNames == null ? void 0 : configClassNames.wrapper),
      style: _objectSpread2(_objectSpread2(_objectSpread2({}, motionStyle), stackStyle), configStyles == null ? void 0 : configStyles.wrapper),
      onMouseEnter: /* @__PURE__ */ __name(function() {
        return setHoverKeys(function(prev) {
          return prev.includes(strKey) ? prev : [].concat(_toConsumableArray(prev), [strKey]);
        });
      }, "onMouseEnter"),
      onMouseLeave: /* @__PURE__ */ __name(function() {
        return setHoverKeys(function(prev) {
          return prev.filter(function(k2) {
            return k2 !== strKey;
          });
        });
      }, "onMouseLeave")
    }, /* @__PURE__ */ React__default.createElement(Notify, _extends({}, restConfig, {
      ref: /* @__PURE__ */ __name(function(node) {
        dataIndex > -1 ? dictRef.current[strKey] = node : delete dictRef.current[strKey];
      }, "ref"),
      prefixCls,
      classNames: configClassNames,
      styles: configStyles,
      className: cn(configClassName, ctxCls == null ? void 0 : ctxCls.notice),
      style: configStyle,
      times,
      key,
      eventKey: key,
      onNoticeClose,
      hovering: stack && hoverKeys.length > 0
    })));
  });
}, "NoticeList");
process.env.NODE_ENV !== "production" && (NoticeList.displayName = "NoticeList");
var Notifications = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-notification" : _props$prefixCls, container = props.container, motion = props.motion, maxCount = props.maxCount, className = props.className, style = props.style, onAllRemoved = props.onAllRemoved, stack = props.stack, renderNotifications2 = props.renderNotifications, _React$useState = React.useState([]), _React$useState2 = _slicedToArray(_React$useState, 2), configList = _React$useState2[0], setConfigList = _React$useState2[1], onNoticeClose = /* @__PURE__ */ __name(function(key) {
    var _config$onClose, config = configList.find(function(item) {
      return item.key === key;
    });
    config == null || (_config$onClose = config.onClose) === null || _config$onClose === void 0 || _config$onClose.call(config), setConfigList(function(list) {
      return list.filter(function(item) {
        return item.key !== key;
      });
    });
  }, "onNoticeClose");
  React.useImperativeHandle(ref, function() {
    return {
      open: /* @__PURE__ */ __name(function(config) {
        setConfigList(function(list) {
          var clone = _toConsumableArray(list), index = clone.findIndex(function(item) {
            return item.key === config.key;
          }), innerConfig = _objectSpread2({}, config);
          if (index >= 0) {
            var _list$index;
            innerConfig.times = (((_list$index = list[index]) === null || _list$index === void 0 ? void 0 : _list$index.times) || 0) + 1, clone[index] = innerConfig;
          } else
            innerConfig.times = 0, clone.push(innerConfig);
          return maxCount > 0 && clone.length > maxCount && (clone = clone.slice(-maxCount)), clone;
        });
      }, "open"),
      close: /* @__PURE__ */ __name(function(key) {
        onNoticeClose(key);
      }, "close"),
      destroy: /* @__PURE__ */ __name(function() {
        setConfigList([]);
      }, "destroy")
    };
  });
  var _React$useState3 = React.useState({}), _React$useState4 = _slicedToArray(_React$useState3, 2), placements = _React$useState4[0], setPlacements = _React$useState4[1];
  React.useEffect(function() {
    var nextPlacements = {};
    configList.forEach(function(config) {
      var _config$placement = config.placement, placement = _config$placement === void 0 ? "topRight" : _config$placement;
      placement && (nextPlacements[placement] = nextPlacements[placement] || [], nextPlacements[placement].push(config));
    }), Object.keys(placements).forEach(function(placement) {
      nextPlacements[placement] = nextPlacements[placement] || [];
    }), setPlacements(nextPlacements);
  }, [configList]);
  var onAllNoticeRemoved = /* @__PURE__ */ __name(function(placement) {
    setPlacements(function(originPlacements) {
      var clone = _objectSpread2({}, originPlacements), list = clone[placement] || [];
      return list.length || delete clone[placement], clone;
    });
  }, "onAllNoticeRemoved"), emptyRef = React.useRef(!1);
  if (React.useEffect(function() {
    Object.keys(placements).length > 0 ? emptyRef.current = !0 : emptyRef.current && (onAllRemoved == null || onAllRemoved(), emptyRef.current = !1);
  }, [placements]), !container)
    return null;
  var placementList = Object.keys(placements);
  return /* @__PURE__ */ createPortal(/* @__PURE__ */ React.createElement(React.Fragment, null, placementList.map(function(placement) {
    var placementConfigList = placements[placement], list = /* @__PURE__ */ React.createElement(NoticeList, {
      key: placement,
      configList: placementConfigList,
      placement,
      prefixCls,
      className: className == null ? void 0 : className(placement),
      style: style == null ? void 0 : style(placement),
      motion,
      onNoticeClose,
      onAllNoticeRemoved,
      stack
    });
    return renderNotifications2 ? renderNotifications2(list, {
      prefixCls,
      key: placement
    }) : list;
  })), container);
});
process.env.NODE_ENV !== "production" && (Notifications.displayName = "Notifications");
var _excluded$b = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"], defaultGetContainer = /* @__PURE__ */ __name(function() {
  return document.body;
}, "defaultGetContainer"), uniqueKey = 0;
function mergeConfig() {
  for (var clone = {}, _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++)
    objList[_key] = arguments[_key];
  return objList.forEach(function(obj) {
    obj && Object.keys(obj).forEach(function(key) {
      var val = obj[key];
      val !== void 0 && (clone[key] = val);
    });
  }), clone;
}
__name(mergeConfig, "mergeConfig");
function useNotification$2() {
  var rootConfig = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _rootConfig$getContai = rootConfig.getContainer, getContainer = _rootConfig$getContai === void 0 ? defaultGetContainer : _rootConfig$getContai, motion = rootConfig.motion, prefixCls = rootConfig.prefixCls, maxCount = rootConfig.maxCount, className = rootConfig.className, style = rootConfig.style, onAllRemoved = rootConfig.onAllRemoved, stack = rootConfig.stack, renderNotifications2 = rootConfig.renderNotifications, shareConfig = _objectWithoutProperties(rootConfig, _excluded$b), _React$useState = React.useState(), _React$useState2 = _slicedToArray(_React$useState, 2), container = _React$useState2[0], setContainer = _React$useState2[1], notificationsRef = React.useRef(), contextHolder = /* @__PURE__ */ React.createElement(Notifications, {
    container,
    ref: notificationsRef,
    prefixCls,
    motion,
    maxCount,
    className,
    style,
    onAllRemoved,
    stack,
    renderNotifications: renderNotifications2
  }), _React$useState3 = React.useState([]), _React$useState4 = _slicedToArray(_React$useState3, 2), taskQueue2 = _React$useState4[0], setTaskQueue = _React$useState4[1], api = React.useMemo(function() {
    return {
      open: /* @__PURE__ */ __name(function(config) {
        var mergedConfig = mergeConfig(shareConfig, config);
        (mergedConfig.key === null || mergedConfig.key === void 0) && (mergedConfig.key = "rc-notification-".concat(uniqueKey), uniqueKey += 1), setTaskQueue(function(queue) {
          return [].concat(_toConsumableArray(queue), [{
            type: "open",
            config: mergedConfig
          }]);
        });
      }, "open"),
      close: /* @__PURE__ */ __name(function(key) {
        setTaskQueue(function(queue) {
          return [].concat(_toConsumableArray(queue), [{
            type: "close",
            key
          }]);
        });
      }, "close"),
      destroy: /* @__PURE__ */ __name(function() {
        setTaskQueue(function(queue) {
          return [].concat(_toConsumableArray(queue), [{
            type: "destroy"
          }]);
        });
      }, "destroy")
    };
  }, []);
  return React.useEffect(function() {
    setContainer(getContainer());
  }), React.useEffect(function() {
    if (notificationsRef.current && taskQueue2.length) {
      taskQueue2.forEach(function(task) {
        switch (task.type) {
          case "open":
            notificationsRef.current.open(task.config);
            break;
          case "close":
            notificationsRef.current.close(task.key);
            break;
          case "destroy":
            notificationsRef.current.destroy();
            break;
        }
      });
      var oriTaskQueue, tgtTaskQueue;
      setTaskQueue(function(oriQueue) {
        return (oriTaskQueue !== oriQueue || !tgtTaskQueue) && (oriTaskQueue = oriQueue, tgtTaskQueue = oriQueue.filter(function(task) {
          return !taskQueue2.includes(task);
        })), tgtTaskQueue;
      });
    }
  }, [taskQueue2]), [api, contextHolder];
}
__name(useNotification$2, "useNotification$2");
function usePatchElement() {
  const [elements, setElements] = React.useState([]), patchElement = React.useCallback((element) => (setElements((originElements) => [].concat(_toConsumableArray(originElements), [element])), () => {
    setElements((originElements) => originElements.filter((ele) => ele !== element));
  }), []);
  return [elements, patchElement];
}
__name(usePatchElement, "usePatchElement");
var PanelContent = /* @__PURE__ */ React__default.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls, forceRender = props.forceRender, className = props.className, style = props.style, children = props.children, isActive = props.isActive, role = props.role, customizeClassNames = props.classNames, styles2 = props.styles, _React$useState = React__default.useState(isActive || forceRender), _React$useState2 = _slicedToArray(_React$useState, 2), rendered = _React$useState2[0], setRendered = _React$useState2[1];
  return React__default.useEffect(function() {
    (forceRender || isActive) && setRendered(!0);
  }, [forceRender, isActive]), rendered ? /* @__PURE__ */ React__default.createElement("div", {
    ref,
    className: cn("".concat(prefixCls, "-content"), _defineProperty(_defineProperty({}, "".concat(prefixCls, "-content-active"), isActive), "".concat(prefixCls, "-content-inactive"), !isActive), className),
    style,
    role
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: cn("".concat(prefixCls, "-content-box"), customizeClassNames == null ? void 0 : customizeClassNames.body),
    style: styles2 == null ? void 0 : styles2.body
  }, children)) : null;
});
PanelContent.displayName = "PanelContent";
var _excluded$a = ["showArrow", "headerClass", "isActive", "onItemClick", "forceRender", "className", "classNames", "styles", "prefixCls", "collapsible", "accordion", "panelKey", "extra", "header", "expandIcon", "openMotion", "destroyInactivePanel", "children"], CollapsePanel$1 = /* @__PURE__ */ React__default.forwardRef(function(props, ref) {
  var _props$showArrow = props.showArrow, showArrow = _props$showArrow === void 0 ? !0 : _props$showArrow, headerClass = props.headerClass, isActive = props.isActive, onItemClick = props.onItemClick, forceRender = props.forceRender, className = props.className, _props$classNames = props.classNames, customizeClassNames = _props$classNames === void 0 ? {} : _props$classNames, _props$styles = props.styles, styles2 = _props$styles === void 0 ? {} : _props$styles, prefixCls = props.prefixCls, collapsible = props.collapsible, accordion = props.accordion, panelKey = props.panelKey, extra = props.extra, header2 = props.header, expandIcon = props.expandIcon, openMotion = props.openMotion, destroyInactivePanel = props.destroyInactivePanel, children = props.children, resetProps = _objectWithoutProperties(props, _excluded$a), disabled = collapsible === "disabled", ifExtraExist = extra != null && typeof extra != "boolean", collapsibleProps = _defineProperty(_defineProperty(_defineProperty({
    onClick: /* @__PURE__ */ __name(function() {
      onItemClick == null || onItemClick(panelKey);
    }, "onClick"),
    onKeyDown: /* @__PURE__ */ __name(function(e2) {
      (e2.key === "Enter" || e2.keyCode === KeyCode.ENTER || e2.which === KeyCode.ENTER) && (onItemClick == null || onItemClick(panelKey));
    }, "onKeyDown"),
    role: accordion ? "tab" : "button"
  }, "aria-expanded", isActive), "aria-disabled", disabled), "tabIndex", disabled ? -1 : 0), iconNodeInner = typeof expandIcon == "function" ? expandIcon(props) : /* @__PURE__ */ React__default.createElement("i", {
    className: "arrow"
  }), iconNode = iconNodeInner && /* @__PURE__ */ React__default.createElement("div", _extends({
    className: "".concat(prefixCls, "-expand-icon")
  }, ["header", "icon"].includes(collapsible) ? collapsibleProps : {}), iconNodeInner), collapsePanelClassNames = cn("".concat(prefixCls, "-item"), _defineProperty(_defineProperty({}, "".concat(prefixCls, "-item-active"), isActive), "".concat(prefixCls, "-item-disabled"), disabled), className), headerClassName = cn(headerClass, "".concat(prefixCls, "-header"), _defineProperty({}, "".concat(prefixCls, "-collapsible-").concat(collapsible), !!collapsible), customizeClassNames.header), headerProps = _objectSpread2({
    className: headerClassName,
    style: styles2.header
  }, ["header", "icon"].includes(collapsible) ? {} : collapsibleProps);
  return /* @__PURE__ */ React__default.createElement("div", _extends({}, resetProps, {
    ref,
    className: collapsePanelClassNames
  }), /* @__PURE__ */ React__default.createElement("div", headerProps, showArrow && iconNode, /* @__PURE__ */ React__default.createElement("span", _extends({
    className: "".concat(prefixCls, "-header-text")
  }, collapsible === "header" ? collapsibleProps : {}), header2), ifExtraExist && /* @__PURE__ */ React__default.createElement("div", {
    className: "".concat(prefixCls, "-extra")
  }, extra)), /* @__PURE__ */ React__default.createElement(CSSMotion, _extends({
    visible: isActive,
    leavedClassName: "".concat(prefixCls, "-content-hidden")
  }, openMotion, {
    forceRender,
    removeOnLeave: destroyInactivePanel
  }), function(_ref, motionRef) {
    var motionClassName = _ref.className, motionStyle = _ref.style;
    return /* @__PURE__ */ React__default.createElement(PanelContent, {
      ref: motionRef,
      prefixCls,
      className: motionClassName,
      classNames: customizeClassNames,
      style: motionStyle,
      styles: styles2,
      isActive,
      forceRender,
      role: accordion ? "tabpanel" : void 0
    }, children);
  }));
}), _excluded$9 = ["children", "label", "key", "collapsible", "onItemClick", "destroyInactivePanel"], convertItemsToNodes = /* @__PURE__ */ __name(function(items, props) {
  var prefixCls = props.prefixCls, accordion = props.accordion, collapsible = props.collapsible, destroyInactivePanel = props.destroyInactivePanel, onItemClick = props.onItemClick, activeKey = props.activeKey, openMotion = props.openMotion, expandIcon = props.expandIcon;
  return items.map(function(item, index) {
    var children = item.children, label2 = item.label, rawKey = item.key, rawCollapsible = item.collapsible, rawOnItemClick = item.onItemClick, rawDestroyInactivePanel = item.destroyInactivePanel, restProps = _objectWithoutProperties(item, _excluded$9), key = String(rawKey ?? index), mergeCollapsible = rawCollapsible ?? collapsible, mergeDestroyInactivePanel = rawDestroyInactivePanel ?? destroyInactivePanel, handleItemClick = /* @__PURE__ */ __name(function(value) {
      mergeCollapsible !== "disabled" && (onItemClick(value), rawOnItemClick == null || rawOnItemClick(value));
    }, "handleItemClick"), isActive = !1;
    return accordion ? isActive = activeKey[0] === key : isActive = activeKey.indexOf(key) > -1, /* @__PURE__ */ React__default.createElement(CollapsePanel$1, _extends({}, restProps, {
      prefixCls,
      key,
      panelKey: key,
      isActive,
      accordion,
      openMotion,
      expandIcon,
      header: label2,
      collapsible: mergeCollapsible,
      onItemClick: handleItemClick,
      destroyInactivePanel: mergeDestroyInactivePanel
    }), children);
  });
}, "convertItemsToNodes"), getNewChild = /* @__PURE__ */ __name(function(child, index, props) {
  if (!child) return null;
  var prefixCls = props.prefixCls, accordion = props.accordion, collapsible = props.collapsible, destroyInactivePanel = props.destroyInactivePanel, onItemClick = props.onItemClick, activeKey = props.activeKey, openMotion = props.openMotion, expandIcon = props.expandIcon, key = child.key || String(index), _child$props = child.props, header2 = _child$props.header, headerClass = _child$props.headerClass, childDestroyInactivePanel = _child$props.destroyInactivePanel, childCollapsible = _child$props.collapsible, childOnItemClick = _child$props.onItemClick, isActive = !1;
  accordion ? isActive = activeKey[0] === key : isActive = activeKey.indexOf(key) > -1;
  var mergeCollapsible = childCollapsible ?? collapsible, handleItemClick = /* @__PURE__ */ __name(function(value) {
    mergeCollapsible !== "disabled" && (onItemClick(value), childOnItemClick == null || childOnItemClick(value));
  }, "handleItemClick"), childProps = {
    key,
    panelKey: key,
    header: header2,
    headerClass,
    isActive,
    prefixCls,
    destroyInactivePanel: childDestroyInactivePanel ?? destroyInactivePanel,
    openMotion,
    accordion,
    children: child.props.children,
    onItemClick: handleItemClick,
    expandIcon,
    collapsible: mergeCollapsible
  };
  return typeof child.type == "string" ? child : (Object.keys(childProps).forEach(function(propName) {
    typeof childProps[propName] > "u" && delete childProps[propName];
  }), /* @__PURE__ */ React__default.cloneElement(child, childProps));
}, "getNewChild");
function useItems$1(items, rawChildren, props) {
  return Array.isArray(items) ? convertItemsToNodes(items, props) : toArray$1(rawChildren).map(function(child, index) {
    return getNewChild(child, index, props);
  });
}
__name(useItems$1, "useItems$1");
function getActiveKeysArray(activeKey) {
  var currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    var activeKeyType = _typeof(currentActiveKey);
    currentActiveKey = activeKeyType === "number" || activeKeyType === "string" ? [currentActiveKey] : [];
  }
  return currentActiveKey.map(function(key) {
    return String(key);
  });
}
__name(getActiveKeysArray, "getActiveKeysArray");
var Collapse$3 = /* @__PURE__ */ React__default.forwardRef(function(props, ref) {
  var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-collapse" : _props$prefixCls, _props$destroyInactiv = props.destroyInactivePanel, destroyInactivePanel = _props$destroyInactiv === void 0 ? !1 : _props$destroyInactiv, style = props.style, accordion = props.accordion, className = props.className, children = props.children, collapsible = props.collapsible, openMotion = props.openMotion, expandIcon = props.expandIcon, rawActiveKey = props.activeKey, defaultActiveKey = props.defaultActiveKey, _onChange = props.onChange, items = props.items, collapseClassName = cn(prefixCls, className), _useMergedState = useMergedState([], {
    value: rawActiveKey,
    onChange: /* @__PURE__ */ __name(function(v2) {
      return _onChange == null ? void 0 : _onChange(v2);
    }, "onChange"),
    defaultValue: defaultActiveKey,
    postState: getActiveKeysArray
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), activeKey = _useMergedState2[0], setActiveKey = _useMergedState2[1], onItemClick = /* @__PURE__ */ __name(function(key) {
    return setActiveKey(function() {
      if (accordion)
        return activeKey[0] === key ? [] : [key];
      var index = activeKey.indexOf(key), isActive = index > -1;
      return isActive ? activeKey.filter(function(item) {
        return item !== key;
      }) : [].concat(_toConsumableArray(activeKey), [key]);
    });
  }, "onItemClick");
  warningOnce(!children, "[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");
  var mergedChildren = useItems$1(items, children, {
    prefixCls,
    accordion,
    openMotion,
    expandIcon,
    collapsible,
    destroyInactivePanel,
    onItemClick,
    activeKey
  });
  return /* @__PURE__ */ React__default.createElement("div", _extends({
    ref,
    className: collapseClassName,
    style,
    role: accordion ? "tablist" : void 0
  }, pickAttrs(props, {
    aria: !0,
    data: !0
  })), mergedChildren);
});
const Collapse$4 = Object.assign(Collapse$3, {
  /**
   * @deprecated use `items` instead, will be removed in `v4.0.0`
   */
  Panel: CollapsePanel$1
});
Collapse$4.Panel;
const CollapsePanel = /* @__PURE__ */ React.forwardRef((props, ref) => {
  process.env.NODE_ENV !== "production" && devUseWarning("Collapse.Panel").deprecated(!("disabled" in props), "disabled", 'collapsible="disabled"');
  const {
    getPrefixCls
  } = React.useContext(ConfigContext), {
    prefixCls: customizePrefixCls,
    className,
    showArrow = !0
  } = props, prefixCls = getPrefixCls("collapse", customizePrefixCls), collapsePanelClassName = cn({
    [`${prefixCls}-no-arrow`]: !showArrow
  }, className);
  return /* @__PURE__ */ React.createElement(Collapse$4.Panel, Object.assign({
    ref
  }, props, {
    prefixCls,
    className: collapsePanelClassName
  }));
}), genBaseStyle$3 = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    contentBg,
    padding,
    headerBg,
    headerPadding,
    collapseHeaderPaddingSM,
    collapseHeaderPaddingLG,
    collapsePanelBorderRadius,
    lineWidth,
    lineType,
    colorBorder,
    colorText,
    colorTextHeading,
    colorTextDisabled,
    fontSizeLG,
    lineHeight,
    lineHeightLG,
    marginSM,
    paddingSM,
    paddingLG,
    paddingXS,
    motionDurationSlow,
    fontSizeIcon,
    contentPadding,
    fontHeight,
    fontHeightLG
  } = token, borderBase = `${unit(lineWidth)} ${lineType} ${colorBorder}`;
  return {
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      backgroundColor: headerBg,
      border: borderBase,
      borderRadius: collapsePanelBorderRadius,
      "&-rtl": {
        direction: "rtl"
      },
      [`& > ${componentCls}-item`]: {
        borderBottom: borderBase,
        "&:last-child": {
          [`
            &,
            & > ${componentCls}-header`]: {
            borderRadius: `0 0 ${unit(collapsePanelBorderRadius)} ${unit(collapsePanelBorderRadius)}`
          }
        },
        [`> ${componentCls}-header`]: {
          position: "relative",
          // Compatible with old version of antd, should remove in next version
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "flex-start",
          padding: headerPadding,
          color: colorTextHeading,
          lineHeight,
          cursor: "pointer",
          transition: `all ${motionDurationSlow}, visibility 0s`,
          [`> ${componentCls}-header-text`]: {
            flex: "auto"
          },
          // >>>>> Arrow
          [`${componentCls}-expand-icon`]: {
            height: fontHeight,
            display: "flex",
            alignItems: "center",
            paddingInlineEnd: marginSM
          },
          [`${componentCls}-arrow`]: Object.assign(Object.assign({}, resetIcon()), {
            fontSize: fontSizeIcon,
            // when `transform: rotate()` is applied to icon's root element
            transition: `transform ${motionDurationSlow}`,
            // when `transform: rotate()` is applied to icon's child element
            svg: {
              transition: `transform ${motionDurationSlow}`
            }
          }),
          // >>>>> Text
          [`${componentCls}-header-text`]: {
            marginInlineEnd: "auto"
          }
        },
        [`${componentCls}-collapsible-header`]: {
          cursor: "default",
          [`${componentCls}-header-text`]: {
            flex: "none",
            cursor: "pointer"
          }
        },
        [`${componentCls}-collapsible-icon`]: {
          cursor: "unset",
          [`${componentCls}-expand-icon`]: {
            cursor: "pointer"
          }
        }
      },
      [`${componentCls}-content`]: {
        color: colorText,
        backgroundColor: contentBg,
        borderTop: borderBase,
        [`& > ${componentCls}-content-box`]: {
          padding: contentPadding
        },
        "&-hidden": {
          display: "none"
        }
      },
      "&-small": {
        [`> ${componentCls}-item`]: {
          [`> ${componentCls}-header`]: {
            padding: collapseHeaderPaddingSM,
            paddingInlineStart: paddingXS,
            [`> ${componentCls}-expand-icon`]: {
              // Arrow offset
              marginInlineStart: token.calc(paddingSM).sub(paddingXS).equal()
            }
          },
          [`> ${componentCls}-content > ${componentCls}-content-box`]: {
            padding: paddingSM
          }
        }
      },
      "&-large": {
        [`> ${componentCls}-item`]: {
          fontSize: fontSizeLG,
          lineHeight: lineHeightLG,
          [`> ${componentCls}-header`]: {
            padding: collapseHeaderPaddingLG,
            paddingInlineStart: padding,
            [`> ${componentCls}-expand-icon`]: {
              height: fontHeightLG,
              // Arrow offset
              marginInlineStart: token.calc(paddingLG).sub(padding).equal()
            }
          },
          [`> ${componentCls}-content > ${componentCls}-content-box`]: {
            padding: paddingLG
          }
        }
      },
      [`${componentCls}-item:last-child`]: {
        borderBottom: 0,
        [`> ${componentCls}-content`]: {
          borderRadius: `0 0 ${unit(collapsePanelBorderRadius)} ${unit(collapsePanelBorderRadius)}`
        }
      },
      [`& ${componentCls}-item-disabled > ${componentCls}-header`]: {
        "\n          &,\n          & > .arrow\n        ": {
          color: colorTextDisabled,
          cursor: "not-allowed"
        }
      },
      // ========================== Icon Position ==========================
      [`&${componentCls}-icon-position-end`]: {
        [`& > ${componentCls}-item`]: {
          [`> ${componentCls}-header`]: {
            [`${componentCls}-expand-icon`]: {
              order: 1,
              paddingInlineEnd: 0,
              paddingInlineStart: marginSM
            }
          }
        }
      }
    })
  };
}, "genBaseStyle$3"), genArrowStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls
  } = token, fixedSelector = `> ${componentCls}-item > ${componentCls}-header ${componentCls}-arrow`;
  return {
    [`${componentCls}-rtl`]: {
      [fixedSelector]: {
        transform: "rotate(180deg)"
      }
    }
  };
}, "genArrowStyle"), genBorderlessStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    headerBg,
    paddingXXS,
    colorBorder
  } = token;
  return {
    [`${componentCls}-borderless`]: {
      backgroundColor: headerBg,
      border: 0,
      [`> ${componentCls}-item`]: {
        borderBottom: `1px solid ${colorBorder}`
      },
      [`
        > ${componentCls}-item:last-child,
        > ${componentCls}-item:last-child ${componentCls}-header
      `]: {
        borderRadius: 0
      },
      [`> ${componentCls}-item:last-child`]: {
        borderBottom: 0
      },
      [`> ${componentCls}-item > ${componentCls}-content`]: {
        backgroundColor: "transparent",
        borderTop: 0
      },
      [`> ${componentCls}-item > ${componentCls}-content > ${componentCls}-content-box`]: {
        paddingTop: paddingXXS
      }
    }
  };
}, "genBorderlessStyle"), genGhostStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    paddingSM
  } = token;
  return {
    [`${componentCls}-ghost`]: {
      backgroundColor: "transparent",
      border: 0,
      [`> ${componentCls}-item`]: {
        borderBottom: 0,
        [`> ${componentCls}-content`]: {
          backgroundColor: "transparent",
          border: 0,
          [`> ${componentCls}-content-box`]: {
            paddingBlock: paddingSM
          }
        }
      }
    }
  };
}, "genGhostStyle"), prepareComponentToken$c = /* @__PURE__ */ __name((token) => ({
  headerPadding: `${token.paddingSM}px ${token.padding}px`,
  headerBg: token.colorFillAlter,
  contentPadding: `${token.padding}px 16px`,
  // Fixed Value
  contentBg: token.colorBgContainer
}), "prepareComponentToken$c"), useStyle$c = genStyleHooks("Collapse", (token) => {
  const collapseToken = merge(token, {
    collapseHeaderPaddingSM: `${unit(token.paddingXS)} ${unit(token.paddingSM)}`,
    collapseHeaderPaddingLG: `${unit(token.padding)} ${unit(token.paddingLG)}`,
    collapsePanelBorderRadius: token.borderRadiusLG
  });
  return [genBaseStyle$3(collapseToken), genBorderlessStyle(collapseToken), genGhostStyle(collapseToken), genArrowStyle(collapseToken), genCollapseMotion(collapseToken)];
}, prepareComponentToken$c), Collapse$1 = /* @__PURE__ */ React.forwardRef((props, ref) => {
  const {
    getPrefixCls,
    direction,
    collapse
  } = React.useContext(ConfigContext), {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    bordered = !0,
    ghost,
    size: customizeSize,
    expandIconPosition = "start",
    children,
    expandIcon
  } = props, mergedSize = useSize((ctx) => {
    var _a;
    return (_a = customizeSize ?? ctx) !== null && _a !== void 0 ? _a : "middle";
  }), prefixCls = getPrefixCls("collapse", customizePrefixCls), rootPrefixCls = getPrefixCls(), [wrapCSSVar, hashId, cssVarCls] = useStyle$c(prefixCls);
  if (process.env.NODE_ENV !== "production") {
    const warning2 = devUseWarning("Collapse");
    process.env.NODE_ENV !== "production" && warning2(expandIconPosition !== "left" && expandIconPosition !== "right", "deprecated", "`expandIconPosition` with `left` or `right` is deprecated. Please use `start` or `end` instead.");
  }
  const mergedExpandIconPosition = React.useMemo(() => expandIconPosition === "left" ? "start" : expandIconPosition === "right" ? "end" : expandIconPosition, [expandIconPosition]), mergedExpandIcon = expandIcon ?? (collapse == null ? void 0 : collapse.expandIcon), renderExpandIcon = React.useCallback(function() {
    let panelProps = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const icon2 = typeof mergedExpandIcon == "function" ? mergedExpandIcon(panelProps) : /* @__PURE__ */ React.createElement(RefIcon$b, {
      rotate: panelProps.isActive ? 90 : void 0,
      "aria-label": panelProps.isActive ? "expanded" : "collapsed"
    });
    return cloneElement(icon2, () => {
      var _a;
      return {
        className: cn((_a = icon2 == null ? void 0 : icon2.props) === null || _a === void 0 ? void 0 : _a.className, `${prefixCls}-arrow`)
      };
    });
  }, [mergedExpandIcon, prefixCls]), collapseClassName = cn(`${prefixCls}-icon-position-${mergedExpandIconPosition}`, {
    [`${prefixCls}-borderless`]: !bordered,
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-ghost`]: !!ghost,
    [`${prefixCls}-${mergedSize}`]: mergedSize !== "middle"
  }, collapse == null ? void 0 : collapse.className, className, rootClassName, hashId, cssVarCls), openMotion = Object.assign(Object.assign({}, initCollapseMotion(rootPrefixCls)), {
    motionAppear: !1,
    leavedClassName: `${prefixCls}-content-hidden`
  }), items = React.useMemo(() => children ? toArray$1(children).map((child, index) => {
    var _a, _b;
    const childProps = child.props;
    if (childProps != null && childProps.disabled) {
      const key = (_a = child.key) !== null && _a !== void 0 ? _a : String(index), mergedChildProps = Object.assign(Object.assign({}, omit(child.props, ["disabled"])), {
        key,
        collapsible: (_b = childProps.collapsible) !== null && _b !== void 0 ? _b : "disabled"
      });
      return cloneElement(child, mergedChildProps);
    }
    return child;
  }) : null, [children]);
  return wrapCSSVar(
    // @ts-ignore
    /* @__PURE__ */ React.createElement(Collapse$4, Object.assign({
      ref,
      openMotion
    }, omit(props, ["rootClassName"]), {
      expandIcon: renderExpandIcon,
      prefixCls,
      className: collapseClassName,
      style: Object.assign(Object.assign({}, collapse == null ? void 0 : collapse.style), style)
    }), items)
  );
});
process.env.NODE_ENV !== "production" && (Collapse$1.displayName = "Collapse");
const Collapse$2 = Object.assign(Collapse$1, {
  Panel: CollapsePanel
});
function isThenable(thing) {
  return !!(thing != null && thing.then);
}
__name(isThenable, "isThenable");
const ActionButton = /* @__PURE__ */ __name((props) => {
  const {
    type,
    children,
    prefixCls,
    buttonProps,
    close,
    autoFocus,
    emitEvent,
    isSilent,
    quitOnNullishReturnValue,
    actionFn
  } = props, clickedRef = React.useRef(!1), buttonRef = React.useRef(null), [loading, setLoading] = useSafeState(!1), onInternalClose = /* @__PURE__ */ __name(function() {
    close == null || close.apply(void 0, arguments);
  }, "onInternalClose");
  React.useEffect(() => {
    let timeoutId = null;
    return autoFocus && (timeoutId = setTimeout(() => {
      var _a;
      (_a = buttonRef.current) === null || _a === void 0 || _a.focus({
        preventScroll: !0
      });
    })), () => {
      timeoutId && clearTimeout(timeoutId);
    };
  }, []);
  const handlePromiseOnOk = /* @__PURE__ */ __name((returnValueOfOnOk) => {
    isThenable(returnValueOfOnOk) && (setLoading(!0), returnValueOfOnOk.then(function() {
      setLoading(!1, !0), onInternalClose.apply(void 0, arguments), clickedRef.current = !1;
    }, (e2) => {
      if (setLoading(!1, !0), clickedRef.current = !1, !(isSilent != null && isSilent()))
        return Promise.reject(e2);
    }));
  }, "handlePromiseOnOk"), onClick = /* @__PURE__ */ __name((e2) => {
    if (clickedRef.current)
      return;
    if (clickedRef.current = !0, !actionFn) {
      onInternalClose();
      return;
    }
    let returnValueOfOnOk;
    if (emitEvent) {
      if (returnValueOfOnOk = actionFn(e2), quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
        clickedRef.current = !1, onInternalClose(e2);
        return;
      }
    } else if (actionFn.length)
      returnValueOfOnOk = actionFn(close), clickedRef.current = !1;
    else if (returnValueOfOnOk = actionFn(), !isThenable(returnValueOfOnOk)) {
      onInternalClose();
      return;
    }
    handlePromiseOnOk(returnValueOfOnOk);
  }, "onClick");
  return /* @__PURE__ */ React.createElement(Button, Object.assign({}, convertLegacyProps(type), {
    onClick,
    loading,
    prefixCls
  }, buttonProps, {
    ref: buttonRef
  }), children);
}, "ActionButton"), ModalContext = /* @__PURE__ */ React__default.createContext({}), {
  Provider: ModalContextProvider
} = ModalContext, ConfirmCancelBtn = /* @__PURE__ */ __name(() => {
  const {
    autoFocusButton,
    cancelButtonProps,
    cancelTextLocale,
    isSilent,
    mergedOkCancel,
    rootPrefixCls,
    close,
    onCancel,
    onConfirm
  } = useContext(ModalContext);
  return mergedOkCancel ? /* @__PURE__ */ React__default.createElement(ActionButton, {
    isSilent,
    actionFn: onCancel,
    close: /* @__PURE__ */ __name(function() {
      close == null || close.apply(void 0, arguments), onConfirm == null || onConfirm(!1);
    }, "close"),
    autoFocus: autoFocusButton === "cancel",
    buttonProps: cancelButtonProps,
    prefixCls: `${rootPrefixCls}-btn`
  }, cancelTextLocale) : null;
}, "ConfirmCancelBtn"), ConfirmOkBtn = /* @__PURE__ */ __name(() => {
  const {
    autoFocusButton,
    close,
    isSilent,
    okButtonProps,
    rootPrefixCls,
    okTextLocale,
    okType,
    onConfirm,
    onOk
  } = useContext(ModalContext);
  return /* @__PURE__ */ React__default.createElement(ActionButton, {
    isSilent,
    type: okType || "primary",
    actionFn: onOk,
    close: /* @__PURE__ */ __name(function() {
      close == null || close.apply(void 0, arguments), onConfirm == null || onConfirm(!0);
    }, "close"),
    autoFocus: autoFocusButton === "ok",
    buttonProps: okButtonProps,
    prefixCls: `${rootPrefixCls}-btn`
  }, okTextLocale);
}, "ConfirmOkBtn");
var RefContext$1 = /* @__PURE__ */ React.createContext({});
function getMotionName(prefixCls, transitionName, animationName) {
  var motionName = transitionName;
  return !motionName && animationName && (motionName = "".concat(prefixCls, "-").concat(animationName)), motionName;
}
__name(getMotionName, "getMotionName");
function getScroll(w2, top) {
  var ret = w2["page".concat(top ? "Y" : "X", "Offset")], method = "scroll".concat(top ? "Top" : "Left");
  if (typeof ret != "number") {
    var d2 = w2.document;
    ret = d2.documentElement[method], typeof ret != "number" && (ret = d2.body[method]);
  }
  return ret;
}
__name(getScroll, "getScroll");
function offset(el) {
  var rect = el.getBoundingClientRect(), pos = {
    left: rect.left,
    top: rect.top
  }, doc = el.ownerDocument, w2 = doc.defaultView || doc.parentWindow;
  return pos.left += getScroll(w2), pos.top += getScroll(w2, !0), pos;
}
__name(offset, "offset");
const MemoChildren = /* @__PURE__ */ React.memo(function(_ref) {
  var children = _ref.children;
  return children;
}, function(_2, _ref2) {
  var shouldUpdate = _ref2.shouldUpdate;
  return !shouldUpdate;
});
var sentinelStyle$1 = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
}, entityStyle = {
  outline: "none"
}, Panel = /* @__PURE__ */ React__default.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls, className = props.className, style = props.style, title = props.title, ariaId = props.ariaId, footer = props.footer, closable = props.closable, closeIcon = props.closeIcon, onClose = props.onClose, children = props.children, bodyStyle = props.bodyStyle, bodyProps = props.bodyProps, modalRender = props.modalRender, onMouseDown = props.onMouseDown, onMouseUp = props.onMouseUp, holderRef = props.holderRef, visible = props.visible, forceRender = props.forceRender, width = props.width, height = props.height, modalClassNames = props.classNames, modalStyles = props.styles, _React$useContext = React__default.useContext(RefContext$1), panelRef = _React$useContext.panel, mergedRef = useComposeRef(holderRef, panelRef), sentinelStartRef = useRef(), sentinelEndRef = useRef();
  React__default.useImperativeHandle(ref, function() {
    return {
      focus: /* @__PURE__ */ __name(function() {
        var _sentinelStartRef$cur;
        (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 || _sentinelStartRef$cur.focus({
          preventScroll: !0
        });
      }, "focus"),
      changeActive: /* @__PURE__ */ __name(function(next) {
        var _document = document, activeElement = _document.activeElement;
        next && activeElement === sentinelEndRef.current ? sentinelStartRef.current.focus({
          preventScroll: !0
        }) : !next && activeElement === sentinelStartRef.current && sentinelEndRef.current.focus({
          preventScroll: !0
        });
      }, "changeActive")
    };
  });
  var contentStyle = {};
  width !== void 0 && (contentStyle.width = width), height !== void 0 && (contentStyle.height = height);
  var footerNode = footer ? /* @__PURE__ */ React__default.createElement("div", {
    className: cn("".concat(prefixCls, "-footer"), modalClassNames == null ? void 0 : modalClassNames.footer),
    style: _objectSpread2({}, modalStyles == null ? void 0 : modalStyles.footer)
  }, footer) : null, headerNode = title ? /* @__PURE__ */ React__default.createElement("div", {
    className: cn("".concat(prefixCls, "-header"), modalClassNames == null ? void 0 : modalClassNames.header),
    style: _objectSpread2({}, modalStyles == null ? void 0 : modalStyles.header)
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: "".concat(prefixCls, "-title"),
    id: ariaId
  }, title)) : null, closableObj = useMemo(function() {
    return _typeof(closable) === "object" && closable !== null ? closable : closable ? {
      closeIcon: closeIcon ?? /* @__PURE__ */ React__default.createElement("span", {
        className: "".concat(prefixCls, "-close-x")
      })
    } : {};
  }, [closable, closeIcon, prefixCls]), ariaProps = pickAttrs(closableObj, !0), closeBtnIsDisabled = _typeof(closable) === "object" && closable.disabled, closerNode = closable ? /* @__PURE__ */ React__default.createElement("button", _extends({
    type: "button",
    onClick: onClose,
    "aria-label": "Close"
  }, ariaProps, {
    className: "".concat(prefixCls, "-close"),
    disabled: closeBtnIsDisabled
  }), closableObj.closeIcon) : null, content = /* @__PURE__ */ React__default.createElement("div", {
    className: cn("".concat(prefixCls, "-content"), modalClassNames == null ? void 0 : modalClassNames.content),
    style: modalStyles == null ? void 0 : modalStyles.content
  }, closerNode, headerNode, /* @__PURE__ */ React__default.createElement("div", _extends({
    className: cn("".concat(prefixCls, "-body"), modalClassNames == null ? void 0 : modalClassNames.body),
    style: _objectSpread2(_objectSpread2({}, bodyStyle), modalStyles == null ? void 0 : modalStyles.body)
  }, bodyProps), children), footerNode);
  return /* @__PURE__ */ React__default.createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": title ? ariaId : null,
    "aria-modal": "true",
    ref: mergedRef,
    style: _objectSpread2(_objectSpread2({}, style), contentStyle),
    className: cn(prefixCls, className),
    onMouseDown,
    onMouseUp
  }, /* @__PURE__ */ React__default.createElement("div", {
    ref: sentinelStartRef,
    tabIndex: 0,
    style: entityStyle
  }, /* @__PURE__ */ React__default.createElement(MemoChildren, {
    shouldUpdate: visible || forceRender
  }, modalRender ? modalRender(content) : content)), /* @__PURE__ */ React__default.createElement("div", {
    tabIndex: 0,
    ref: sentinelEndRef,
    style: sentinelStyle$1
  }));
});
process.env.NODE_ENV !== "production" && (Panel.displayName = "Panel");
var Content$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls, title = props.title, style = props.style, className = props.className, visible = props.visible, forceRender = props.forceRender, destroyOnClose = props.destroyOnClose, motionName = props.motionName, ariaId = props.ariaId, onVisibleChanged = props.onVisibleChanged, mousePosition2 = props.mousePosition, dialogRef = useRef(), _React$useState = React.useState(), _React$useState2 = _slicedToArray(_React$useState, 2), transformOrigin = _React$useState2[0], setTransformOrigin = _React$useState2[1], contentStyle = {};
  transformOrigin && (contentStyle.transformOrigin = transformOrigin);
  function onPrepare() {
    var elementOffset = offset(dialogRef.current);
    setTransformOrigin(mousePosition2 && (mousePosition2.x || mousePosition2.y) ? "".concat(mousePosition2.x - elementOffset.left, "px ").concat(mousePosition2.y - elementOffset.top, "px") : "");
  }
  return __name(onPrepare, "onPrepare"), /* @__PURE__ */ React.createElement(CSSMotion, {
    visible,
    onVisibleChanged,
    onAppearPrepare: onPrepare,
    onEnterPrepare: onPrepare,
    forceRender,
    motionName,
    removeOnLeave: destroyOnClose,
    ref: dialogRef
  }, function(_ref, motionRef) {
    var motionClassName = _ref.className, motionStyle = _ref.style;
    return /* @__PURE__ */ React.createElement(Panel, _extends({}, props, {
      ref,
      title,
      ariaId,
      prefixCls,
      holderRef: motionRef,
      style: _objectSpread2(_objectSpread2(_objectSpread2({}, motionStyle), style), contentStyle),
      className: cn(className, motionClassName)
    }));
  });
});
Content$1.displayName = "Content";
var Mask = /* @__PURE__ */ __name(function(props) {
  var prefixCls = props.prefixCls, style = props.style, visible = props.visible, maskProps = props.maskProps, motionName = props.motionName, className = props.className;
  return /* @__PURE__ */ React.createElement(CSSMotion, {
    key: "mask",
    visible,
    motionName,
    leavedClassName: "".concat(prefixCls, "-mask-hidden")
  }, function(_ref, ref) {
    var motionClassName = _ref.className, motionStyle = _ref.style;
    return /* @__PURE__ */ React.createElement("div", _extends({
      ref,
      style: _objectSpread2(_objectSpread2({}, motionStyle), style),
      className: cn("".concat(prefixCls, "-mask"), motionClassName, className)
    }, maskProps));
  });
}, "Mask"), Dialog = /* @__PURE__ */ __name(function(props) {
  var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-dialog" : _props$prefixCls, zIndex = props.zIndex, _props$visible = props.visible, visible = _props$visible === void 0 ? !1 : _props$visible, _props$keyboard = props.keyboard, keyboard = _props$keyboard === void 0 ? !0 : _props$keyboard, _props$focusTriggerAf = props.focusTriggerAfterClose, focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? !0 : _props$focusTriggerAf, wrapStyle = props.wrapStyle, wrapClassName = props.wrapClassName, wrapProps = props.wrapProps, onClose = props.onClose, afterOpenChange = props.afterOpenChange, afterClose = props.afterClose, transitionName = props.transitionName, animation = props.animation, _props$closable = props.closable, closable = _props$closable === void 0 ? !0 : _props$closable, _props$mask = props.mask, mask2 = _props$mask === void 0 ? !0 : _props$mask, maskTransitionName = props.maskTransitionName, maskAnimation = props.maskAnimation, _props$maskClosable = props.maskClosable, maskClosable = _props$maskClosable === void 0 ? !0 : _props$maskClosable, maskStyle = props.maskStyle, maskProps = props.maskProps, rootClassName = props.rootClassName, modalClassNames = props.classNames, modalStyles = props.styles;
  process.env.NODE_ENV !== "production" && (["wrapStyle", "bodyStyle", "maskStyle"].forEach(function(prop) {
    warning(!(prop in props), "".concat(prop, " is deprecated, please use styles instead."));
  }), "wrapClassName" in props && warning(!1, "wrapClassName is deprecated, please use classNames instead."));
  var lastOutSideActiveElementRef = useRef(), wrapperRef = useRef(), contentRef = useRef(), _React$useState = React.useState(visible), _React$useState2 = _slicedToArray(_React$useState, 2), animatedVisible = _React$useState2[0], setAnimatedVisible = _React$useState2[1], ariaId = useId();
  function saveLastOutSideActiveElementRef() {
    contains(wrapperRef.current, document.activeElement) || (lastOutSideActiveElementRef.current = document.activeElement);
  }
  __name(saveLastOutSideActiveElementRef, "saveLastOutSideActiveElementRef");
  function focusDialogContent() {
    if (!contains(wrapperRef.current, document.activeElement)) {
      var _contentRef$current;
      (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
    }
  }
  __name(focusDialogContent, "focusDialogContent");
  function onDialogVisibleChanged(newVisible) {
    if (newVisible)
      focusDialogContent();
    else {
      if (setAnimatedVisible(!1), mask2 && lastOutSideActiveElementRef.current && focusTriggerAfterClose) {
        try {
          lastOutSideActiveElementRef.current.focus({
            preventScroll: !0
          });
        } catch {
        }
        lastOutSideActiveElementRef.current = null;
      }
      animatedVisible && (afterClose == null || afterClose());
    }
    afterOpenChange == null || afterOpenChange(newVisible);
  }
  __name(onDialogVisibleChanged, "onDialogVisibleChanged");
  function onInternalClose(e2) {
    onClose == null || onClose(e2);
  }
  __name(onInternalClose, "onInternalClose");
  var contentClickRef = useRef(!1), contentTimeoutRef = useRef(), onContentMouseDown = /* @__PURE__ */ __name(function() {
    clearTimeout(contentTimeoutRef.current), contentClickRef.current = !0;
  }, "onContentMouseDown"), onContentMouseUp = /* @__PURE__ */ __name(function() {
    contentTimeoutRef.current = setTimeout(function() {
      contentClickRef.current = !1;
    });
  }, "onContentMouseUp"), onWrapperClick = null;
  maskClosable && (onWrapperClick = /* @__PURE__ */ __name(function(e2) {
    contentClickRef.current ? contentClickRef.current = !1 : wrapperRef.current === e2.target && onInternalClose(e2);
  }, "onWrapperClick"));
  function onWrapperKeyDown(e2) {
    if (keyboard && e2.keyCode === KeyCode.ESC) {
      e2.stopPropagation(), onInternalClose(e2);
      return;
    }
    visible && e2.keyCode === KeyCode.TAB && contentRef.current.changeActive(!e2.shiftKey);
  }
  __name(onWrapperKeyDown, "onWrapperKeyDown"), useEffect(function() {
    visible && (setAnimatedVisible(!0), saveLastOutSideActiveElementRef());
  }, [visible]), useEffect(function() {
    return function() {
      clearTimeout(contentTimeoutRef.current);
    };
  }, []);
  var mergedStyle = _objectSpread2(_objectSpread2(_objectSpread2({
    zIndex
  }, wrapStyle), modalStyles == null ? void 0 : modalStyles.wrapper), {}, {
    display: animatedVisible ? null : "none"
  });
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: cn("".concat(prefixCls, "-root"), rootClassName)
  }, pickAttrs(props, {
    data: !0
  })), /* @__PURE__ */ React.createElement(Mask, {
    prefixCls,
    visible: mask2 && visible,
    motionName: getMotionName(prefixCls, maskTransitionName, maskAnimation),
    style: _objectSpread2(_objectSpread2({
      zIndex
    }, maskStyle), modalStyles == null ? void 0 : modalStyles.mask),
    maskProps,
    className: modalClassNames == null ? void 0 : modalClassNames.mask
  }), /* @__PURE__ */ React.createElement("div", _extends({
    tabIndex: -1,
    onKeyDown: onWrapperKeyDown,
    className: cn("".concat(prefixCls, "-wrap"), wrapClassName, modalClassNames == null ? void 0 : modalClassNames.wrapper),
    ref: wrapperRef,
    onClick: onWrapperClick,
    style: mergedStyle
  }, wrapProps), /* @__PURE__ */ React.createElement(Content$1, _extends({}, props, {
    onMouseDown: onContentMouseDown,
    onMouseUp: onContentMouseUp,
    ref: contentRef,
    closable,
    ariaId,
    prefixCls,
    visible: visible && animatedVisible,
    onClose: onInternalClose,
    onVisibleChanged: onDialogVisibleChanged,
    motionName: getMotionName(prefixCls, transitionName, animation)
  }))));
}, "Dialog"), DialogWrap = /* @__PURE__ */ __name(function(props) {
  var visible = props.visible, getContainer = props.getContainer, forceRender = props.forceRender, _props$destroyOnClose = props.destroyOnClose, destroyOnClose = _props$destroyOnClose === void 0 ? !1 : _props$destroyOnClose, _afterClose = props.afterClose, panelRef = props.panelRef, _React$useState = React.useState(visible), _React$useState2 = _slicedToArray(_React$useState, 2), animatedVisible = _React$useState2[0], setAnimatedVisible = _React$useState2[1], refContext = React.useMemo(function() {
    return {
      panel: panelRef
    };
  }, [panelRef]);
  return React.useEffect(function() {
    visible && setAnimatedVisible(!0);
  }, [visible]), !forceRender && destroyOnClose && !animatedVisible ? null : /* @__PURE__ */ React.createElement(RefContext$1.Provider, {
    value: refContext
  }, /* @__PURE__ */ React.createElement(Portal, {
    open: visible || forceRender || animatedVisible,
    autoDestroy: !1,
    getContainer,
    autoLock: visible || animatedVisible
  }, /* @__PURE__ */ React.createElement(Dialog, _extends({}, props, {
    destroyOnClose,
    afterClose: /* @__PURE__ */ __name(function() {
      _afterClose == null || _afterClose(), setAnimatedVisible(!1);
    }, "afterClose")
  }))));
}, "DialogWrap");
DialogWrap.displayName = "Dialog";
function pickClosable(context) {
  if (context)
    return {
      closable: context.closable,
      closeIcon: context.closeIcon
    };
}
__name(pickClosable, "pickClosable");
function useClosableConfig(closableCollection) {
  const {
    closable,
    closeIcon
  } = closableCollection || {};
  return React__default.useMemo(() => {
    if (
      // If `closable`, whatever rest be should be true
      !closable && (closable === !1 || closeIcon === !1 || closeIcon === null)
    )
      return !1;
    if (closable === void 0 && closeIcon === void 0)
      return null;
    let closableConfig = {
      closeIcon: typeof closeIcon != "boolean" && closeIcon !== null ? closeIcon : void 0
    };
    return closable && typeof closable == "object" && (closableConfig = Object.assign(Object.assign({}, closableConfig), closable)), closableConfig;
  }, [closable, closeIcon]);
}
__name(useClosableConfig, "useClosableConfig");
function assignWithoutUndefined() {
  const target = {};
  for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++)
    objList[_key] = arguments[_key];
  return objList.forEach((obj) => {
    obj && Object.keys(obj).forEach((key) => {
      obj[key] !== void 0 && (target[key] = obj[key]);
    });
  }), target;
}
__name(assignWithoutUndefined, "assignWithoutUndefined");
const EmptyFallbackCloseCollection = {};
function useClosable(propCloseCollection, contextCloseCollection) {
  let fallbackCloseCollection = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : EmptyFallbackCloseCollection;
  const propCloseConfig = useClosableConfig(propCloseCollection), contextCloseConfig = useClosableConfig(contextCloseCollection), closeBtnIsDisabled = typeof propCloseConfig != "boolean" ? !!(propCloseConfig != null && propCloseConfig.disabled) : !1, mergedFallbackCloseCollection = React__default.useMemo(() => Object.assign({
    closeIcon: /* @__PURE__ */ React__default.createElement(RefIcon$a, null)
  }, fallbackCloseCollection), [fallbackCloseCollection]), mergedClosableConfig = React__default.useMemo(() => propCloseConfig === !1 ? !1 : propCloseConfig ? assignWithoutUndefined(mergedFallbackCloseCollection, contextCloseConfig, propCloseConfig) : contextCloseConfig === !1 ? !1 : contextCloseConfig ? assignWithoutUndefined(mergedFallbackCloseCollection, contextCloseConfig) : mergedFallbackCloseCollection.closable ? mergedFallbackCloseCollection : !1, [propCloseConfig, contextCloseConfig, mergedFallbackCloseCollection]);
  return React__default.useMemo(() => {
    if (mergedClosableConfig === !1)
      return [!1, null, closeBtnIsDisabled];
    const {
      closeIconRender
    } = mergedFallbackCloseCollection, {
      closeIcon
    } = mergedClosableConfig;
    let mergedCloseIcon = closeIcon;
    if (mergedCloseIcon != null) {
      closeIconRender && (mergedCloseIcon = closeIconRender(closeIcon));
      const ariaProps = pickAttrs(mergedClosableConfig, !0);
      Object.keys(ariaProps).length && (mergedCloseIcon = /* @__PURE__ */ React__default.isValidElement(mergedCloseIcon) ? /* @__PURE__ */ React__default.cloneElement(mergedCloseIcon, ariaProps) : /* @__PURE__ */ React__default.createElement("span", Object.assign({}, ariaProps), mergedCloseIcon));
    }
    return [!0, mergedCloseIcon, closeBtnIsDisabled];
  }, [mergedClosableConfig, mergedFallbackCloseCollection]);
}
__name(useClosable, "useClosable");
const canUseDocElement = /* @__PURE__ */ __name(() => canUseDom() && window.document.documentElement, "canUseDocElement");
function voidFunc() {
}
__name(voidFunc, "voidFunc");
const WatermarkContext = /* @__PURE__ */ React.createContext({
  add: voidFunc,
  remove: voidFunc
});
function usePanelRef(panelSelector) {
  const watermark = React.useContext(WatermarkContext), panelEleRef = React.useRef(null);
  return useEvent((ele) => {
    if (ele) {
      const innerContentEle = panelSelector ? ele.querySelector(panelSelector) : ele;
      watermark.add(innerContentEle), panelEleRef.current = innerContentEle;
    } else
      watermark.remove(panelEleRef.current);
  });
}
__name(usePanelRef, "usePanelRef");
const NormalCancelBtn = /* @__PURE__ */ __name(() => {
  const {
    cancelButtonProps,
    cancelTextLocale,
    onCancel
  } = useContext(ModalContext);
  return /* @__PURE__ */ React__default.createElement(Button, Object.assign({
    onClick: onCancel
  }, cancelButtonProps), cancelTextLocale);
}, "NormalCancelBtn"), NormalOkBtn = /* @__PURE__ */ __name(() => {
  const {
    confirmLoading,
    okButtonProps,
    okType,
    okTextLocale,
    onOk
  } = useContext(ModalContext);
  return /* @__PURE__ */ React__default.createElement(Button, Object.assign({}, convertLegacyProps(okType), {
    loading: confirmLoading,
    onClick: onOk
  }, okButtonProps), okTextLocale);
}, "NormalOkBtn");
function renderCloseIcon(prefixCls, closeIcon) {
  return /* @__PURE__ */ React__default.createElement("span", {
    className: `${prefixCls}-close-x`
  }, closeIcon || /* @__PURE__ */ React__default.createElement(RefIcon$a, {
    className: `${prefixCls}-close-icon`
  }));
}
__name(renderCloseIcon, "renderCloseIcon");
const Footer$1 = /* @__PURE__ */ __name((props) => {
  const {
    okText,
    okType = "primary",
    cancelText,
    confirmLoading,
    onOk,
    onCancel,
    okButtonProps,
    cancelButtonProps,
    footer
  } = props, [locale] = useLocale("Modal", getConfirmLocale()), okTextLocale = okText || (locale == null ? void 0 : locale.okText), cancelTextLocale = cancelText || (locale == null ? void 0 : locale.cancelText), btnCtxValue = {
    confirmLoading,
    okButtonProps,
    cancelButtonProps,
    okTextLocale,
    cancelTextLocale,
    okType,
    onOk,
    onCancel
  }, btnCtxValueMemo = React__default.useMemo(() => btnCtxValue, _toConsumableArray(Object.values(btnCtxValue)));
  let footerNode;
  return typeof footer == "function" || typeof footer > "u" ? (footerNode = /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(NormalCancelBtn, null), /* @__PURE__ */ React__default.createElement(NormalOkBtn, null)), typeof footer == "function" && (footerNode = footer(footerNode, {
    OkBtn: NormalOkBtn,
    CancelBtn: NormalCancelBtn
  })), footerNode = /* @__PURE__ */ React__default.createElement(ModalContextProvider, {
    value: btnCtxValueMemo
  }, footerNode)) : footerNode = footer, /* @__PURE__ */ React__default.createElement(DisabledContextProvider, {
    disabled: !1
  }, footerNode);
}, "Footer$1");
function box(position) {
  return {
    position,
    inset: 0
  };
}
__name(box, "box");
const genModalMaskStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    antCls
  } = token;
  return [{
    [`${componentCls}-root`]: {
      [`${componentCls}${antCls}-zoom-enter, ${componentCls}${antCls}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: token.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      // https://github.com/ant-design/ant-design/issues/37329
      // https://github.com/ant-design/ant-design/issues/40272
      [`${componentCls}${antCls}-zoom-leave ${componentCls}-content`]: {
        pointerEvents: "none"
      },
      [`${componentCls}-mask`]: Object.assign(Object.assign({}, box("fixed")), {
        zIndex: token.zIndexPopupBase,
        height: "100%",
        backgroundColor: token.colorBgMask,
        pointerEvents: "none",
        [`${componentCls}-hidden`]: {
          display: "none"
        }
      }),
      [`${componentCls}-wrap`]: Object.assign(Object.assign({}, box("fixed")), {
        zIndex: token.zIndexPopupBase,
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${componentCls}-root`]: initFadeMotion(token)
  }];
}, "genModalMaskStyle"), genModalStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls
  } = token;
  return [
    // ======================== Root =========================
    {
      [`${componentCls}-root`]: {
        [`${componentCls}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${componentCls}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [componentCls]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${token.screenSMMax}px)`]: {
          [componentCls]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${unit(token.marginXS)} auto`
          },
          [`${componentCls}-centered`]: {
            [componentCls]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${unit(token.calc(token.margin).mul(2).equal())})`,
        margin: "0 auto",
        paddingBottom: token.paddingLG,
        [`${componentCls}-title`]: {
          margin: 0,
          color: token.titleColor,
          fontWeight: token.fontWeightStrong,
          fontSize: token.titleFontSize,
          lineHeight: token.titleLineHeight,
          wordWrap: "break-word"
        },
        [`${componentCls}-content`]: {
          position: "relative",
          backgroundColor: token.contentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: token.borderRadiusLG,
          boxShadow: token.boxShadow,
          pointerEvents: "auto",
          padding: token.contentPadding
        },
        [`${componentCls}-close`]: Object.assign({
          position: "absolute",
          top: token.calc(token.modalHeaderHeight).sub(token.modalCloseBtnSize).div(2).equal(),
          insetInlineEnd: token.calc(token.modalHeaderHeight).sub(token.modalCloseBtnSize).div(2).equal(),
          zIndex: token.calc(token.zIndexPopupBase).add(10).equal(),
          padding: 0,
          color: token.modalCloseIconColor,
          fontWeight: token.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: token.borderRadiusSM,
          width: token.modalCloseBtnSize,
          height: token.modalCloseBtnSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${token.motionDurationMid}, background-color ${token.motionDurationMid}`,
          "&-x": {
            display: "flex",
            fontSize: token.fontSizeLG,
            fontStyle: "normal",
            lineHeight: unit(token.modalCloseBtnSize),
            justifyContent: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:disabled": {
            pointerEvents: "none"
          },
          "&:hover": {
            color: token.modalCloseIconHoverColor,
            backgroundColor: token.colorBgTextHover,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: token.colorBgTextActive
          }
        }, genFocusStyle(token)),
        [`${componentCls}-header`]: {
          color: token.colorText,
          background: token.headerBg,
          borderRadius: `${unit(token.borderRadiusLG)} ${unit(token.borderRadiusLG)} 0 0`,
          marginBottom: token.headerMarginBottom,
          padding: token.headerPadding,
          borderBottom: token.headerBorderBottom
        },
        [`${componentCls}-body`]: {
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          wordWrap: "break-word",
          padding: token.bodyPadding,
          [`${componentCls}-body-skeleton`]: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: `${unit(token.margin)} auto`
          }
        },
        [`${componentCls}-footer`]: {
          textAlign: "end",
          background: token.footerBg,
          marginTop: token.footerMarginTop,
          padding: token.footerPadding,
          borderTop: token.footerBorderTop,
          borderRadius: token.footerBorderRadius,
          [`> ${token.antCls}-btn + ${token.antCls}-btn`]: {
            marginInlineStart: token.marginXS
          }
        },
        [`${componentCls}-open`]: {
          overflow: "hidden"
        }
      })
    },
    // ======================== Pure =========================
    {
      [`${componentCls}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${componentCls}-content,
          ${componentCls}-body,
          ${componentCls}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${componentCls}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
}, "genModalStyle"), genRTLStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-root`]: {
      [`${componentCls}-wrap-rtl`]: {
        direction: "rtl",
        [`${componentCls}-confirm-body`]: {
          direction: "rtl"
        }
      }
    }
  };
}, "genRTLStyle"), prepareToken$1 = /* @__PURE__ */ __name((token) => {
  const headerPaddingVertical = token.padding, headerFontSize = token.fontSizeHeading5, headerLineHeight = token.lineHeightHeading5;
  return merge(token, {
    modalHeaderHeight: token.calc(token.calc(headerLineHeight).mul(headerFontSize).equal()).add(token.calc(headerPaddingVertical).mul(2).equal()).equal(),
    modalFooterBorderColorSplit: token.colorSplit,
    modalFooterBorderStyle: token.lineType,
    modalFooterBorderWidth: token.lineWidth,
    modalCloseIconColor: token.colorIcon,
    modalCloseIconHoverColor: token.colorIconHover,
    modalCloseBtnSize: token.controlHeight,
    modalConfirmIconSize: token.fontHeight,
    modalTitleHeight: token.calc(token.titleFontSize).mul(token.titleLineHeight).equal()
  });
}, "prepareToken$1"), prepareComponentToken$b = /* @__PURE__ */ __name((token) => ({
  footerBg: "transparent",
  headerBg: token.colorBgElevated,
  titleLineHeight: token.lineHeightHeading5,
  titleFontSize: token.fontSizeHeading5,
  contentBg: token.colorBgElevated,
  titleColor: token.colorTextHeading,
  // internal
  contentPadding: token.wireframe ? 0 : `${unit(token.paddingMD)} ${unit(token.paddingContentHorizontalLG)}`,
  headerPadding: token.wireframe ? `${unit(token.padding)} ${unit(token.paddingLG)}` : 0,
  headerBorderBottom: token.wireframe ? `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}` : "none",
  headerMarginBottom: token.wireframe ? 0 : token.marginXS,
  bodyPadding: token.wireframe ? token.paddingLG : 0,
  footerPadding: token.wireframe ? `${unit(token.paddingXS)} ${unit(token.padding)}` : 0,
  footerBorderTop: token.wireframe ? `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}` : "none",
  footerBorderRadius: token.wireframe ? `0 0 ${unit(token.borderRadiusLG)} ${unit(token.borderRadiusLG)}` : 0,
  footerMarginTop: token.wireframe ? 0 : token.marginSM,
  confirmBodyPadding: token.wireframe ? `${unit(token.padding * 2)} ${unit(token.padding * 2)} ${unit(token.paddingLG)}` : 0,
  confirmIconMarginInlineEnd: token.wireframe ? token.margin : token.marginSM,
  confirmBtnsMarginTop: token.wireframe ? token.marginLG : token.marginSM
}), "prepareComponentToken$b"), useStyle$b = genStyleHooks("Modal", (token) => {
  const modalToken = prepareToken$1(token);
  return [genModalStyle(modalToken), genRTLStyle(modalToken), genModalMaskStyle(modalToken), initZoomMotion(modalToken, "zoom")];
}, prepareComponentToken$b, {
  unitless: {
    titleLineHeight: !0
  }
});
var __rest$l = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
let mousePosition;
const getClickPosition = /* @__PURE__ */ __name((e2) => {
  mousePosition = {
    x: e2.pageX,
    y: e2.pageY
  }, setTimeout(() => {
    mousePosition = null;
  }, 100);
}, "getClickPosition");
canUseDocElement() && document.documentElement.addEventListener("click", getClickPosition, !0);
const Modal$2 = /* @__PURE__ */ __name((props) => {
  var _a;
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction,
    modal: modalContext
  } = React.useContext(ConfigContext), handleCancel = /* @__PURE__ */ __name((e2) => {
    const {
      onCancel
    } = props;
    onCancel == null || onCancel(e2);
  }, "handleCancel"), handleOk = /* @__PURE__ */ __name((e2) => {
    const {
      onOk
    } = props;
    onOk == null || onOk(e2);
  }, "handleOk");
  if (process.env.NODE_ENV !== "production") {
    const warning2 = devUseWarning("Modal");
    [["visible", "open"], ["bodyStyle", "styles.body"], ["maskStyle", "styles.mask"]].forEach((_ref) => {
      let [deprecatedName, newName] = _ref;
      warning2.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });
  }
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    open: open2,
    wrapClassName,
    centered,
    getContainer,
    focusTriggerAfterClose = !0,
    style,
    // Deprecated
    visible,
    width = 520,
    footer,
    classNames: modalClassNames,
    styles: modalStyles,
    children,
    loading
  } = props, restProps = __rest$l(props, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "focusTriggerAfterClose", "style", "visible", "width", "footer", "classNames", "styles", "children", "loading"]), prefixCls = getPrefixCls("modal", customizePrefixCls), rootPrefixCls = getPrefixCls(), rootCls = useCSSVarCls(prefixCls), [wrapCSSVar, hashId, cssVarCls] = useStyle$b(prefixCls, rootCls), wrapClassNameExtended = cn(wrapClassName, {
    [`${prefixCls}-centered`]: !!centered,
    [`${prefixCls}-wrap-rtl`]: direction === "rtl"
  }), dialogFooter = footer !== null && !loading ? /* @__PURE__ */ React.createElement(Footer$1, Object.assign({}, props, {
    onOk: handleOk,
    onCancel: handleCancel
  })) : null, [mergedClosable, mergedCloseIcon, closeBtnIsDisabled] = useClosable(pickClosable(props), pickClosable(modalContext), {
    closable: !0,
    closeIcon: /* @__PURE__ */ React.createElement(RefIcon$a, {
      className: `${prefixCls}-close-icon`
    }),
    closeIconRender: /* @__PURE__ */ __name((icon2) => renderCloseIcon(prefixCls, icon2), "closeIconRender")
  }), panelRef = usePanelRef(`.${prefixCls}-content`), [zIndex, contextZIndex] = useZIndex("Modal", restProps.zIndex);
  return wrapCSSVar(/* @__PURE__ */ React.createElement(ContextIsolator, {
    form: !0,
    space: !0
  }, /* @__PURE__ */ React.createElement(zIndexContext.Provider, {
    value: contextZIndex
  }, /* @__PURE__ */ React.createElement(DialogWrap, Object.assign({
    width
  }, restProps, {
    zIndex,
    getContainer: getContainer === void 0 ? getContextPopupContainer : getContainer,
    prefixCls,
    rootClassName: cn(hashId, rootClassName, cssVarCls, rootCls),
    footer: dialogFooter,
    visible: open2 ?? visible,
    mousePosition: (_a = restProps.mousePosition) !== null && _a !== void 0 ? _a : mousePosition,
    onClose: handleCancel,
    closable: mergedClosable && {
      disabled: closeBtnIsDisabled,
      closeIcon: mergedCloseIcon
    },
    closeIcon: mergedCloseIcon,
    focusTriggerAfterClose,
    transitionName: getTransitionName(rootPrefixCls, "zoom", props.transitionName),
    maskTransitionName: getTransitionName(rootPrefixCls, "fade", props.maskTransitionName),
    className: cn(hashId, className, modalContext == null ? void 0 : modalContext.className),
    style: Object.assign(Object.assign({}, modalContext == null ? void 0 : modalContext.style), style),
    classNames: Object.assign(Object.assign(Object.assign({}, modalContext == null ? void 0 : modalContext.classNames), modalClassNames), {
      wrapper: cn(wrapClassNameExtended, modalClassNames == null ? void 0 : modalClassNames.wrapper)
    }),
    styles: Object.assign(Object.assign({}, modalContext == null ? void 0 : modalContext.styles), modalStyles),
    panelRef
  }), loading ? /* @__PURE__ */ React.createElement(Skeleton$1, {
    active: !0,
    title: !1,
    paragraph: {
      rows: 4
    },
    className: `${prefixCls}-body-skeleton`
  }) : children))));
}, "Modal$2"), genModalConfirmStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    titleFontSize,
    titleLineHeight,
    modalConfirmIconSize,
    fontSize,
    lineHeight,
    modalTitleHeight,
    fontHeight,
    confirmBodyPadding
  } = token, confirmComponentCls = `${componentCls}-confirm`;
  return {
    [confirmComponentCls]: {
      "&-rtl": {
        direction: "rtl"
      },
      [`${token.antCls}-modal-header`]: {
        display: "none"
      },
      [`${confirmComponentCls}-body-wrapper`]: Object.assign({}, clearFix()),
      [`&${componentCls} ${componentCls}-body`]: {
        padding: confirmBodyPadding
      },
      // ====================== Body ======================
      [`${confirmComponentCls}-body`]: {
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "start",
        [`> ${token.iconCls}`]: {
          flex: "none",
          fontSize: modalConfirmIconSize,
          marginInlineEnd: token.confirmIconMarginInlineEnd,
          marginTop: token.calc(token.calc(fontHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
        },
        [`&-has-title > ${token.iconCls}`]: {
          marginTop: token.calc(token.calc(modalTitleHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
        }
      },
      [`${confirmComponentCls}-paragraph`]: {
        display: "flex",
        flexDirection: "column",
        flex: "auto",
        rowGap: token.marginXS,
        // https://github.com/ant-design/ant-design/issues/51912
        maxWidth: `calc(100% - ${unit(token.marginSM)})`
      },
      // https://github.com/ant-design/ant-design/issues/48159
      [`${token.iconCls} + ${confirmComponentCls}-paragraph`]: {
        maxWidth: `calc(100% - ${unit(token.calc(token.modalConfirmIconSize).add(token.marginSM).equal())})`
      },
      [`${confirmComponentCls}-title`]: {
        color: token.colorTextHeading,
        fontWeight: token.fontWeightStrong,
        fontSize: titleFontSize,
        lineHeight: titleLineHeight
      },
      [`${confirmComponentCls}-content`]: {
        color: token.colorText,
        fontSize,
        lineHeight
      },
      // ===================== Footer =====================
      [`${confirmComponentCls}-btns`]: {
        textAlign: "end",
        marginTop: token.confirmBtnsMarginTop,
        [`${token.antCls}-btn + ${token.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: token.marginXS
        }
      }
    },
    [`${confirmComponentCls}-error ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorError
    },
    [`${confirmComponentCls}-warning ${confirmComponentCls}-body > ${token.iconCls},
        ${confirmComponentCls}-confirm ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorWarning
    },
    [`${confirmComponentCls}-info ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorInfo
    },
    [`${confirmComponentCls}-success ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorSuccess
    }
  };
}, "genModalConfirmStyle"), Confirm = genSubStyleComponent(["Modal", "confirm"], (token) => {
  const modalToken = prepareToken$1(token);
  return [genModalConfirmStyle(modalToken)];
}, prepareComponentToken$b, {
  // confirm is weak than modal since no conflict here
  order: -1e3
});
var __rest$k = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
function ConfirmContent(props) {
  const {
    prefixCls,
    icon: icon2,
    okText,
    cancelText,
    confirmPrefixCls,
    type,
    okCancel,
    footer,
    // Legacy for static function usage
    locale: staticLocale
  } = props, resetProps = __rest$k(props, ["prefixCls", "icon", "okText", "cancelText", "confirmPrefixCls", "type", "okCancel", "footer", "locale"]);
  if (process.env.NODE_ENV !== "production") {
    const warning2 = devUseWarning("Modal");
    process.env.NODE_ENV !== "production" && warning2(!(typeof icon2 == "string" && icon2.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${icon2}\` at https://ant.design/components/icon`);
  }
  let mergedIcon = icon2;
  if (!icon2 && icon2 !== null)
    switch (type) {
      case "info":
        mergedIcon = /* @__PURE__ */ React.createElement(RefIcon$6, null);
        break;
      case "success":
        mergedIcon = /* @__PURE__ */ React.createElement(RefIcon$9, null);
        break;
      case "error":
        mergedIcon = /* @__PURE__ */ React.createElement(RefIcon$8, null);
        break;
      default:
        mergedIcon = /* @__PURE__ */ React.createElement(RefIcon$7, null);
    }
  const mergedOkCancel = okCancel ?? type === "confirm", autoFocusButton = props.autoFocusButton === null ? !1 : props.autoFocusButton || "ok", [locale] = useLocale("Modal"), mergedLocale = staticLocale || locale, okTextLocale = okText || (mergedOkCancel ? mergedLocale == null ? void 0 : mergedLocale.okText : mergedLocale == null ? void 0 : mergedLocale.justOkText), cancelTextLocale = cancelText || (mergedLocale == null ? void 0 : mergedLocale.cancelText), btnCtxValue = Object.assign({
    autoFocusButton,
    cancelTextLocale,
    okTextLocale,
    mergedOkCancel
  }, resetProps), btnCtxValueMemo = React.useMemo(() => btnCtxValue, _toConsumableArray(Object.values(btnCtxValue))), footerOriginNode = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ConfirmCancelBtn, null), /* @__PURE__ */ React.createElement(ConfirmOkBtn, null)), hasTitle = props.title !== void 0 && props.title !== null, bodyCls = `${confirmPrefixCls}-body`;
  return /* @__PURE__ */ React.createElement("div", {
    className: `${confirmPrefixCls}-body-wrapper`
  }, /* @__PURE__ */ React.createElement("div", {
    className: cn(bodyCls, {
      [`${bodyCls}-has-title`]: hasTitle
    })
  }, mergedIcon, /* @__PURE__ */ React.createElement("div", {
    className: `${confirmPrefixCls}-paragraph`
  }, hasTitle && /* @__PURE__ */ React.createElement("span", {
    className: `${confirmPrefixCls}-title`
  }, props.title), /* @__PURE__ */ React.createElement("div", {
    className: `${confirmPrefixCls}-content`
  }, props.content))), footer === void 0 || typeof footer == "function" ? /* @__PURE__ */ React.createElement(ModalContextProvider, {
    value: btnCtxValueMemo
  }, /* @__PURE__ */ React.createElement("div", {
    className: `${confirmPrefixCls}-btns`
  }, typeof footer == "function" ? footer(footerOriginNode, {
    OkBtn: ConfirmOkBtn,
    CancelBtn: ConfirmCancelBtn
  }) : footerOriginNode)) : footer, /* @__PURE__ */ React.createElement(Confirm, {
    prefixCls
  }));
}
__name(ConfirmContent, "ConfirmContent");
const ConfirmDialog = /* @__PURE__ */ __name((props) => {
  const {
    close,
    zIndex,
    afterClose,
    open: open2,
    keyboard,
    centered,
    getContainer,
    maskStyle,
    direction,
    prefixCls,
    wrapClassName,
    rootPrefixCls,
    bodyStyle,
    closable = !1,
    closeIcon,
    modalRender,
    focusTriggerAfterClose,
    onConfirm,
    styles: styles2
  } = props;
  if (process.env.NODE_ENV !== "production") {
    const warning2 = devUseWarning("Modal");
    [["visible", "open"], ["bodyStyle", "styles.body"], ["maskStyle", "styles.mask"]].forEach((_ref) => {
      let [deprecatedName, newName] = _ref;
      warning2.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });
  }
  const confirmPrefixCls = `${prefixCls}-confirm`, width = props.width || 416, style = props.style || {}, mask2 = props.mask === void 0 ? !0 : props.mask, maskClosable = props.maskClosable === void 0 ? !1 : props.maskClosable, classString = cn(confirmPrefixCls, `${confirmPrefixCls}-${props.type}`, {
    [`${confirmPrefixCls}-rtl`]: direction === "rtl"
  }, props.className), [, token] = useToken(), mergedZIndex = React.useMemo(() => zIndex !== void 0 ? zIndex : token.zIndexPopupBase + CONTAINER_MAX_OFFSET, [zIndex, token]);
  return /* @__PURE__ */ React.createElement(Modal$2, {
    prefixCls,
    className: classString,
    wrapClassName: cn({
      [`${confirmPrefixCls}-centered`]: !!props.centered
    }, wrapClassName),
    onCancel: /* @__PURE__ */ __name(() => {
      close == null || close({
        triggerCancel: !0
      }), onConfirm == null || onConfirm(!1);
    }, "onCancel"),
    open: open2,
    title: "",
    footer: null,
    transitionName: getTransitionName(rootPrefixCls || "", "zoom", props.transitionName),
    maskTransitionName: getTransitionName(rootPrefixCls || "", "fade", props.maskTransitionName),
    mask: mask2,
    maskClosable,
    style,
    styles: Object.assign({
      body: bodyStyle,
      mask: maskStyle
    }, styles2),
    width,
    zIndex: mergedZIndex,
    afterClose,
    keyboard,
    centered,
    getContainer,
    closable,
    closeIcon,
    modalRender,
    focusTriggerAfterClose
  }, /* @__PURE__ */ React.createElement(ConfirmContent, Object.assign({}, props, {
    confirmPrefixCls
  })));
}, "ConfirmDialog"), ConfirmDialogWrapper$1 = /* @__PURE__ */ __name((props) => {
  const {
    rootPrefixCls,
    iconPrefixCls,
    direction,
    theme
  } = props;
  return /* @__PURE__ */ React.createElement(ConfigProvider, {
    prefixCls: rootPrefixCls,
    iconPrefixCls,
    direction,
    theme
  }, /* @__PURE__ */ React.createElement(ConfirmDialog, Object.assign({}, props)));
}, "ConfirmDialogWrapper$1");
process.env.NODE_ENV !== "production" && (ConfirmDialog.displayName = "ConfirmDialog", ConfirmDialogWrapper$1.displayName = "ConfirmDialogWrapper");
const destroyFns = [];
let defaultRootPrefixCls = "";
function getRootPrefixCls() {
  return defaultRootPrefixCls;
}
__name(getRootPrefixCls, "getRootPrefixCls");
const ConfirmDialogWrapper = /* @__PURE__ */ __name((props) => {
  var _a, _b;
  const {
    prefixCls: customizePrefixCls,
    getContainer,
    direction
  } = props, runtimeLocale = getConfirmLocale(), config = useContext(ConfigContext), rootPrefixCls = getRootPrefixCls() || config.getPrefixCls(), prefixCls = customizePrefixCls || `${rootPrefixCls}-modal`;
  let mergedGetContainer = getContainer;
  return mergedGetContainer === !1 && (mergedGetContainer = void 0, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && warning$1(!1, "Modal", "Static method not support `getContainer` to be `false` since it do not have context env.")), /* @__PURE__ */ React__default.createElement(ConfirmDialogWrapper$1, Object.assign({}, props, {
    rootPrefixCls,
    prefixCls,
    iconPrefixCls: config.iconPrefixCls,
    theme: config.theme,
    direction: direction ?? config.direction,
    locale: (_b = (_a = config.locale) === null || _a === void 0 ? void 0 : _a.Modal) !== null && _b !== void 0 ? _b : runtimeLocale,
    getContainer: mergedGetContainer
  }));
}, "ConfirmDialogWrapper");
function confirm(config) {
  const global = globalConfig();
  process.env.NODE_ENV !== "production" && !global.holderRender && warnContext("Modal");
  const container = document.createDocumentFragment();
  let currentConfig = Object.assign(Object.assign({}, config), {
    close,
    open: !0
  }), timeoutId, reactUnmount;
  function destroy2() {
    for (var _a, _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
      args[_key] = arguments[_key];
    if (args.some((param) => param == null ? void 0 : param.triggerCancel)) {
      var _a2;
      (_a = config.onCancel) === null || _a === void 0 || (_a2 = _a).call.apply(_a2, [config, () => {
      }].concat(_toConsumableArray(args.slice(1))));
    }
    for (let i2 = 0; i2 < destroyFns.length; i2++)
      if (destroyFns[i2] === close) {
        destroyFns.splice(i2, 1);
        break;
      }
    reactUnmount();
  }
  __name(destroy2, "destroy");
  function render(props) {
    clearTimeout(timeoutId), timeoutId = setTimeout(() => {
      const rootPrefixCls = global.getPrefixCls(void 0, getRootPrefixCls()), iconPrefixCls = global.getIconPrefixCls(), theme = global.getTheme(), dom = /* @__PURE__ */ React__default.createElement(ConfirmDialogWrapper, Object.assign({}, props));
      reactUnmount = getReactRender()(/* @__PURE__ */ React__default.createElement(ConfigProvider, {
        prefixCls: rootPrefixCls,
        iconPrefixCls,
        theme
      }, global.holderRender ? global.holderRender(dom) : dom), container);
    });
  }
  __name(render, "render");
  function close() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
      args[_key2] = arguments[_key2];
    currentConfig = Object.assign(Object.assign({}, currentConfig), {
      open: !1,
      afterClose: /* @__PURE__ */ __name(() => {
        typeof config.afterClose == "function" && config.afterClose(), destroy2.apply(this, args);
      }, "afterClose")
    }), currentConfig.visible && delete currentConfig.visible, render(currentConfig);
  }
  __name(close, "close");
  function update(configUpdate) {
    typeof configUpdate == "function" ? currentConfig = configUpdate(currentConfig) : currentConfig = Object.assign(Object.assign({}, currentConfig), configUpdate), render(currentConfig);
  }
  return __name(update, "update"), render(currentConfig), destroyFns.push(close), {
    destroy: close,
    update
  };
}
__name(confirm, "confirm");
function withWarn(props) {
  return Object.assign(Object.assign({}, props), {
    type: "warning"
  });
}
__name(withWarn, "withWarn");
function withInfo(props) {
  return Object.assign(Object.assign({}, props), {
    type: "info"
  });
}
__name(withInfo, "withInfo");
function withSuccess(props) {
  return Object.assign(Object.assign({}, props), {
    type: "success"
  });
}
__name(withSuccess, "withSuccess");
function withError(props) {
  return Object.assign(Object.assign({}, props), {
    type: "error"
  });
}
__name(withError, "withError");
function withConfirm(props) {
  return Object.assign(Object.assign({}, props), {
    type: "confirm"
  });
}
__name(withConfirm, "withConfirm");
function modalGlobalConfig(_ref) {
  let {
    rootPrefixCls
  } = _ref;
  process.env.NODE_ENV !== "production" && warning$1(!1, "Modal", "Modal.config is deprecated. Please use ConfigProvider.config instead."), defaultRootPrefixCls = rootPrefixCls;
}
__name(modalGlobalConfig, "modalGlobalConfig");
var __rest$j = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
const HookModal = /* @__PURE__ */ __name((_a, ref) => {
  var _b, {
    afterClose: hookAfterClose,
    config
  } = _a, restProps = __rest$j(_a, ["afterClose", "config"]);
  const [open2, setOpen] = React.useState(!0), [innerConfig, setInnerConfig] = React.useState(config), {
    direction,
    getPrefixCls
  } = React.useContext(ConfigContext), prefixCls = getPrefixCls("modal"), rootPrefixCls = getPrefixCls(), afterClose = /* @__PURE__ */ __name(() => {
    var _a2;
    hookAfterClose(), (_a2 = innerConfig.afterClose) === null || _a2 === void 0 || _a2.call(innerConfig);
  }, "afterClose"), close = /* @__PURE__ */ __name(function() {
    var _a2;
    setOpen(!1);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
      args[_key] = arguments[_key];
    if (args.some((param) => param == null ? void 0 : param.triggerCancel)) {
      var _a22;
      (_a2 = innerConfig.onCancel) === null || _a2 === void 0 || (_a22 = _a2).call.apply(_a22, [innerConfig, () => {
      }].concat(_toConsumableArray(args.slice(1))));
    }
  }, "close");
  React.useImperativeHandle(ref, () => ({
    destroy: close,
    update: /* @__PURE__ */ __name((newConfig) => {
      setInnerConfig((originConfig) => Object.assign(Object.assign({}, originConfig), newConfig));
    }, "update")
  }));
  const mergedOkCancel = (_b = innerConfig.okCancel) !== null && _b !== void 0 ? _b : innerConfig.type === "confirm", [contextLocale] = useLocale("Modal", localeValues.Modal);
  return /* @__PURE__ */ React.createElement(ConfirmDialogWrapper$1, Object.assign({
    prefixCls,
    rootPrefixCls
  }, innerConfig, {
    close,
    open: open2,
    afterClose,
    okText: innerConfig.okText || (mergedOkCancel ? contextLocale == null ? void 0 : contextLocale.okText : contextLocale == null ? void 0 : contextLocale.justOkText),
    direction: innerConfig.direction || direction,
    cancelText: innerConfig.cancelText || (contextLocale == null ? void 0 : contextLocale.cancelText)
  }, restProps));
}, "HookModal"), HookModal$1 = /* @__PURE__ */ React.forwardRef(HookModal);
let uuid = 0;
const ElementsHolder = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef((_props, ref) => {
  const [elements, patchElement] = usePatchElement();
  return React.useImperativeHandle(ref, () => ({
    patchElement
  }), []), /* @__PURE__ */ React.createElement(React.Fragment, null, elements);
}));
function useModal$1() {
  const holderRef = React.useRef(null), [actionQueue, setActionQueue] = React.useState([]);
  React.useEffect(() => {
    actionQueue.length && (_toConsumableArray(actionQueue).forEach((action) => {
      action();
    }), setActionQueue([]));
  }, [actionQueue]);
  const getConfirmFunc = React.useCallback((withFunc) => /* @__PURE__ */ __name(function(config) {
    var _a;
    uuid += 1;
    const modalRef = /* @__PURE__ */ React.createRef();
    let resolvePromise;
    const promise = new Promise((resolve) => {
      resolvePromise = resolve;
    });
    let silent = !1, closeFunc;
    const modal = /* @__PURE__ */ React.createElement(HookModal$1, {
      key: `modal-${uuid}`,
      config: withFunc(config),
      ref: modalRef,
      afterClose: /* @__PURE__ */ __name(() => {
        closeFunc == null || closeFunc();
      }, "afterClose"),
      isSilent: /* @__PURE__ */ __name(() => silent, "isSilent"),
      onConfirm: /* @__PURE__ */ __name((confirmed) => {
        resolvePromise(confirmed);
      }, "onConfirm")
    });
    return closeFunc = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.patchElement(modal), closeFunc && destroyFns.push(closeFunc), {
      destroy: /* @__PURE__ */ __name(() => {
        function destroyAction() {
          var _a2;
          (_a2 = modalRef.current) === null || _a2 === void 0 || _a2.destroy();
        }
        __name(destroyAction, "destroyAction"), modalRef.current ? destroyAction() : setActionQueue((prev) => [].concat(_toConsumableArray(prev), [destroyAction]));
      }, "destroy"),
      update: /* @__PURE__ */ __name((newConfig) => {
        function updateAction() {
          var _a2;
          (_a2 = modalRef.current) === null || _a2 === void 0 || _a2.update(newConfig);
        }
        __name(updateAction, "updateAction"), modalRef.current ? updateAction() : setActionQueue((prev) => [].concat(_toConsumableArray(prev), [updateAction]));
      }, "update"),
      then: /* @__PURE__ */ __name((resolve) => (silent = !0, promise.then(resolve)), "then")
    };
  }, "hookConfirm"), []);
  return [React.useMemo(() => ({
    info: getConfirmFunc(withInfo),
    success: getConfirmFunc(withSuccess),
    error: getConfirmFunc(withError),
    warning: getConfirmFunc(withWarn),
    confirm: getConfirmFunc(withConfirm)
  }), []), /* @__PURE__ */ React.createElement(ElementsHolder, {
    key: "modal-holder",
    ref: holderRef
  })];
}
__name(useModal$1, "useModal$1");
const genNotificationPlacementStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    notificationMarginEdge,
    animationMaxHeight
  } = token, noticeCls = `${componentCls}-notice`, rightFadeIn = new Keyframe("antNotificationFadeIn", {
    "0%": {
      transform: "translate3d(100%, 0, 0)",
      opacity: 0
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      opacity: 1
    }
  }), topFadeIn = new Keyframe("antNotificationTopFadeIn", {
    "0%": {
      top: -animationMaxHeight,
      opacity: 0
    },
    "100%": {
      top: 0,
      opacity: 1
    }
  }), bottomFadeIn = new Keyframe("antNotificationBottomFadeIn", {
    "0%": {
      bottom: token.calc(animationMaxHeight).mul(-1).equal(),
      opacity: 0
    },
    "100%": {
      bottom: 0,
      opacity: 1
    }
  }), leftFadeIn = new Keyframe("antNotificationLeftFadeIn", {
    "0%": {
      transform: "translate3d(-100%, 0, 0)",
      opacity: 0
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      opacity: 1
    }
  });
  return {
    [componentCls]: {
      [`&${componentCls}-top, &${componentCls}-bottom`]: {
        marginInline: 0,
        [noticeCls]: {
          marginInline: "auto auto"
        }
      },
      [`&${componentCls}-top`]: {
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: topFadeIn
        }
      },
      [`&${componentCls}-bottom`]: {
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: bottomFadeIn
        }
      },
      [`&${componentCls}-topRight, &${componentCls}-bottomRight`]: {
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: rightFadeIn
        }
      },
      [`&${componentCls}-topLeft, &${componentCls}-bottomLeft`]: {
        marginRight: {
          value: 0,
          _skip_check_: !0
        },
        marginLeft: {
          value: notificationMarginEdge,
          _skip_check_: !0
        },
        [noticeCls]: {
          marginInlineEnd: "auto",
          marginInlineStart: 0
        },
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: leftFadeIn
        }
      }
    }
  };
}, "genNotificationPlacementStyle"), NotificationPlacements = ["top", "topLeft", "topRight", "bottom", "bottomLeft", "bottomRight"], placementAlignProperty = {
  topLeft: "left",
  topRight: "right",
  bottomLeft: "left",
  bottomRight: "right",
  top: "left",
  bottom: "left"
}, genPlacementStackStyle = /* @__PURE__ */ __name((token, placement) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-${placement}`]: {
      [`&${componentCls}-stack > ${componentCls}-notice-wrapper`]: {
        [placement.startsWith("top") ? "top" : "bottom"]: 0,
        [placementAlignProperty[placement]]: {
          value: 0,
          _skip_check_: !0
        }
      }
    }
  };
}, "genPlacementStackStyle"), genStackChildrenStyle = /* @__PURE__ */ __name((token) => {
  const childrenStyle = {};
  for (let i2 = 1; i2 < token.notificationStackLayer; i2++)
    childrenStyle[`&:nth-last-child(${i2 + 1})`] = {
      overflow: "hidden",
      [`& > ${token.componentCls}-notice`]: {
        opacity: 0,
        transition: `opacity ${token.motionDurationMid}`
      }
    };
  return Object.assign({
    [`&:not(:nth-last-child(-n+${token.notificationStackLayer}))`]: {
      opacity: 0,
      overflow: "hidden",
      color: "transparent",
      pointerEvents: "none"
    }
  }, childrenStyle);
}, "genStackChildrenStyle"), genStackedNoticeStyle = /* @__PURE__ */ __name((token) => {
  const childrenStyle = {};
  for (let i2 = 1; i2 < token.notificationStackLayer; i2++)
    childrenStyle[`&:nth-last-child(${i2 + 1})`] = {
      background: token.colorBgBlur,
      backdropFilter: "blur(10px)",
      "-webkit-backdrop-filter": "blur(10px)"
    };
  return Object.assign({}, childrenStyle);
}, "genStackedNoticeStyle"), genStackStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls
  } = token;
  return Object.assign({
    [`${componentCls}-stack`]: {
      [`& > ${componentCls}-notice-wrapper`]: Object.assign({
        transition: `all ${token.motionDurationSlow}, backdrop-filter 0s`,
        position: "absolute"
      }, genStackChildrenStyle(token))
    },
    [`${componentCls}-stack:not(${componentCls}-stack-expanded)`]: {
      [`& > ${componentCls}-notice-wrapper`]: Object.assign({}, genStackedNoticeStyle(token))
    },
    [`${componentCls}-stack${componentCls}-stack-expanded`]: {
      [`& > ${componentCls}-notice-wrapper`]: {
        "&:not(:nth-last-child(-n + 1))": {
          opacity: 1,
          overflow: "unset",
          color: "inherit",
          pointerEvents: "auto",
          [`& > ${token.componentCls}-notice`]: {
            opacity: 1
          }
        },
        "&:after": {
          content: '""',
          position: "absolute",
          height: token.margin,
          width: "100%",
          insetInline: 0,
          bottom: token.calc(token.margin).mul(-1).equal(),
          background: "transparent",
          pointerEvents: "auto"
        }
      }
    }
  }, NotificationPlacements.map((placement) => genPlacementStackStyle(token, placement)).reduce((acc, cur) => Object.assign(Object.assign({}, acc), cur), {}));
}, "genStackStyle"), genNoticeStyle = /* @__PURE__ */ __name((token) => {
  const {
    iconCls,
    componentCls,
    // .ant-notification
    boxShadow,
    fontSizeLG,
    notificationMarginBottom,
    borderRadiusLG,
    colorSuccess,
    colorInfo,
    colorWarning,
    colorError,
    colorTextHeading,
    notificationBg,
    notificationPadding,
    notificationMarginEdge,
    notificationProgressBg,
    notificationProgressHeight,
    fontSize,
    lineHeight,
    width,
    notificationIconSize,
    colorText
  } = token, noticeCls = `${componentCls}-notice`;
  return {
    position: "relative",
    marginBottom: notificationMarginBottom,
    marginInlineStart: "auto",
    background: notificationBg,
    borderRadius: borderRadiusLG,
    boxShadow,
    [noticeCls]: {
      padding: notificationPadding,
      width,
      maxWidth: `calc(100vw - ${unit(token.calc(notificationMarginEdge).mul(2).equal())})`,
      overflow: "hidden",
      lineHeight,
      wordWrap: "break-word"
    },
    [`${noticeCls}-message`]: {
      marginBottom: token.marginXS,
      color: colorTextHeading,
      fontSize: fontSizeLG,
      lineHeight: token.lineHeightLG
    },
    [`${noticeCls}-description`]: {
      fontSize,
      color: colorText
    },
    [`${noticeCls}-closable ${noticeCls}-message`]: {
      paddingInlineEnd: token.paddingLG
    },
    [`${noticeCls}-with-icon ${noticeCls}-message`]: {
      marginBottom: token.marginXS,
      marginInlineStart: token.calc(token.marginSM).add(notificationIconSize).equal(),
      fontSize: fontSizeLG
    },
    [`${noticeCls}-with-icon ${noticeCls}-description`]: {
      marginInlineStart: token.calc(token.marginSM).add(notificationIconSize).equal(),
      fontSize
    },
    // Icon & color style in different selector level
    // https://github.com/ant-design/ant-design/issues/16503
    // https://github.com/ant-design/ant-design/issues/15512
    [`${noticeCls}-icon`]: {
      position: "absolute",
      fontSize: notificationIconSize,
      lineHeight: 1,
      // icon-font
      [`&-success${iconCls}`]: {
        color: colorSuccess
      },
      [`&-info${iconCls}`]: {
        color: colorInfo
      },
      [`&-warning${iconCls}`]: {
        color: colorWarning
      },
      [`&-error${iconCls}`]: {
        color: colorError
      }
    },
    [`${noticeCls}-close`]: Object.assign({
      position: "absolute",
      top: token.notificationPaddingVertical,
      insetInlineEnd: token.notificationPaddingHorizontal,
      color: token.colorIcon,
      outline: "none",
      width: token.notificationCloseButtonSize,
      height: token.notificationCloseButtonSize,
      borderRadius: token.borderRadiusSM,
      transition: `background-color ${token.motionDurationMid}, color ${token.motionDurationMid}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        color: token.colorIconHover,
        backgroundColor: token.colorBgTextHover
      },
      "&:active": {
        backgroundColor: token.colorBgTextActive
      }
    }, genFocusStyle(token)),
    [`${noticeCls}-progress`]: {
      position: "absolute",
      display: "block",
      appearance: "none",
      WebkitAppearance: "none",
      inlineSize: `calc(100% - ${unit(borderRadiusLG)} * 2)`,
      left: {
        _skip_check_: !0,
        value: borderRadiusLG
      },
      right: {
        _skip_check_: !0,
        value: borderRadiusLG
      },
      bottom: 0,
      blockSize: notificationProgressHeight,
      border: 0,
      "&, &::-webkit-progress-bar": {
        borderRadius: borderRadiusLG,
        backgroundColor: "rgba(0, 0, 0, 0.04)"
      },
      "&::-moz-progress-bar": {
        background: notificationProgressBg
      },
      "&::-webkit-progress-value": {
        borderRadius: borderRadiusLG,
        background: notificationProgressBg
      }
    },
    [`${noticeCls}-btn`]: {
      float: "right",
      marginTop: token.marginSM
    }
  };
}, "genNoticeStyle"), genNotificationStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    // .ant-notification
    notificationMarginBottom,
    notificationMarginEdge,
    motionDurationMid,
    motionEaseInOut
  } = token, noticeCls = `${componentCls}-notice`, fadeOut = new Keyframe("antNotificationFadeOut", {
    "0%": {
      maxHeight: token.animationMaxHeight,
      marginBottom: notificationMarginBottom
    },
    "100%": {
      maxHeight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
        position: "fixed",
        zIndex: token.zIndexPopup,
        marginRight: {
          value: notificationMarginEdge,
          _skip_check_: !0
        },
        [`${componentCls}-hook-holder`]: {
          position: "relative"
        },
        //  animation
        [`${componentCls}-fade-appear-prepare`]: {
          opacity: "0 !important"
        },
        [`${componentCls}-fade-enter, ${componentCls}-fade-appear`]: {
          animationDuration: token.motionDurationMid,
          animationTimingFunction: motionEaseInOut,
          animationFillMode: "both",
          opacity: 0,
          animationPlayState: "paused"
        },
        [`${componentCls}-fade-leave`]: {
          animationTimingFunction: motionEaseInOut,
          animationFillMode: "both",
          animationDuration: motionDurationMid,
          animationPlayState: "paused"
        },
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationPlayState: "running"
        },
        [`${componentCls}-fade-leave${componentCls}-fade-leave-active`]: {
          animationName: fadeOut,
          animationPlayState: "running"
        },
        // RTL
        "&-rtl": {
          direction: "rtl",
          [`${noticeCls}-btn`]: {
            float: "left"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [componentCls]: {
        [`${noticeCls}-wrapper`]: Object.assign({}, genNoticeStyle(token))
      }
    }
  ];
}, "genNotificationStyle"), prepareComponentToken$a = /* @__PURE__ */ __name((token) => ({
  zIndexPopup: token.zIndexPopupBase + CONTAINER_MAX_OFFSET + 50,
  width: 384
}), "prepareComponentToken$a"), prepareNotificationToken = /* @__PURE__ */ __name((token) => {
  const notificationPaddingVertical = token.paddingMD, notificationPaddingHorizontal = token.paddingLG;
  return merge(token, {
    notificationBg: token.colorBgElevated,
    notificationPaddingVertical,
    notificationPaddingHorizontal,
    notificationIconSize: token.calc(token.fontSizeLG).mul(token.lineHeightLG).equal(),
    notificationCloseButtonSize: token.calc(token.controlHeightLG).mul(0.55).equal(),
    notificationMarginBottom: token.margin,
    notificationPadding: `${unit(token.paddingMD)} ${unit(token.paddingContentHorizontalLG)}`,
    notificationMarginEdge: token.marginLG,
    animationMaxHeight: 150,
    notificationStackLayer: 3,
    notificationProgressHeight: 2,
    notificationProgressBg: `linear-gradient(90deg, ${token.colorPrimaryBorderHover}, ${token.colorPrimary})`
  });
}, "prepareNotificationToken"), useStyle$a = genStyleHooks("Notification", (token) => {
  const notificationToken = prepareNotificationToken(token);
  return [genNotificationStyle(notificationToken), genNotificationPlacementStyle(notificationToken), genStackStyle(notificationToken)];
}, prepareComponentToken$a), PurePanelStyle = genSubStyleComponent(["Notification", "PurePanel"], (token) => {
  const noticeCls = `${token.componentCls}-notice`, notificationToken = prepareNotificationToken(token);
  return {
    [`${noticeCls}-pure-panel`]: Object.assign(Object.assign({}, genNoticeStyle(notificationToken)), {
      width: notificationToken.width,
      maxWidth: `calc(100vw - ${unit(token.calc(notificationToken.notificationMarginEdge).mul(2).equal())})`,
      margin: 0
    })
  };
}, prepareComponentToken$a);
var __rest$i = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
function getCloseIcon(prefixCls, closeIcon) {
  return closeIcon === null || closeIcon === !1 ? null : closeIcon || /* @__PURE__ */ React.createElement(RefIcon$a, {
    className: `${prefixCls}-close-icon`
  });
}
__name(getCloseIcon, "getCloseIcon");
const typeToIcon = {
  success: RefIcon$9,
  info: RefIcon$6,
  error: RefIcon$8,
  warning: RefIcon$7
}, PureContent = /* @__PURE__ */ __name((props) => {
  const {
    prefixCls,
    icon: icon2,
    type,
    message,
    description,
    btn,
    role = "alert"
  } = props;
  let iconNode = null;
  return icon2 ? iconNode = /* @__PURE__ */ React.createElement("span", {
    className: `${prefixCls}-icon`
  }, icon2) : type && (iconNode = /* @__PURE__ */ React.createElement(typeToIcon[type] || null, {
    className: cn(`${prefixCls}-icon`, `${prefixCls}-icon-${type}`)
  })), /* @__PURE__ */ React.createElement("div", {
    className: cn({
      [`${prefixCls}-with-icon`]: iconNode
    }),
    role
  }, iconNode, /* @__PURE__ */ React.createElement("div", {
    className: `${prefixCls}-message`
  }, message), /* @__PURE__ */ React.createElement("div", {
    className: `${prefixCls}-description`
  }, description), btn && /* @__PURE__ */ React.createElement("div", {
    className: `${prefixCls}-btn`
  }, btn));
}, "PureContent"), PurePanel$5 = /* @__PURE__ */ __name((props) => {
  const {
    prefixCls: staticPrefixCls,
    className,
    icon: icon2,
    type,
    message,
    description,
    btn,
    closable = !0,
    closeIcon,
    className: notificationClassName
  } = props, restProps = __rest$i(props, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "closable", "closeIcon", "className"]), {
    getPrefixCls
  } = React.useContext(ConfigContext), prefixCls = staticPrefixCls || getPrefixCls("notification"), noticePrefixCls = `${prefixCls}-notice`, rootCls = useCSSVarCls(prefixCls), [wrapCSSVar, hashId, cssVarCls] = useStyle$a(prefixCls, rootCls);
  return wrapCSSVar(/* @__PURE__ */ React.createElement("div", {
    className: cn(`${noticePrefixCls}-pure-panel`, hashId, className, cssVarCls, rootCls)
  }, /* @__PURE__ */ React.createElement(PurePanelStyle, {
    prefixCls
  }), /* @__PURE__ */ React.createElement(Notify, Object.assign({}, restProps, {
    prefixCls,
    eventKey: "pure",
    duration: null,
    closable,
    className: cn({
      notificationClassName
    }),
    closeIcon: getCloseIcon(prefixCls, closeIcon),
    content: /* @__PURE__ */ React.createElement(PureContent, {
      prefixCls: noticePrefixCls,
      icon: icon2,
      type,
      message,
      description,
      btn
    })
  }))));
}, "PurePanel$5");
function getPlacementStyle(placement, top, bottom) {
  let style;
  switch (placement) {
    case "top":
      style = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top,
        bottom: "auto"
      };
      break;
    case "topLeft":
      style = {
        left: 0,
        top,
        bottom: "auto"
      };
      break;
    case "topRight":
      style = {
        right: 0,
        top,
        bottom: "auto"
      };
      break;
    case "bottom":
      style = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: "auto",
        bottom
      };
      break;
    case "bottomLeft":
      style = {
        left: 0,
        top: "auto",
        bottom
      };
      break;
    default:
      style = {
        right: 0,
        top: "auto",
        bottom
      };
      break;
  }
  return style;
}
__name(getPlacementStyle, "getPlacementStyle");
function getMotion(prefixCls) {
  return {
    motionName: `${prefixCls}-fade`
  };
}
__name(getMotion, "getMotion");
var __rest$h = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
const DEFAULT_OFFSET = 24, DEFAULT_DURATION = 4.5, DEFAULT_PLACEMENT = "topRight", Wrapper = /* @__PURE__ */ __name((_ref) => {
  let {
    children,
    prefixCls
  } = _ref;
  const rootCls = useCSSVarCls(prefixCls), [wrapCSSVar, hashId, cssVarCls] = useStyle$a(prefixCls, rootCls);
  return wrapCSSVar(/* @__PURE__ */ React__default.createElement(NotificationProvider, {
    classNames: {
      list: cn(hashId, cssVarCls, rootCls)
    }
  }, children));
}, "Wrapper"), renderNotifications = /* @__PURE__ */ __name((node, _ref2) => {
  let {
    prefixCls,
    key
  } = _ref2;
  return /* @__PURE__ */ React__default.createElement(Wrapper, {
    prefixCls,
    key
  }, node);
}, "renderNotifications"), Holder = /* @__PURE__ */ React__default.forwardRef((props, ref) => {
  const {
    top,
    bottom,
    prefixCls: staticPrefixCls,
    getContainer: staticGetContainer,
    maxCount,
    rtl,
    onAllRemoved,
    stack,
    duration,
    pauseOnHover = !0,
    showProgress
  } = props, {
    getPrefixCls,
    getPopupContainer,
    notification: notification2,
    direction
  } = useContext(ConfigContext), [, token] = useToken(), prefixCls = staticPrefixCls || getPrefixCls("notification"), getStyle2 = /* @__PURE__ */ __name((placement) => getPlacementStyle(placement, top ?? DEFAULT_OFFSET, bottom ?? DEFAULT_OFFSET), "getStyle"), getClassName = /* @__PURE__ */ __name(() => cn({
    [`${prefixCls}-rtl`]: rtl ?? direction === "rtl"
  }), "getClassName"), getNotificationMotion = /* @__PURE__ */ __name(() => getMotion(prefixCls), "getNotificationMotion"), [api, holder] = useNotification$2({
    prefixCls,
    style: getStyle2,
    className: getClassName,
    motion: getNotificationMotion,
    closable: !0,
    closeIcon: getCloseIcon(prefixCls),
    duration: duration ?? DEFAULT_DURATION,
    getContainer: /* @__PURE__ */ __name(() => (staticGetContainer == null ? void 0 : staticGetContainer()) || (getPopupContainer == null ? void 0 : getPopupContainer()) || document.body, "getContainer"),
    maxCount,
    pauseOnHover,
    showProgress,
    onAllRemoved,
    renderNotifications,
    stack: stack === !1 ? !1 : {
      threshold: typeof stack == "object" ? stack == null ? void 0 : stack.threshold : void 0,
      offset: 8,
      gap: token.margin
    }
  });
  return React__default.useImperativeHandle(ref, () => Object.assign(Object.assign({}, api), {
    prefixCls,
    notification: notification2
  })), holder;
});
function useInternalNotification(notificationConfig) {
  const holderRef = React__default.useRef(null), warning2 = devUseWarning("Notification");
  return [React__default.useMemo(() => {
    const open2 = /* @__PURE__ */ __name((config) => {
      var _a;
      if (!holderRef.current) {
        process.env.NODE_ENV !== "production" && warning2(!1, "usage", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.");
        return;
      }
      const {
        open: originOpen,
        prefixCls,
        notification: notification2
      } = holderRef.current, noticePrefixCls = `${prefixCls}-notice`, {
        message,
        description,
        icon: icon2,
        type,
        btn,
        className,
        style,
        role = "alert",
        closeIcon,
        closable
      } = config, restConfig = __rest$h(config, ["message", "description", "icon", "type", "btn", "className", "style", "role", "closeIcon", "closable"]), realCloseIcon = getCloseIcon(noticePrefixCls, typeof closeIcon < "u" ? closeIcon : notification2 == null ? void 0 : notification2.closeIcon);
      return originOpen(Object.assign(Object.assign({
        // use placement from props instead of hard-coding "topRight"
        placement: (_a = notificationConfig == null ? void 0 : notificationConfig.placement) !== null && _a !== void 0 ? _a : DEFAULT_PLACEMENT
      }, restConfig), {
        content: /* @__PURE__ */ React__default.createElement(PureContent, {
          prefixCls: noticePrefixCls,
          icon: icon2,
          type,
          message,
          description,
          btn,
          role
        }),
        className: cn(type && `${noticePrefixCls}-${type}`, className, notification2 == null ? void 0 : notification2.className),
        style: Object.assign(Object.assign({}, notification2 == null ? void 0 : notification2.style), style),
        closeIcon: realCloseIcon,
        closable: closable ?? !!realCloseIcon
      }));
    }, "open"), clone = {
      open: open2,
      destroy: /* @__PURE__ */ __name((key) => {
        var _a, _b;
        key !== void 0 ? (_a = holderRef.current) === null || _a === void 0 || _a.close(key) : (_b = holderRef.current) === null || _b === void 0 || _b.destroy();
      }, "destroy")
    };
    return ["success", "info", "warning", "error"].forEach((type) => {
      clone[type] = (config) => open2(Object.assign(Object.assign({}, config), {
        type
      }));
    }), clone;
  }, []), /* @__PURE__ */ React__default.createElement(Holder, Object.assign({
    key: "notification-holder"
  }, notificationConfig, {
    ref: holderRef
  }))];
}
__name(useInternalNotification, "useInternalNotification");
function useNotification$1(notificationConfig) {
  return useInternalNotification(notificationConfig);
}
__name(useNotification$1, "useNotification$1");
const AppConfigContext = /* @__PURE__ */ React__default.createContext({}), {
  Option
} = Select;
function isSelectOptionOrSelectOptGroup(child) {
  return (child == null ? void 0 : child.type) && (child.type.isSelectOption || child.type.isSelectOptGroup);
}
__name(isSelectOptionOrSelectOptGroup, "isSelectOptionOrSelectOptGroup");
const AutoComplete$1 = /* @__PURE__ */ __name((props, ref) => {
  var _a;
  const {
    prefixCls: customizePrefixCls,
    className,
    popupClassName,
    dropdownClassName,
    children,
    dataSource
  } = props, childNodes = toArray$1(children);
  let customizeInput;
  childNodes.length === 1 && /* @__PURE__ */ React.isValidElement(childNodes[0]) && !isSelectOptionOrSelectOptGroup(childNodes[0]) && ([customizeInput] = childNodes);
  const getInputElement = customizeInput ? () => customizeInput : void 0;
  let optionChildren;
  if (childNodes.length && isSelectOptionOrSelectOptGroup(childNodes[0]) ? optionChildren = children : optionChildren = dataSource ? dataSource.map((item) => {
    if (/* @__PURE__ */ React.isValidElement(item))
      return item;
    switch (typeof item) {
      case "string":
        return /* @__PURE__ */ React.createElement(Option, {
          key: item,
          value: item
        }, item);
      case "object": {
        const {
          value: optionValue
        } = item;
        return /* @__PURE__ */ React.createElement(Option, {
          key: optionValue,
          value: optionValue
        }, item.text);
      }
      default:
        return;
    }
  }) : [], process.env.NODE_ENV !== "production") {
    const warning2 = devUseWarning("AutoComplete");
    warning2.deprecated(!("dataSource" in props), "dataSource", "options"), process.env.NODE_ENV !== "production" && warning2(!customizeInput || !("size" in props), "usage", "You need to control style self instead of setting `size` when using customize input."), warning2.deprecated(!dropdownClassName, "dropdownClassName", "popupClassName");
  }
  const {
    getPrefixCls
  } = React.useContext(ConfigContext), prefixCls = getPrefixCls("select", customizePrefixCls), [zIndex] = useZIndex("SelectLike", (_a = props.dropdownStyle) === null || _a === void 0 ? void 0 : _a.zIndex);
  return /* @__PURE__ */ React.createElement(Select, Object.assign({
    ref,
    suffixIcon: null
  }, omit(props, ["dataSource", "dropdownClassName"]), {
    prefixCls,
    popupClassName: popupClassName || dropdownClassName,
    dropdownStyle: Object.assign(Object.assign({}, props.dropdownStyle), {
      zIndex
    }),
    className: cn(`${prefixCls}-auto-complete`, className),
    mode: Select.SECRET_COMBOBOX_MODE_DO_NOT_USE,
    // Internal api
    getInputElement
  }), optionChildren);
}, "AutoComplete$1"), RefAutoComplete = /* @__PURE__ */ React.forwardRef(AutoComplete$1), PurePanel$4 = genPurePanel(RefAutoComplete, void 0, void 0, (props) => omit(props, ["visible"]));
RefAutoComplete.Option = Option;
RefAutoComplete._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$4;
process.env.NODE_ENV !== "production" && (RefAutoComplete.displayName = "AutoComplete");
const BreadcrumbSeparator = /* @__PURE__ */ __name((_ref) => {
  let {
    children
  } = _ref;
  const {
    getPrefixCls
  } = React.useContext(ConfigContext), prefixCls = getPrefixCls("breadcrumb");
  return /* @__PURE__ */ React.createElement("li", {
    className: `${prefixCls}-separator`,
    "aria-hidden": "true"
  }, children === "" ? children : children || "/");
}, "BreadcrumbSeparator");
BreadcrumbSeparator.__ANT_BREADCRUMB_SEPARATOR = !0;
var __rest$g = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
function getBreadcrumbName(route, params) {
  if (route.title === void 0 || route.title === null)
    return null;
  const paramsKeys = Object.keys(params).join("|");
  return typeof route.title == "object" ? route.title : String(route.title).replace(new RegExp(`:(${paramsKeys})`, "g"), (replacement, key) => params[key] || replacement);
}
__name(getBreadcrumbName, "getBreadcrumbName");
function renderItem(prefixCls, item, children, href) {
  if (children == null)
    return null;
  const {
    className,
    onClick
  } = item, restItem = __rest$g(item, ["className", "onClick"]), passedProps = Object.assign(Object.assign({}, pickAttrs(restItem, {
    data: !0,
    aria: !0
  })), {
    onClick
  });
  return href !== void 0 ? /* @__PURE__ */ React.createElement("a", Object.assign({}, passedProps, {
    className: cn(`${prefixCls}-link`, className),
    href
  }), children) : /* @__PURE__ */ React.createElement("span", Object.assign({}, passedProps, {
    className: cn(`${prefixCls}-link`, className)
  }), children);
}
__name(renderItem, "renderItem");
function useItemRender(prefixCls, itemRender) {
  return /* @__PURE__ */ __name((item, params, routes, path, href) => {
    if (itemRender)
      return itemRender(item, params, routes, path);
    const name = getBreadcrumbName(item, params);
    return renderItem(prefixCls, item, name, href);
  }, "mergedItemRender");
}
__name(useItemRender, "useItemRender");
var __rest$f = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
const InternalBreadcrumbItem = /* @__PURE__ */ __name((props) => {
  const {
    prefixCls,
    separator = "/",
    children,
    menu: menu2,
    overlay,
    dropdownProps,
    href
  } = props;
  process.env.NODE_ENV !== "production" && devUseWarning("Breadcrumb.Item").deprecated(!("overlay" in props), "overlay", "menu");
  const link = (/* @__PURE__ */ __name((breadcrumbItem) => {
    if (menu2 || overlay) {
      const mergeDropDownProps = Object.assign({}, dropdownProps);
      if (menu2) {
        const _a = menu2 || {}, {
          items
        } = _a, menuProps = __rest$f(_a, ["items"]);
        mergeDropDownProps.menu = Object.assign(Object.assign({}, menuProps), {
          items: items == null ? void 0 : items.map((_a2, index) => {
            var {
              key,
              title,
              label: label2,
              path
            } = _a2, itemProps = __rest$f(_a2, ["key", "title", "label", "path"]);
            let mergedLabel = label2 ?? title;
            return path && (mergedLabel = /* @__PURE__ */ React.createElement("a", {
              href: `${href}${path}`
            }, mergedLabel)), Object.assign(Object.assign({}, itemProps), {
              key: key ?? index,
              label: mergedLabel
            });
          })
        });
      } else overlay && (mergeDropDownProps.overlay = overlay);
      return /* @__PURE__ */ React.createElement(Dropdown$1, Object.assign({
        placement: "bottom"
      }, mergeDropDownProps), /* @__PURE__ */ React.createElement("span", {
        className: `${prefixCls}-overlay-link`
      }, breadcrumbItem, /* @__PURE__ */ React.createElement(RefIcon$c, null)));
    }
    return breadcrumbItem;
  }, "renderBreadcrumbNode"))(children);
  return link != null ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", null, link), separator && /* @__PURE__ */ React.createElement(BreadcrumbSeparator, null, separator)) : null;
}, "InternalBreadcrumbItem"), BreadcrumbItem = /* @__PURE__ */ __name((props) => {
  const {
    prefixCls: customizePrefixCls,
    children,
    href
  } = props, restProps = __rest$f(props, ["prefixCls", "children", "href"]), {
    getPrefixCls
  } = React.useContext(ConfigContext), prefixCls = getPrefixCls("breadcrumb", customizePrefixCls);
  return /* @__PURE__ */ React.createElement(InternalBreadcrumbItem, Object.assign({}, restProps, {
    prefixCls
  }), renderItem(prefixCls, restProps, children, href));
}, "BreadcrumbItem");
BreadcrumbItem.__ANT_BREADCRUMB_ITEM = !0;
const genBreadcrumbStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    iconCls,
    calc
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      color: token.itemColor,
      fontSize: token.fontSize,
      [iconCls]: {
        fontSize: token.iconFontSize
      },
      ol: {
        display: "flex",
        flexWrap: "wrap",
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      a: Object.assign({
        color: token.linkColor,
        transition: `color ${token.motionDurationMid}`,
        padding: `0 ${unit(token.paddingXXS)}`,
        borderRadius: token.borderRadiusSM,
        height: token.fontHeight,
        display: "inline-block",
        marginInline: calc(token.marginXXS).mul(-1).equal(),
        "&:hover": {
          color: token.linkHoverColor,
          backgroundColor: token.colorBgTextHover
        }
      }, genFocusStyle(token)),
      "li:last-child": {
        color: token.lastItemColor
      },
      [`${componentCls}-separator`]: {
        marginInline: token.separatorMargin,
        color: token.separatorColor
      },
      [`${componentCls}-link`]: {
        [`
          > ${iconCls} + span,
          > ${iconCls} + a
        `]: {
          marginInlineStart: token.marginXXS
        }
      },
      [`${componentCls}-overlay-link`]: {
        borderRadius: token.borderRadiusSM,
        height: token.fontHeight,
        display: "inline-block",
        padding: `0 ${unit(token.paddingXXS)}`,
        marginInline: calc(token.marginXXS).mul(-1).equal(),
        [`> ${iconCls}`]: {
          marginInlineStart: token.marginXXS,
          fontSize: token.fontSizeIcon
        },
        "&:hover": {
          color: token.linkHoverColor,
          backgroundColor: token.colorBgTextHover,
          a: {
            color: token.linkHoverColor
          }
        },
        a: {
          "&:hover": {
            backgroundColor: "transparent"
          }
        }
      },
      // rtl style
      [`&${token.componentCls}-rtl`]: {
        direction: "rtl"
      }
    })
  };
}, "genBreadcrumbStyle"), prepareComponentToken$9 = /* @__PURE__ */ __name((token) => ({
  itemColor: token.colorTextDescription,
  lastItemColor: token.colorText,
  iconFontSize: token.fontSize,
  linkColor: token.colorTextDescription,
  linkHoverColor: token.colorText,
  separatorColor: token.colorTextDescription,
  separatorMargin: token.marginXS
}), "prepareComponentToken$9"), useStyle$9 = genStyleHooks("Breadcrumb", (token) => {
  const breadcrumbToken = merge(token, {});
  return genBreadcrumbStyle(breadcrumbToken);
}, prepareComponentToken$9);
var __rest$e = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
function route2item(route) {
  const {
    breadcrumbName,
    children
  } = route, rest = __rest$e(route, ["breadcrumbName", "children"]), clone = Object.assign({
    title: breadcrumbName
  }, rest);
  return children && (clone.menu = {
    items: children.map((_a) => {
      var {
        breadcrumbName: itemBreadcrumbName
      } = _a, itemProps = __rest$e(_a, ["breadcrumbName"]);
      return Object.assign(Object.assign({}, itemProps), {
        title: itemBreadcrumbName
      });
    })
  }), clone;
}
__name(route2item, "route2item");
function useItems(items, routes) {
  return useMemo(() => items || (routes ? routes.map(route2item) : null), [items, routes]);
}
__name(useItems, "useItems");
var __rest$d = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
const getPath = /* @__PURE__ */ __name((params, path) => {
  if (path === void 0)
    return path;
  let mergedPath = (path || "").replace(/^\//, "");
  return Object.keys(params).forEach((key) => {
    mergedPath = mergedPath.replace(`:${key}`, params[key]);
  }), mergedPath;
}, "getPath"), Breadcrumb = /* @__PURE__ */ __name((props) => {
  const {
    prefixCls: customizePrefixCls,
    separator = "/",
    style,
    className,
    rootClassName,
    routes: legacyRoutes,
    items,
    children,
    itemRender,
    params = {}
  } = props, restProps = __rest$d(props, ["prefixCls", "separator", "style", "className", "rootClassName", "routes", "items", "children", "itemRender", "params"]), {
    getPrefixCls,
    direction,
    breadcrumb
  } = React.useContext(ConfigContext);
  let crumbs;
  const prefixCls = getPrefixCls("breadcrumb", customizePrefixCls), [wrapCSSVar, hashId, cssVarCls] = useStyle$9(prefixCls), mergedItems = useItems(items, legacyRoutes);
  if (process.env.NODE_ENV !== "production") {
    const warning2 = devUseWarning("Breadcrumb");
    if (warning2.deprecated(!legacyRoutes, "routes", "items"), !mergedItems || mergedItems.length === 0) {
      const childList = toArray$1(children);
      warning2.deprecated(childList.length === 0, "Breadcrumb.Item and Breadcrumb.Separator", "items"), childList.forEach((element) => {
        element && process.env.NODE_ENV !== "production" && warning2(element.type && (element.type.__ANT_BREADCRUMB_ITEM === !0 || element.type.__ANT_BREADCRUMB_SEPARATOR === !0), "usage", "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children");
      });
    }
  }
  const mergedItemRender = useItemRender(prefixCls, itemRender);
  if (mergedItems && mergedItems.length > 0) {
    const paths = [], itemRenderRoutes = items || legacyRoutes;
    crumbs = mergedItems.map((item, index) => {
      const {
        path,
        key,
        type,
        menu: menu2,
        overlay,
        onClick,
        className: itemClassName,
        separator: itemSeparator,
        dropdownProps
      } = item, mergedPath = getPath(params, path);
      mergedPath !== void 0 && paths.push(mergedPath);
      const mergedKey = key ?? index;
      if (type === "separator")
        return /* @__PURE__ */ React.createElement(BreadcrumbSeparator, {
          key: mergedKey
        }, itemSeparator);
      const itemProps = {}, isLastItem = index === mergedItems.length - 1;
      menu2 ? itemProps.menu = menu2 : overlay && (itemProps.overlay = overlay);
      let {
        href
      } = item;
      return paths.length && mergedPath !== void 0 && (href = `#/${paths.join("/")}`), /* @__PURE__ */ React.createElement(InternalBreadcrumbItem, Object.assign({
        key: mergedKey
      }, itemProps, pickAttrs(item, {
        data: !0,
        aria: !0
      }), {
        className: itemClassName,
        dropdownProps,
        href,
        separator: isLastItem ? "" : separator,
        onClick,
        prefixCls
      }), mergedItemRender(item, params, itemRenderRoutes, paths, href));
    });
  } else if (children) {
    const childrenLength = toArray$1(children).length;
    crumbs = toArray$1(children).map((element, index) => {
      if (!element)
        return element;
      const isLastItem = index === childrenLength - 1;
      return cloneElement(element, {
        separator: isLastItem ? "" : separator,
        // eslint-disable-next-line react/no-array-index-key
        key: index
      });
    });
  }
  const breadcrumbClassName = cn(prefixCls, breadcrumb == null ? void 0 : breadcrumb.className, {
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, className, rootClassName, hashId, cssVarCls), mergedStyle = Object.assign(Object.assign({}, breadcrumb == null ? void 0 : breadcrumb.style), style);
  return wrapCSSVar(/* @__PURE__ */ React.createElement("nav", Object.assign({
    className: breadcrumbClassName,
    style: mergedStyle
  }, restProps), /* @__PURE__ */ React.createElement("ol", null, crumbs)));
}, "Breadcrumb");
Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Separator = BreadcrumbSeparator;
process.env.NODE_ENV !== "production" && (Breadcrumb.displayName = "Breadcrumb");
const genSharedDividerStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    sizePaddingEdgeHorizontal,
    colorSplit,
    lineWidth,
    textPaddingInline,
    orientationMargin,
    verticalMarginInline
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      borderBlockStart: `${unit(lineWidth)} solid ${colorSplit}`,
      // vertical
      "&-vertical": {
        position: "relative",
        top: "-0.06em",
        display: "inline-block",
        height: "0.9em",
        marginInline: verticalMarginInline,
        marginBlock: 0,
        verticalAlign: "middle",
        borderTop: 0,
        borderInlineStart: `${unit(lineWidth)} solid ${colorSplit}`
      },
      "&-horizontal": {
        display: "flex",
        clear: "both",
        width: "100%",
        minWidth: "100%",
        // Fix https://github.com/ant-design/ant-design/issues/10914
        margin: `${unit(token.dividerHorizontalGutterMargin)} 0`
      },
      [`&-horizontal${componentCls}-with-text`]: {
        display: "flex",
        alignItems: "center",
        margin: `${unit(token.dividerHorizontalWithTextGutterMargin)} 0`,
        color: token.colorTextHeading,
        fontWeight: 500,
        fontSize: token.fontSizeLG,
        whiteSpace: "nowrap",
        textAlign: "center",
        borderBlockStart: `0 ${colorSplit}`,
        "&::before, &::after": {
          position: "relative",
          width: "50%",
          borderBlockStart: `${unit(lineWidth)} solid transparent`,
          // Chrome not accept `inherit` in `border-top`
          borderBlockStartColor: "inherit",
          borderBlockEnd: 0,
          transform: "translateY(50%)",
          content: "''"
        }
      },
      [`&-horizontal${componentCls}-with-text-left`]: {
        "&::before": {
          width: `calc(${orientationMargin} * 100%)`
        },
        "&::after": {
          width: `calc(100% - ${orientationMargin} * 100%)`
        }
      },
      [`&-horizontal${componentCls}-with-text-right`]: {
        "&::before": {
          width: `calc(100% - ${orientationMargin} * 100%)`
        },
        "&::after": {
          width: `calc(${orientationMargin} * 100%)`
        }
      },
      [`${componentCls}-inner-text`]: {
        display: "inline-block",
        paddingBlock: 0,
        paddingInline: textPaddingInline
      },
      "&-dashed": {
        background: "none",
        borderColor: colorSplit,
        borderStyle: "dashed",
        borderWidth: `${unit(lineWidth)} 0 0`
      },
      [`&-horizontal${componentCls}-with-text${componentCls}-dashed`]: {
        "&::before, &::after": {
          borderStyle: "dashed none none"
        }
      },
      [`&-vertical${componentCls}-dashed`]: {
        borderInlineStartWidth: lineWidth,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      "&-dotted": {
        background: "none",
        borderColor: colorSplit,
        borderStyle: "dotted",
        borderWidth: `${unit(lineWidth)} 0 0`
      },
      [`&-horizontal${componentCls}-with-text${componentCls}-dotted`]: {
        "&::before, &::after": {
          borderStyle: "dotted none none"
        }
      },
      [`&-vertical${componentCls}-dotted`]: {
        borderInlineStartWidth: lineWidth,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      [`&-plain${componentCls}-with-text`]: {
        color: token.colorText,
        fontWeight: "normal",
        fontSize: token.fontSize
      },
      [`&-horizontal${componentCls}-with-text-left${componentCls}-no-default-orientation-margin-left`]: {
        "&::before": {
          width: 0
        },
        "&::after": {
          width: "100%"
        },
        [`${componentCls}-inner-text`]: {
          paddingInlineStart: sizePaddingEdgeHorizontal
        }
      },
      [`&-horizontal${componentCls}-with-text-right${componentCls}-no-default-orientation-margin-right`]: {
        "&::before": {
          width: "100%"
        },
        "&::after": {
          width: 0
        },
        [`${componentCls}-inner-text`]: {
          paddingInlineEnd: sizePaddingEdgeHorizontal
        }
      }
    })
  };
}, "genSharedDividerStyle"), prepareComponentToken$8 = /* @__PURE__ */ __name((token) => ({
  textPaddingInline: "1em",
  orientationMargin: 0.05,
  verticalMarginInline: token.marginXS
}), "prepareComponentToken$8"), useStyle$8 = genStyleHooks("Divider", (token) => {
  const dividerToken = merge(token, {
    dividerHorizontalWithTextGutterMargin: token.margin,
    dividerHorizontalGutterMargin: token.marginLG,
    sizePaddingEdgeHorizontal: 0
  });
  return [genSharedDividerStyle(dividerToken)];
}, prepareComponentToken$8, {
  unitless: {
    orientationMargin: !0
  }
});
var __rest$c = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
const Divider$1 = /* @__PURE__ */ __name((props) => {
  const {
    getPrefixCls,
    direction,
    divider
  } = React.useContext(ConfigContext), {
    prefixCls: customizePrefixCls,
    type = "horizontal",
    orientation = "center",
    orientationMargin,
    className,
    rootClassName,
    children,
    dashed,
    variant = "solid",
    plain,
    style
  } = props, restProps = __rest$c(props, ["prefixCls", "type", "orientation", "orientationMargin", "className", "rootClassName", "children", "dashed", "variant", "plain", "style"]), prefixCls = getPrefixCls("divider", customizePrefixCls), [wrapCSSVar, hashId, cssVarCls] = useStyle$8(prefixCls), hasChildren = !!children, hasCustomMarginLeft = orientation === "left" && orientationMargin != null, hasCustomMarginRight = orientation === "right" && orientationMargin != null, classString = cn(prefixCls, divider == null ? void 0 : divider.className, hashId, cssVarCls, `${prefixCls}-${type}`, {
    [`${prefixCls}-with-text`]: hasChildren,
    [`${prefixCls}-with-text-${orientation}`]: hasChildren,
    [`${prefixCls}-dashed`]: !!dashed,
    [`${prefixCls}-${variant}`]: variant !== "solid",
    [`${prefixCls}-plain`]: !!plain,
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-no-default-orientation-margin-left`]: hasCustomMarginLeft,
    [`${prefixCls}-no-default-orientation-margin-right`]: hasCustomMarginRight
  }, className, rootClassName), memoizedOrientationMargin = React.useMemo(() => typeof orientationMargin == "number" ? orientationMargin : /^\d+$/.test(orientationMargin) ? Number(orientationMargin) : orientationMargin, [orientationMargin]), innerStyle = Object.assign(Object.assign({}, hasCustomMarginLeft && {
    marginLeft: memoizedOrientationMargin
  }), hasCustomMarginRight && {
    marginRight: memoizedOrientationMargin
  });
  if (process.env.NODE_ENV !== "production") {
    const warning2 = devUseWarning("Divider");
    process.env.NODE_ENV !== "production" && warning2(!children || type !== "vertical", "usage", "`children` not working in `vertical` mode.");
  }
  return wrapCSSVar(/* @__PURE__ */ React.createElement("div", Object.assign({
    className: classString,
    style: Object.assign(Object.assign({}, divider == null ? void 0 : divider.style), style)
  }, restProps, {
    role: "separator"
  }), children && type !== "vertical" && /* @__PURE__ */ React.createElement("span", {
    className: `${prefixCls}-inner-text`,
    style: innerStyle
  }, children)));
}, "Divider$1");
process.env.NODE_ENV !== "production" && (Divider$1.displayName = "Divider");
var DrawerContext = /* @__PURE__ */ React.createContext(null), RefContext = /* @__PURE__ */ React.createContext({}), _excluded$8 = ["prefixCls", "className", "containerRef"], DrawerPanel$1 = /* @__PURE__ */ __name(function(props) {
  var prefixCls = props.prefixCls, className = props.className, containerRef = props.containerRef, restProps = _objectWithoutProperties(props, _excluded$8), _React$useContext = React.useContext(RefContext), panelRef = _React$useContext.panel, mergedRef = useComposeRef(panelRef, containerRef);
  return /* @__PURE__ */ React.createElement("div", _extends({
    className: cn("".concat(prefixCls, "-content"), className),
    role: "dialog",
    ref: mergedRef
  }, pickAttrs(props, {
    aria: !0
  }), {
    "aria-modal": "true"
  }, restProps));
}, "DrawerPanel");
process.env.NODE_ENV !== "production" && (DrawerPanel$1.displayName = "DrawerPanel");
function parseWidthHeight(value) {
  return typeof value == "string" && String(Number(value)) === value ? (warningOnce(!1, "Invalid value type of `width` or `height` which should be number type instead."), Number(value)) : value;
}
__name(parseWidthHeight, "parseWidthHeight");
function warnCheck(props) {
  warningOnce(!("wrapperClassName" in props), "'wrapperClassName' is removed. Please use 'rootClassName' instead."), warningOnce(canUseDom() || !props.open, "Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.");
}
__name(warnCheck, "warnCheck");
var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none",
  position: "absolute"
};
function DrawerPopup(props, ref) {
  var _ref, _pushConfig$distance, _pushConfig, prefixCls = props.prefixCls, open2 = props.open, placement = props.placement, inline = props.inline, push2 = props.push, forceRender = props.forceRender, autoFocus = props.autoFocus, keyboard = props.keyboard, drawerClassNames = props.classNames, rootClassName = props.rootClassName, rootStyle = props.rootStyle, zIndex = props.zIndex, className = props.className, id = props.id, style = props.style, motion = props.motion, width = props.width, height = props.height, children = props.children, mask2 = props.mask, maskClosable = props.maskClosable, maskMotion = props.maskMotion, maskClassName = props.maskClassName, maskStyle = props.maskStyle, afterOpenChange = props.afterOpenChange, onClose = props.onClose, onMouseEnter = props.onMouseEnter, onMouseOver = props.onMouseOver, onMouseLeave = props.onMouseLeave, onClick = props.onClick, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, styles2 = props.styles, drawerRender = props.drawerRender, panelRef = React.useRef(), sentinelStartRef = React.useRef(), sentinelEndRef = React.useRef();
  React.useImperativeHandle(ref, function() {
    return panelRef.current;
  });
  var onPanelKeyDown = /* @__PURE__ */ __name(function(event) {
    var keyCode = event.keyCode, shiftKey = event.shiftKey;
    switch (keyCode) {
      case KeyCode.TAB: {
        if (keyCode === KeyCode.TAB) {
          if (!shiftKey && document.activeElement === sentinelEndRef.current) {
            var _sentinelStartRef$cur;
            (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 || _sentinelStartRef$cur.focus({
              preventScroll: !0
            });
          } else if (shiftKey && document.activeElement === sentinelStartRef.current) {
            var _sentinelEndRef$curre;
            (_sentinelEndRef$curre = sentinelEndRef.current) === null || _sentinelEndRef$curre === void 0 || _sentinelEndRef$curre.focus({
              preventScroll: !0
            });
          }
        }
        break;
      }
      case KeyCode.ESC: {
        onClose && keyboard && (event.stopPropagation(), onClose(event));
        break;
      }
    }
  }, "onPanelKeyDown");
  React.useEffect(function() {
    if (open2 && autoFocus) {
      var _panelRef$current;
      (_panelRef$current = panelRef.current) === null || _panelRef$current === void 0 || _panelRef$current.focus({
        preventScroll: !0
      });
    }
  }, [open2]);
  var _React$useState = React.useState(!1), _React$useState2 = _slicedToArray(_React$useState, 2), pushed = _React$useState2[0], setPushed = _React$useState2[1], parentContext = React.useContext(DrawerContext), pushConfig;
  typeof push2 == "boolean" ? pushConfig = push2 ? {} : {
    distance: 0
  } : pushConfig = push2 || {};
  var pushDistance = (_ref = (_pushConfig$distance = (_pushConfig = pushConfig) === null || _pushConfig === void 0 ? void 0 : _pushConfig.distance) !== null && _pushConfig$distance !== void 0 ? _pushConfig$distance : parentContext == null ? void 0 : parentContext.pushDistance) !== null && _ref !== void 0 ? _ref : 180, mergedContext = React.useMemo(function() {
    return {
      pushDistance,
      push: /* @__PURE__ */ __name(function() {
        setPushed(!0);
      }, "push"),
      pull: /* @__PURE__ */ __name(function() {
        setPushed(!1);
      }, "pull")
    };
  }, [pushDistance]);
  React.useEffect(function() {
    if (open2) {
      var _parentContext$push;
      parentContext == null || (_parentContext$push = parentContext.push) === null || _parentContext$push === void 0 || _parentContext$push.call(parentContext);
    } else {
      var _parentContext$pull;
      parentContext == null || (_parentContext$pull = parentContext.pull) === null || _parentContext$pull === void 0 || _parentContext$pull.call(parentContext);
    }
  }, [open2]), React.useEffect(function() {
    return function() {
      var _parentContext$pull2;
      parentContext == null || (_parentContext$pull2 = parentContext.pull) === null || _parentContext$pull2 === void 0 || _parentContext$pull2.call(parentContext);
    };
  }, []);
  var maskNode = mask2 && /* @__PURE__ */ React.createElement(CSSMotion, _extends({
    key: "mask"
  }, maskMotion, {
    visible: open2
  }), function(_ref2, maskRef) {
    var motionMaskClassName = _ref2.className, motionMaskStyle = _ref2.style;
    return /* @__PURE__ */ React.createElement("div", {
      className: cn("".concat(prefixCls, "-mask"), motionMaskClassName, drawerClassNames == null ? void 0 : drawerClassNames.mask, maskClassName),
      style: _objectSpread2(_objectSpread2(_objectSpread2({}, motionMaskStyle), maskStyle), styles2 == null ? void 0 : styles2.mask),
      onClick: maskClosable && open2 ? onClose : void 0,
      ref: maskRef
    });
  }), motionProps = typeof motion == "function" ? motion(placement) : motion, wrapperStyle = {};
  if (pushed && pushDistance)
    switch (placement) {
      case "top":
        wrapperStyle.transform = "translateY(".concat(pushDistance, "px)");
        break;
      case "bottom":
        wrapperStyle.transform = "translateY(".concat(-pushDistance, "px)");
        break;
      case "left":
        wrapperStyle.transform = "translateX(".concat(pushDistance, "px)");
        break;
      default:
        wrapperStyle.transform = "translateX(".concat(-pushDistance, "px)");
        break;
    }
  placement === "left" || placement === "right" ? wrapperStyle.width = parseWidthHeight(width) : wrapperStyle.height = parseWidthHeight(height);
  var eventHandlers = {
    onMouseEnter,
    onMouseOver,
    onMouseLeave,
    onClick,
    onKeyDown,
    onKeyUp
  }, panelNode = /* @__PURE__ */ React.createElement(CSSMotion, _extends({
    key: "panel"
  }, motionProps, {
    visible: open2,
    forceRender,
    onVisibleChanged: /* @__PURE__ */ __name(function(nextVisible) {
      afterOpenChange == null || afterOpenChange(nextVisible);
    }, "onVisibleChanged"),
    removeOnLeave: !1,
    leavedClassName: "".concat(prefixCls, "-content-wrapper-hidden")
  }), function(_ref3, motionRef) {
    var motionClassName = _ref3.className, motionStyle = _ref3.style, content = /* @__PURE__ */ React.createElement(DrawerPanel$1, _extends({
      id,
      containerRef: motionRef,
      prefixCls,
      className: cn(className, drawerClassNames == null ? void 0 : drawerClassNames.content),
      style: _objectSpread2(_objectSpread2({}, style), styles2 == null ? void 0 : styles2.content)
    }, pickAttrs(props, {
      aria: !0
    }), eventHandlers), children);
    return /* @__PURE__ */ React.createElement("div", _extends({
      className: cn("".concat(prefixCls, "-content-wrapper"), drawerClassNames == null ? void 0 : drawerClassNames.wrapper, motionClassName),
      style: _objectSpread2(_objectSpread2(_objectSpread2({}, wrapperStyle), motionStyle), styles2 == null ? void 0 : styles2.wrapper)
    }, pickAttrs(props, {
      data: !0
    })), drawerRender ? drawerRender(content) : content);
  }), containerStyle = _objectSpread2({}, rootStyle);
  return zIndex && (containerStyle.zIndex = zIndex), /* @__PURE__ */ React.createElement(DrawerContext.Provider, {
    value: mergedContext
  }, /* @__PURE__ */ React.createElement("div", {
    className: cn(prefixCls, "".concat(prefixCls, "-").concat(placement), rootClassName, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-open"), open2), "".concat(prefixCls, "-inline"), inline)),
    style: containerStyle,
    tabIndex: -1,
    ref: panelRef,
    onKeyDown: onPanelKeyDown
  }, maskNode, /* @__PURE__ */ React.createElement("div", {
    tabIndex: 0,
    ref: sentinelStartRef,
    style: sentinelStyle,
    "aria-hidden": "true",
    "data-sentinel": "start"
  }), panelNode, /* @__PURE__ */ React.createElement("div", {
    tabIndex: 0,
    ref: sentinelEndRef,
    style: sentinelStyle,
    "aria-hidden": "true",
    "data-sentinel": "end"
  })));
}
__name(DrawerPopup, "DrawerPopup");
var RefDrawerPopup = /* @__PURE__ */ React.forwardRef(DrawerPopup);
process.env.NODE_ENV !== "production" && (RefDrawerPopup.displayName = "DrawerPopup");
var Drawer$2 = /* @__PURE__ */ __name(function(props) {
  var _props$open = props.open, open2 = _props$open === void 0 ? !1 : _props$open, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-drawer" : _props$prefixCls, _props$placement = props.placement, placement = _props$placement === void 0 ? "right" : _props$placement, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? !0 : _props$autoFocus, _props$keyboard = props.keyboard, keyboard = _props$keyboard === void 0 ? !0 : _props$keyboard, _props$width = props.width, width = _props$width === void 0 ? 378 : _props$width, _props$mask = props.mask, mask2 = _props$mask === void 0 ? !0 : _props$mask, _props$maskClosable = props.maskClosable, maskClosable = _props$maskClosable === void 0 ? !0 : _props$maskClosable, getContainer = props.getContainer, forceRender = props.forceRender, afterOpenChange = props.afterOpenChange, destroyOnClose = props.destroyOnClose, onMouseEnter = props.onMouseEnter, onMouseOver = props.onMouseOver, onMouseLeave = props.onMouseLeave, onClick = props.onClick, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, panelRef = props.panelRef, _React$useState = React.useState(!1), _React$useState2 = _slicedToArray(_React$useState, 2), animatedVisible = _React$useState2[0], setAnimatedVisible = _React$useState2[1];
  process.env.NODE_ENV !== "production" && warnCheck(props);
  var _React$useState3 = React.useState(!1), _React$useState4 = _slicedToArray(_React$useState3, 2), mounted = _React$useState4[0], setMounted = _React$useState4[1];
  useLayoutEffect(function() {
    setMounted(!0);
  }, []);
  var mergedOpen = mounted ? open2 : !1, popupRef = React.useRef(), lastActiveRef = React.useRef();
  useLayoutEffect(function() {
    mergedOpen && (lastActiveRef.current = document.activeElement);
  }, [mergedOpen]);
  var internalAfterOpenChange = /* @__PURE__ */ __name(function(nextVisible) {
    var _popupRef$current;
    if (setAnimatedVisible(nextVisible), afterOpenChange == null || afterOpenChange(nextVisible), !nextVisible && lastActiveRef.current && !((_popupRef$current = popupRef.current) !== null && _popupRef$current !== void 0 && _popupRef$current.contains(lastActiveRef.current))) {
      var _lastActiveRef$curren;
      (_lastActiveRef$curren = lastActiveRef.current) === null || _lastActiveRef$curren === void 0 || _lastActiveRef$curren.focus({
        preventScroll: !0
      });
    }
  }, "internalAfterOpenChange"), refContext = React.useMemo(function() {
    return {
      panel: panelRef
    };
  }, [panelRef]);
  if (!forceRender && !animatedVisible && !mergedOpen && destroyOnClose)
    return null;
  var eventHandlers = {
    onMouseEnter,
    onMouseOver,
    onMouseLeave,
    onClick,
    onKeyDown,
    onKeyUp
  }, drawerPopupProps = _objectSpread2(_objectSpread2({}, props), {}, {
    open: mergedOpen,
    prefixCls,
    placement,
    autoFocus,
    keyboard,
    width,
    mask: mask2,
    maskClosable,
    inline: getContainer === !1,
    afterOpenChange: internalAfterOpenChange,
    ref: popupRef
  }, eventHandlers);
  return /* @__PURE__ */ React.createElement(RefContext.Provider, {
    value: refContext
  }, /* @__PURE__ */ React.createElement(Portal, {
    open: mergedOpen || forceRender || animatedVisible,
    autoDestroy: !1,
    getContainer,
    autoLock: mask2 && (mergedOpen || animatedVisible)
  }, /* @__PURE__ */ React.createElement(RefDrawerPopup, drawerPopupProps)));
}, "Drawer");
process.env.NODE_ENV !== "production" && (Drawer$2.displayName = "Drawer");
const DrawerPanel2 = /* @__PURE__ */ __name((props) => {
  var _a, _b;
  const {
    prefixCls,
    title,
    footer,
    extra,
    loading,
    onClose,
    headerStyle,
    bodyStyle,
    footerStyle,
    children,
    classNames: drawerClassNames,
    styles: drawerStyles
  } = props, {
    drawer: drawerContext
  } = React.useContext(ConfigContext), customCloseIconRender = React.useCallback((icon2) => /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    className: `${prefixCls}-close`
  }, icon2), [onClose]), [mergedClosable, mergedCloseIcon] = useClosable(pickClosable(props), pickClosable(drawerContext), {
    closable: !0,
    closeIconRender: customCloseIconRender
  }), headerNode = React.useMemo(() => {
    var _a2, _b2;
    return !title && !mergedClosable ? null : /* @__PURE__ */ React.createElement("div", {
      style: Object.assign(Object.assign(Object.assign({}, (_a2 = drawerContext == null ? void 0 : drawerContext.styles) === null || _a2 === void 0 ? void 0 : _a2.header), headerStyle), drawerStyles == null ? void 0 : drawerStyles.header),
      className: cn(`${prefixCls}-header`, {
        [`${prefixCls}-header-close-only`]: mergedClosable && !title && !extra
      }, (_b2 = drawerContext == null ? void 0 : drawerContext.classNames) === null || _b2 === void 0 ? void 0 : _b2.header, drawerClassNames == null ? void 0 : drawerClassNames.header)
    }, /* @__PURE__ */ React.createElement("div", {
      className: `${prefixCls}-header-title`
    }, mergedCloseIcon, title && /* @__PURE__ */ React.createElement("div", {
      className: `${prefixCls}-title`
    }, title)), extra && /* @__PURE__ */ React.createElement("div", {
      className: `${prefixCls}-extra`
    }, extra));
  }, [mergedClosable, mergedCloseIcon, extra, headerStyle, prefixCls, title]), footerNode = React.useMemo(() => {
    var _a2, _b2;
    if (!footer)
      return null;
    const footerClassName = `${prefixCls}-footer`;
    return /* @__PURE__ */ React.createElement("div", {
      className: cn(footerClassName, (_a2 = drawerContext == null ? void 0 : drawerContext.classNames) === null || _a2 === void 0 ? void 0 : _a2.footer, drawerClassNames == null ? void 0 : drawerClassNames.footer),
      style: Object.assign(Object.assign(Object.assign({}, (_b2 = drawerContext == null ? void 0 : drawerContext.styles) === null || _b2 === void 0 ? void 0 : _b2.footer), footerStyle), drawerStyles == null ? void 0 : drawerStyles.footer)
    }, footer);
  }, [footer, footerStyle, prefixCls]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, headerNode, /* @__PURE__ */ React.createElement("div", {
    className: cn(`${prefixCls}-body`, drawerClassNames == null ? void 0 : drawerClassNames.body, (_a = drawerContext == null ? void 0 : drawerContext.classNames) === null || _a === void 0 ? void 0 : _a.body),
    style: Object.assign(Object.assign(Object.assign({}, (_b = drawerContext == null ? void 0 : drawerContext.styles) === null || _b === void 0 ? void 0 : _b.body), bodyStyle), drawerStyles == null ? void 0 : drawerStyles.body)
  }, loading ? /* @__PURE__ */ React.createElement(Skeleton$1, {
    active: !0,
    title: !1,
    paragraph: {
      rows: 5
    },
    className: `${prefixCls}-body-skeleton`
  }) : children), footerNode);
}, "DrawerPanel"), getMoveTranslate = /* @__PURE__ */ __name((direction) => {
  const value = "100%";
  return {
    left: `translateX(-${value})`,
    right: `translateX(${value})`,
    top: `translateY(-${value})`,
    bottom: `translateY(${value})`
  }[direction];
}, "getMoveTranslate"), getEnterLeaveStyle = /* @__PURE__ */ __name((startStyle, endStyle) => ({
  "&-enter, &-appear": Object.assign(Object.assign({}, startStyle), {
    "&-active": endStyle
  }),
  "&-leave": Object.assign(Object.assign({}, endStyle), {
    "&-active": startStyle
  })
}), "getEnterLeaveStyle"), getFadeStyle = /* @__PURE__ */ __name((from2, duration) => Object.assign({
  "&-enter, &-appear, &-leave": {
    "&-start": {
      transition: "none"
    },
    "&-active": {
      transition: `all ${duration}`
    }
  }
}, getEnterLeaveStyle({
  opacity: from2
}, {
  opacity: 1
})), "getFadeStyle"), getPanelMotionStyles = /* @__PURE__ */ __name((direction, duration) => [getFadeStyle(0.7, duration), getEnterLeaveStyle({
  transform: getMoveTranslate(direction)
}, {
  transform: "none"
})], "getPanelMotionStyles"), genMotionStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    motionDurationSlow
  } = token;
  return {
    [componentCls]: {
      // ======================== Mask ========================
      [`${componentCls}-mask-motion`]: getFadeStyle(0, motionDurationSlow),
      // ======================= Panel ========================
      [`${componentCls}-panel-motion`]: ["left", "right", "top", "bottom"].reduce((obj, direction) => Object.assign(Object.assign({}, obj), {
        [`&-${direction}`]: getPanelMotionStyles(direction, motionDurationSlow)
      }), {})
    }
  };
}, "genMotionStyle"), genDrawerStyle = /* @__PURE__ */ __name((token) => {
  const {
    borderRadiusSM,
    componentCls,
    zIndexPopup,
    colorBgMask,
    colorBgElevated,
    motionDurationSlow,
    motionDurationMid,
    paddingXS,
    padding,
    paddingLG,
    fontSizeLG,
    lineHeightLG,
    lineWidth,
    lineType,
    colorSplit,
    marginXS,
    colorIcon,
    colorIconHover,
    colorBgTextHover,
    colorBgTextActive,
    colorText,
    fontWeightStrong,
    footerPaddingBlock,
    footerPaddingInline,
    calc
  } = token, wrapperCls = `${componentCls}-content-wrapper`;
  return {
    [componentCls]: {
      position: "fixed",
      inset: 0,
      zIndex: zIndexPopup,
      pointerEvents: "none",
      color: colorText,
      "&-pure": {
        position: "relative",
        background: colorBgElevated,
        display: "flex",
        flexDirection: "column",
        [`&${componentCls}-left`]: {
          boxShadow: token.boxShadowDrawerLeft
        },
        [`&${componentCls}-right`]: {
          boxShadow: token.boxShadowDrawerRight
        },
        [`&${componentCls}-top`]: {
          boxShadow: token.boxShadowDrawerUp
        },
        [`&${componentCls}-bottom`]: {
          boxShadow: token.boxShadowDrawerDown
        }
      },
      "&-inline": {
        position: "absolute"
      },
      // ====================== Mask ======================
      [`${componentCls}-mask`]: {
        position: "absolute",
        inset: 0,
        zIndex: zIndexPopup,
        background: colorBgMask,
        pointerEvents: "auto"
      },
      // ==================== Content =====================
      [wrapperCls]: {
        position: "absolute",
        zIndex: zIndexPopup,
        maxWidth: "100vw",
        transition: `all ${motionDurationSlow}`,
        "&-hidden": {
          display: "none"
        }
      },
      // Placement
      [`&-left > ${wrapperCls}`]: {
        top: 0,
        bottom: 0,
        left: {
          _skip_check_: !0,
          value: 0
        },
        boxShadow: token.boxShadowDrawerLeft
      },
      [`&-right > ${wrapperCls}`]: {
        top: 0,
        right: {
          _skip_check_: !0,
          value: 0
        },
        bottom: 0,
        boxShadow: token.boxShadowDrawerRight
      },
      [`&-top > ${wrapperCls}`]: {
        top: 0,
        insetInline: 0,
        boxShadow: token.boxShadowDrawerUp
      },
      [`&-bottom > ${wrapperCls}`]: {
        bottom: 0,
        insetInline: 0,
        boxShadow: token.boxShadowDrawerDown
      },
      [`${componentCls}-content`]: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        overflow: "auto",
        background: colorBgElevated,
        pointerEvents: "auto"
      },
      // Header
      [`${componentCls}-header`]: {
        display: "flex",
        flex: 0,
        alignItems: "center",
        padding: `${unit(padding)} ${unit(paddingLG)}`,
        fontSize: fontSizeLG,
        lineHeight: lineHeightLG,
        borderBottom: `${unit(lineWidth)} ${lineType} ${colorSplit}`,
        "&-title": {
          display: "flex",
          flex: 1,
          alignItems: "center",
          minWidth: 0,
          minHeight: 0
        }
      },
      [`${componentCls}-extra`]: {
        flex: "none"
      },
      [`${componentCls}-close`]: Object.assign({
        display: "inline-flex",
        width: calc(fontSizeLG).add(paddingXS).equal(),
        height: calc(fontSizeLG).add(paddingXS).equal(),
        borderRadius: borderRadiusSM,
        justifyContent: "center",
        alignItems: "center",
        marginInlineEnd: marginXS,
        color: colorIcon,
        fontWeight: fontWeightStrong,
        fontSize: fontSizeLG,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        textDecoration: "none",
        background: "transparent",
        border: 0,
        cursor: "pointer",
        transition: `all ${motionDurationMid}`,
        textRendering: "auto",
        "&:hover": {
          color: colorIconHover,
          backgroundColor: colorBgTextHover,
          textDecoration: "none"
        },
        "&:active": {
          backgroundColor: colorBgTextActive
        }
      }, genFocusStyle(token)),
      [`${componentCls}-title`]: {
        flex: 1,
        margin: 0,
        fontWeight: token.fontWeightStrong,
        fontSize: fontSizeLG,
        lineHeight: lineHeightLG
      },
      // Body
      [`${componentCls}-body`]: {
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        padding: paddingLG,
        overflow: "auto",
        [`${componentCls}-body-skeleton`]: {
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center"
        }
      },
      // Footer
      [`${componentCls}-footer`]: {
        flexShrink: 0,
        padding: `${unit(footerPaddingBlock)} ${unit(footerPaddingInline)}`,
        borderTop: `${unit(lineWidth)} ${lineType} ${colorSplit}`
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl"
      }
    }
  };
}, "genDrawerStyle"), prepareComponentToken$7 = /* @__PURE__ */ __name((token) => ({
  zIndexPopup: token.zIndexPopupBase,
  footerPaddingBlock: token.paddingXS,
  footerPaddingInline: token.padding
}), "prepareComponentToken$7"), useStyle$7 = genStyleHooks("Drawer", (token) => {
  const drawerToken = merge(token, {});
  return [genDrawerStyle(drawerToken), genMotionStyle(drawerToken)];
}, prepareComponentToken$7);
var __rest$b = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
const defaultPushState = {
  distance: 180
}, Drawer$1 = /* @__PURE__ */ __name((props) => {
  var _a;
  const {
    rootClassName,
    width,
    height,
    size = "default",
    mask: mask2 = !0,
    push: push2 = defaultPushState,
    open: open2,
    afterOpenChange,
    onClose,
    prefixCls: customizePrefixCls,
    getContainer: customizeGetContainer,
    style,
    className,
    // Deprecated
    visible,
    afterVisibleChange,
    maskStyle,
    drawerStyle,
    contentWrapperStyle
  } = props, rest = __rest$b(props, ["rootClassName", "width", "height", "size", "mask", "push", "open", "afterOpenChange", "onClose", "prefixCls", "getContainer", "style", "className", "visible", "afterVisibleChange", "maskStyle", "drawerStyle", "contentWrapperStyle"]), {
    getPopupContainer,
    getPrefixCls,
    direction,
    drawer: drawer2
  } = React.useContext(ConfigContext), prefixCls = getPrefixCls("drawer", customizePrefixCls), [wrapCSSVar, hashId, cssVarCls] = useStyle$7(prefixCls), getContainer = (
    // 有可能为 false，所以不能直接判断
    customizeGetContainer === void 0 && getPopupContainer ? () => getPopupContainer(document.body) : customizeGetContainer
  ), drawerClassName = cn({
    "no-mask": !mask2,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, rootClassName, hashId, cssVarCls);
  if (process.env.NODE_ENV !== "production") {
    const warning2 = devUseWarning("Drawer");
    [["visible", "open"], ["afterVisibleChange", "afterOpenChange"], ["headerStyle", "styles.header"], ["bodyStyle", "styles.body"], ["footerStyle", "styles.footer"], ["contentWrapperStyle", "styles.wrapper"], ["maskStyle", "styles.mask"], ["drawerStyle", "styles.content"]].forEach((_ref) => {
      let [deprecatedName, newName] = _ref;
      warning2.deprecated(!(deprecatedName in props), deprecatedName, newName);
    }), getContainer !== void 0 && ((_a = props.style) === null || _a === void 0 ? void 0 : _a.position) === "absolute" && process.env.NODE_ENV !== "production" && warning2(!1, "breaking", "`style` is replaced by `rootStyle` in v5. Please check that `position: absolute` is necessary.");
  }
  const mergedWidth = React.useMemo(() => width ?? (size === "large" ? 736 : 378), [width, size]), mergedHeight = React.useMemo(() => height ?? (size === "large" ? 736 : 378), [height, size]), maskMotion = {
    motionName: getTransitionName(prefixCls, "mask-motion"),
    motionAppear: !0,
    motionEnter: !0,
    motionLeave: !0,
    motionDeadline: 500
  }, panelMotion = /* @__PURE__ */ __name((motionPlacement) => ({
    motionName: getTransitionName(prefixCls, `panel-motion-${motionPlacement}`),
    motionAppear: !0,
    motionEnter: !0,
    motionLeave: !0,
    motionDeadline: 500
  }), "panelMotion"), panelRef = usePanelRef(), [zIndex, contextZIndex] = useZIndex("Drawer", rest.zIndex), {
    classNames: propClassNames = {},
    styles: propStyles = {}
  } = rest, {
    classNames: contextClassNames = {},
    styles: contextStyles = {}
  } = drawer2 || {};
  return wrapCSSVar(/* @__PURE__ */ React.createElement(ContextIsolator, {
    form: !0,
    space: !0
  }, /* @__PURE__ */ React.createElement(zIndexContext.Provider, {
    value: contextZIndex
  }, /* @__PURE__ */ React.createElement(Drawer$2, Object.assign({
    prefixCls,
    onClose,
    maskMotion,
    motion: panelMotion
  }, rest, {
    classNames: {
      mask: cn(propClassNames.mask, contextClassNames.mask),
      content: cn(propClassNames.content, contextClassNames.content),
      wrapper: cn(propClassNames.wrapper, contextClassNames.wrapper)
    },
    styles: {
      mask: Object.assign(Object.assign(Object.assign({}, propStyles.mask), maskStyle), contextStyles.mask),
      content: Object.assign(Object.assign(Object.assign({}, propStyles.content), drawerStyle), contextStyles.content),
      wrapper: Object.assign(Object.assign(Object.assign({}, propStyles.wrapper), contentWrapperStyle), contextStyles.wrapper)
    },
    open: open2 ?? visible,
    mask: mask2,
    push: push2,
    width: mergedWidth,
    height: mergedHeight,
    style: Object.assign(Object.assign({}, drawer2 == null ? void 0 : drawer2.style), style),
    className: cn(drawer2 == null ? void 0 : drawer2.className, className),
    rootClassName: drawerClassName,
    getContainer,
    afterOpenChange: afterOpenChange ?? afterVisibleChange,
    panelRef,
    zIndex
  }), /* @__PURE__ */ React.createElement(DrawerPanel2, Object.assign({
    prefixCls
  }, rest, {
    onClose
  }))))));
}, "Drawer$1"), PurePanel$3 = /* @__PURE__ */ __name((props) => {
  const {
    prefixCls: customizePrefixCls,
    style,
    className,
    placement = "right"
  } = props, restProps = __rest$b(props, ["prefixCls", "style", "className", "placement"]), {
    getPrefixCls
  } = React.useContext(ConfigContext), prefixCls = getPrefixCls("drawer", customizePrefixCls), [wrapCSSVar, hashId, cssVarCls] = useStyle$7(prefixCls), cls = cn(prefixCls, `${prefixCls}-pure`, `${prefixCls}-${placement}`, hashId, cssVarCls, className);
  return wrapCSSVar(/* @__PURE__ */ React.createElement("div", {
    className: cls,
    style
  }, /* @__PURE__ */ React.createElement(DrawerPanel2, Object.assign({
    prefixCls
  }, restProps))));
}, "PurePanel$3");
Drawer$1._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$3;
process.env.NODE_ENV !== "production" && (Drawer$1.displayName = "Drawer");
const flexWrapValues = ["wrap", "nowrap", "wrap-reverse"], justifyContentValues = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], alignItemsValues = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], genClsWrap = /* @__PURE__ */ __name((prefixCls, props) => {
  const wrap = props.wrap === !0 ? "wrap" : props.wrap;
  return {
    [`${prefixCls}-wrap-${wrap}`]: wrap && flexWrapValues.includes(wrap)
  };
}, "genClsWrap"), genClsAlign = /* @__PURE__ */ __name((prefixCls, props) => {
  const alignCls = {};
  return alignItemsValues.forEach((cssKey) => {
    alignCls[`${prefixCls}-align-${cssKey}`] = props.align === cssKey;
  }), alignCls[`${prefixCls}-align-stretch`] = !props.align && !!props.vertical, alignCls;
}, "genClsAlign"), genClsJustify = /* @__PURE__ */ __name((prefixCls, props) => {
  const justifyCls = {};
  return justifyContentValues.forEach((cssKey) => {
    justifyCls[`${prefixCls}-justify-${cssKey}`] = props.justify === cssKey;
  }), justifyCls;
}, "genClsJustify");
function createFlexClassNames(prefixCls, props) {
  return cn(Object.assign(Object.assign(Object.assign({}, genClsWrap(prefixCls, props)), genClsAlign(prefixCls, props)), genClsJustify(prefixCls, props)));
}
__name(createFlexClassNames, "createFlexClassNames");
const genFlexStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: "flex",
      "&-vertical": {
        flexDirection: "column"
      },
      "&-rtl": {
        direction: "rtl"
      },
      "&:empty": {
        display: "none"
      }
    }
  };
}, "genFlexStyle"), genFlexGapStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      "&-gap-small": {
        gap: token.flexGapSM
      },
      "&-gap-middle": {
        gap: token.flexGap
      },
      "&-gap-large": {
        gap: token.flexGapLG
      }
    }
  };
}, "genFlexGapStyle"), genFlexWrapStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls
  } = token, wrapStyle = {};
  return flexWrapValues.forEach((value) => {
    wrapStyle[`${componentCls}-wrap-${value}`] = {
      flexWrap: value
    };
  }), wrapStyle;
}, "genFlexWrapStyle"), genAlignItemsStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls
  } = token, alignStyle = {};
  return alignItemsValues.forEach((value) => {
    alignStyle[`${componentCls}-align-${value}`] = {
      alignItems: value
    };
  }), alignStyle;
}, "genAlignItemsStyle"), genJustifyContentStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls
  } = token, justifyStyle = {};
  return justifyContentValues.forEach((value) => {
    justifyStyle[`${componentCls}-justify-${value}`] = {
      justifyContent: value
    };
  }), justifyStyle;
}, "genJustifyContentStyle"), prepareComponentToken$6 = /* @__PURE__ */ __name(() => ({}), "prepareComponentToken$6"), useStyle$6 = genStyleHooks("Flex", (token) => {
  const {
    paddingXS,
    padding,
    paddingLG
  } = token, flexToken = merge(token, {
    flexGapSM: paddingXS,
    flexGap: padding,
    flexGapLG: paddingLG
  });
  return [genFlexStyle(flexToken), genFlexGapStyle(flexToken), genFlexWrapStyle(flexToken), genAlignItemsStyle(flexToken), genJustifyContentStyle(flexToken)];
}, prepareComponentToken$6, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var __rest$a = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
const Flex$1 = /* @__PURE__ */ React__default.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    rootClassName,
    className,
    style,
    flex,
    gap,
    children,
    vertical = !1,
    component: Component = "div"
  } = props, othersProps = __rest$a(props, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: ctxFlex,
    direction: ctxDirection,
    getPrefixCls
  } = React__default.useContext(ConfigContext), prefixCls = getPrefixCls("flex", customizePrefixCls), [wrapCSSVar, hashId, cssVarCls] = useStyle$6(prefixCls), mergedVertical = vertical ?? (ctxFlex == null ? void 0 : ctxFlex.vertical), mergedCls = cn(className, rootClassName, ctxFlex == null ? void 0 : ctxFlex.className, prefixCls, hashId, cssVarCls, createFlexClassNames(prefixCls, props), {
    [`${prefixCls}-rtl`]: ctxDirection === "rtl",
    [`${prefixCls}-gap-${gap}`]: isPresetSize(gap),
    [`${prefixCls}-vertical`]: mergedVertical
  }), mergedStyle = Object.assign(Object.assign({}, ctxFlex == null ? void 0 : ctxFlex.style), style);
  return flex && (mergedStyle.flex = flex), gap && !isPresetSize(gap) && (mergedStyle.gap = gap), wrapCSSVar(/* @__PURE__ */ React__default.createElement(Component, Object.assign({
    ref,
    className: mergedCls,
    style: mergedStyle
  }, omit(othersProps, ["justify", "wrap", "align"])), children));
});
process.env.NODE_ENV !== "production" && (Flex$1.displayName = "Flex");
var PreviewGroupContext = /* @__PURE__ */ React.createContext(null), Operations = /* @__PURE__ */ __name(function(props) {
  var visible = props.visible, maskTransitionName = props.maskTransitionName, getContainer = props.getContainer, prefixCls = props.prefixCls, rootClassName = props.rootClassName, icons2 = props.icons, countRender = props.countRender, showSwitch = props.showSwitch, showProgress = props.showProgress, current = props.current, transform = props.transform, count = props.count, scale = props.scale, minScale = props.minScale, maxScale = props.maxScale, closeIcon = props.closeIcon, onActive = props.onActive, onClose = props.onClose, onZoomIn = props.onZoomIn, onZoomOut = props.onZoomOut, onRotateRight = props.onRotateRight, onRotateLeft = props.onRotateLeft, onFlipX = props.onFlipX, onFlipY = props.onFlipY, onReset = props.onReset, toolbarRender = props.toolbarRender, zIndex = props.zIndex, image2 = props.image, groupContext = useContext(PreviewGroupContext), rotateLeft = icons2.rotateLeft, rotateRight = icons2.rotateRight, zoomIn = icons2.zoomIn, zoomOut = icons2.zoomOut, close = icons2.close, left = icons2.left, right = icons2.right, flipX = icons2.flipX, flipY = icons2.flipY, toolClassName = "".concat(prefixCls, "-operations-operation");
  React.useEffect(function() {
    var onKeyDown = /* @__PURE__ */ __name(function(e2) {
      e2.keyCode === KeyCode.ESC && onClose();
    }, "onKeyDown");
    return visible && window.addEventListener("keydown", onKeyDown), function() {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [visible]);
  var handleActive = /* @__PURE__ */ __name(function(e2, offset2) {
    e2.preventDefault(), e2.stopPropagation(), onActive(offset2);
  }, "handleActive"), renderOperation = React.useCallback(function(_ref) {
    var type = _ref.type, disabled = _ref.disabled, onClick = _ref.onClick, icon2 = _ref.icon;
    return /* @__PURE__ */ React.createElement("div", {
      key: type,
      className: cn(toolClassName, "".concat(prefixCls, "-operations-operation-").concat(type), _defineProperty({}, "".concat(prefixCls, "-operations-operation-disabled"), !!disabled)),
      onClick
    }, icon2);
  }, [toolClassName, prefixCls]), switchPrevNode = showSwitch ? renderOperation({
    icon: left,
    onClick: /* @__PURE__ */ __name(function(e2) {
      return handleActive(e2, -1);
    }, "onClick"),
    type: "prev",
    disabled: current === 0
  }) : void 0, switchNextNode = showSwitch ? renderOperation({
    icon: right,
    onClick: /* @__PURE__ */ __name(function(e2) {
      return handleActive(e2, 1);
    }, "onClick"),
    type: "next",
    disabled: current === count - 1
  }) : void 0, flipYNode = renderOperation({
    icon: flipY,
    onClick: onFlipY,
    type: "flipY"
  }), flipXNode = renderOperation({
    icon: flipX,
    onClick: onFlipX,
    type: "flipX"
  }), rotateLeftNode = renderOperation({
    icon: rotateLeft,
    onClick: onRotateLeft,
    type: "rotateLeft"
  }), rotateRightNode = renderOperation({
    icon: rotateRight,
    onClick: onRotateRight,
    type: "rotateRight"
  }), zoomOutNode = renderOperation({
    icon: zoomOut,
    onClick: onZoomOut,
    type: "zoomOut",
    disabled: scale <= minScale
  }), zoomInNode = renderOperation({
    icon: zoomIn,
    onClick: onZoomIn,
    type: "zoomIn",
    disabled: scale === maxScale
  }), toolbarNode = /* @__PURE__ */ React.createElement("div", {
    className: "".concat(prefixCls, "-operations")
  }, flipYNode, flipXNode, rotateLeftNode, rotateRightNode, zoomOutNode, zoomInNode);
  return /* @__PURE__ */ React.createElement(CSSMotion, {
    visible,
    motionName: maskTransitionName
  }, function(_ref2) {
    var className = _ref2.className, style = _ref2.style;
    return /* @__PURE__ */ React.createElement(Portal, {
      open: !0,
      getContainer: getContainer ?? document.body
    }, /* @__PURE__ */ React.createElement("div", {
      className: cn("".concat(prefixCls, "-operations-wrapper"), className, rootClassName),
      style: _objectSpread2(_objectSpread2({}, style), {}, {
        zIndex
      })
    }, closeIcon === null ? null : /* @__PURE__ */ React.createElement("button", {
      className: "".concat(prefixCls, "-close"),
      onClick: onClose
    }, closeIcon || close), showSwitch && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: cn("".concat(prefixCls, "-switch-left"), _defineProperty({}, "".concat(prefixCls, "-switch-left-disabled"), current === 0)),
      onClick: /* @__PURE__ */ __name(function(e2) {
        return handleActive(e2, -1);
      }, "onClick")
    }, left), /* @__PURE__ */ React.createElement("div", {
      className: cn("".concat(prefixCls, "-switch-right"), _defineProperty({}, "".concat(prefixCls, "-switch-right-disabled"), current === count - 1)),
      onClick: /* @__PURE__ */ __name(function(e2) {
        return handleActive(e2, 1);
      }, "onClick")
    }, right)), /* @__PURE__ */ React.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, showProgress && /* @__PURE__ */ React.createElement("div", {
      className: "".concat(prefixCls, "-progress")
    }, countRender ? countRender(current + 1, count) : "".concat(current + 1, " / ").concat(count)), toolbarRender ? toolbarRender(toolbarNode, _objectSpread2(_objectSpread2({
      icons: {
        prevIcon: switchPrevNode,
        nextIcon: switchNextNode,
        flipYIcon: flipYNode,
        flipXIcon: flipXNode,
        rotateLeftIcon: rotateLeftNode,
        rotateRightIcon: rotateRightNode,
        zoomOutIcon: zoomOutNode,
        zoomInIcon: zoomInNode
      },
      actions: {
        onActive,
        onFlipY,
        onFlipX,
        onRotateLeft,
        onRotateRight,
        onZoomOut,
        onZoomIn,
        onReset,
        onClose
      },
      transform
    }, groupContext ? {
      current,
      total: count
    } : {}), {}, {
      image: image2
    })) : toolbarNode)));
  });
}, "Operations"), initialTransform = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  flipX: !1,
  flipY: !1
};
function useImageTransform(imgRef, minScale, maxScale, onTransform) {
  var frame = useRef(null), queue = useRef([]), _useState = useState(initialTransform), _useState2 = _slicedToArray(_useState, 2), transform = _useState2[0], setTransform = _useState2[1], resetTransform = /* @__PURE__ */ __name(function(action) {
    setTransform(initialTransform), isEqual(initialTransform, transform) || onTransform == null || onTransform({
      transform: initialTransform,
      action
    });
  }, "resetTransform"), updateTransform = /* @__PURE__ */ __name(function(newTransform, action) {
    frame.current === null && (queue.current = [], frame.current = wrapperRaf(function() {
      setTransform(function(preState) {
        var memoState = preState;
        return queue.current.forEach(function(queueState) {
          memoState = _objectSpread2(_objectSpread2({}, memoState), queueState);
        }), frame.current = null, onTransform == null || onTransform({
          transform: memoState,
          action
        }), memoState;
      });
    })), queue.current.push(_objectSpread2(_objectSpread2({}, transform), newTransform));
  }, "updateTransform"), dispatchZoomChange = /* @__PURE__ */ __name(function(ratio, action, centerX, centerY, isTouch) {
    var _imgRef$current = imgRef.current, width = _imgRef$current.width, height = _imgRef$current.height, offsetWidth = _imgRef$current.offsetWidth, offsetHeight = _imgRef$current.offsetHeight, offsetLeft = _imgRef$current.offsetLeft, offsetTop = _imgRef$current.offsetTop, newRatio = ratio, newScale = transform.scale * ratio;
    newScale > maxScale ? (newScale = maxScale, newRatio = maxScale / transform.scale) : newScale < minScale && (newScale = isTouch ? newScale : minScale, newRatio = newScale / transform.scale);
    var mergedCenterX = centerX ?? innerWidth / 2, mergedCenterY = centerY ?? innerHeight / 2, diffRatio = newRatio - 1, diffImgX = diffRatio * width * 0.5, diffImgY = diffRatio * height * 0.5, diffOffsetLeft = diffRatio * (mergedCenterX - transform.x - offsetLeft), diffOffsetTop = diffRatio * (mergedCenterY - transform.y - offsetTop), newX = transform.x - (diffOffsetLeft - diffImgX), newY = transform.y - (diffOffsetTop - diffImgY);
    if (ratio < 1 && newScale === 1) {
      var mergedWidth = offsetWidth * newScale, mergedHeight = offsetHeight * newScale, _getClientSize = getClientSize(), clientWidth = _getClientSize.width, clientHeight = _getClientSize.height;
      mergedWidth <= clientWidth && mergedHeight <= clientHeight && (newX = 0, newY = 0);
    }
    updateTransform({
      x: newX,
      y: newY,
      scale: newScale
    }, action);
  }, "dispatchZoomChange");
  return {
    transform,
    resetTransform,
    updateTransform,
    dispatchZoomChange
  };
}
__name(useImageTransform, "useImageTransform");
function fixPoint(key, start, width, clientWidth) {
  var startAddWidth = start + width, offsetStart = (width - clientWidth) / 2;
  if (width > clientWidth) {
    if (start > 0)
      return _defineProperty({}, key, offsetStart);
    if (start < 0 && startAddWidth < clientWidth)
      return _defineProperty({}, key, -offsetStart);
  } else if (start < 0 || startAddWidth > clientWidth)
    return _defineProperty({}, key, start < 0 ? offsetStart : -offsetStart);
  return {};
}
__name(fixPoint, "fixPoint");
function getFixScaleEleTransPosition(width, height, left, top) {
  var _getClientSize = getClientSize(), clientWidth = _getClientSize.width, clientHeight = _getClientSize.height, fixPos = null;
  return width <= clientWidth && height <= clientHeight ? fixPos = {
    x: 0,
    y: 0
  } : (width > clientWidth || height > clientHeight) && (fixPos = _objectSpread2(_objectSpread2({}, fixPoint("x", left, width, clientWidth)), fixPoint("y", top, height, clientHeight))), fixPos;
}
__name(getFixScaleEleTransPosition, "getFixScaleEleTransPosition");
var BASE_SCALE_RATIO = 1, WHEEL_MAX_SCALE_RATIO = 1;
function useMouseEvent(imgRef, movable, visible, scaleStep, transform, updateTransform, dispatchZoomChange) {
  var rotate = transform.rotate, scale = transform.scale, x2 = transform.x, y2 = transform.y, _useState = useState(!1), _useState2 = _slicedToArray(_useState, 2), isMoving = _useState2[0], setMoving = _useState2[1], startPositionInfo = useRef({
    diffX: 0,
    diffY: 0,
    transformX: 0,
    transformY: 0
  }), onMouseDown = /* @__PURE__ */ __name(function(event) {
    !movable || event.button !== 0 || (event.preventDefault(), event.stopPropagation(), startPositionInfo.current = {
      diffX: event.pageX - x2,
      diffY: event.pageY - y2,
      transformX: x2,
      transformY: y2
    }, setMoving(!0));
  }, "onMouseDown"), onMouseMove = /* @__PURE__ */ __name(function(event) {
    visible && isMoving && updateTransform({
      x: event.pageX - startPositionInfo.current.diffX,
      y: event.pageY - startPositionInfo.current.diffY
    }, "move");
  }, "onMouseMove"), onMouseUp = /* @__PURE__ */ __name(function() {
    if (visible && isMoving) {
      setMoving(!1);
      var _startPositionInfo$cu = startPositionInfo.current, transformX = _startPositionInfo$cu.transformX, transformY = _startPositionInfo$cu.transformY, hasChangedPosition = x2 !== transformX && y2 !== transformY;
      if (!hasChangedPosition) return;
      var width = imgRef.current.offsetWidth * scale, height = imgRef.current.offsetHeight * scale, _imgRef$current$getBo = imgRef.current.getBoundingClientRect(), left = _imgRef$current$getBo.left, top = _imgRef$current$getBo.top, isRotate = rotate % 180 !== 0, fixState = getFixScaleEleTransPosition(isRotate ? height : width, isRotate ? width : height, left, top);
      fixState && updateTransform(_objectSpread2({}, fixState), "dragRebound");
    }
  }, "onMouseUp"), onWheel = /* @__PURE__ */ __name(function(event) {
    if (!(!visible || event.deltaY == 0)) {
      var scaleRatio = Math.abs(event.deltaY / 100), mergedScaleRatio = Math.min(scaleRatio, WHEEL_MAX_SCALE_RATIO), ratio = BASE_SCALE_RATIO + mergedScaleRatio * scaleStep;
      event.deltaY > 0 && (ratio = BASE_SCALE_RATIO / ratio), dispatchZoomChange(ratio, "wheel", event.clientX, event.clientY);
    }
  }, "onWheel");
  return useEffect(function() {
    var onTopMouseUpListener, onTopMouseMoveListener, onMouseUpListener, onMouseMoveListener;
    if (movable) {
      onMouseUpListener = addEventListenerWrap(window, "mouseup", onMouseUp, !1), onMouseMoveListener = addEventListenerWrap(window, "mousemove", onMouseMove, !1);
      try {
        window.top !== window.self && (onTopMouseUpListener = addEventListenerWrap(window.top, "mouseup", onMouseUp, !1), onTopMouseMoveListener = addEventListenerWrap(window.top, "mousemove", onMouseMove, !1));
      } catch (error) {
        warning(!1, "[rc-image] ".concat(error));
      }
    }
    return function() {
      var _onMouseUpListener, _onMouseMoveListener, _onTopMouseUpListener, _onTopMouseMoveListen;
      (_onMouseUpListener = onMouseUpListener) === null || _onMouseUpListener === void 0 || _onMouseUpListener.remove(), (_onMouseMoveListener = onMouseMoveListener) === null || _onMouseMoveListener === void 0 || _onMouseMoveListener.remove(), (_onTopMouseUpListener = onTopMouseUpListener) === null || _onTopMouseUpListener === void 0 || _onTopMouseUpListener.remove(), (_onTopMouseMoveListen = onTopMouseMoveListener) === null || _onTopMouseMoveListen === void 0 || _onTopMouseMoveListen.remove();
    };
  }, [visible, isMoving, x2, y2, rotate, movable]), {
    isMoving,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onWheel
  };
}
__name(useMouseEvent, "useMouseEvent");
function isImageValid(src) {
  return new Promise(function(resolve) {
    var img = document.createElement("img");
    img.onerror = function() {
      return resolve(!1);
    }, img.onload = function() {
      return resolve(!0);
    }, img.src = src;
  });
}
__name(isImageValid, "isImageValid");
function useStatus(_ref) {
  var src = _ref.src, isCustomPlaceholder = _ref.isCustomPlaceholder, fallback = _ref.fallback, _useState = useState(isCustomPlaceholder ? "loading" : "normal"), _useState2 = _slicedToArray(_useState, 2), status = _useState2[0], setStatus = _useState2[1], isLoaded = useRef(!1), isError = status === "error";
  useEffect(function() {
    var isCurrentSrc = !0;
    return isImageValid(src).then(function(isValid) {
      !isValid && isCurrentSrc && setStatus("error");
    }), function() {
      isCurrentSrc = !1;
    };
  }, [src]), useEffect(function() {
    isCustomPlaceholder && !isLoaded.current ? setStatus("loading") : isError && setStatus("normal");
  }, [src]);
  var onLoad = /* @__PURE__ */ __name(function() {
    setStatus("normal");
  }, "onLoad"), getImgRef = /* @__PURE__ */ __name(function(img) {
    isLoaded.current = !1, status === "loading" && img !== null && img !== void 0 && img.complete && (img.naturalWidth || img.naturalHeight) && (isLoaded.current = !0, onLoad());
  }, "getImgRef"), srcAndOnload = isError && fallback ? {
    src: fallback
  } : {
    onLoad,
    src
  };
  return [getImgRef, srcAndOnload, status];
}
__name(useStatus, "useStatus");
function getDistance(a2, b2) {
  var x2 = a2.x - b2.x, y2 = a2.y - b2.y;
  return Math.hypot(x2, y2);
}
__name(getDistance, "getDistance");
function getCenter(oldPoint1, oldPoint2, newPoint1, newPoint2) {
  var distance1 = getDistance(oldPoint1, newPoint1), distance2 = getDistance(oldPoint2, newPoint2);
  if (distance1 === 0 && distance2 === 0)
    return [oldPoint1.x, oldPoint1.y];
  var ratio = distance1 / (distance1 + distance2), x2 = oldPoint1.x + ratio * (oldPoint2.x - oldPoint1.x), y2 = oldPoint1.y + ratio * (oldPoint2.y - oldPoint1.y);
  return [x2, y2];
}
__name(getCenter, "getCenter");
function useTouchEvent(imgRef, movable, visible, minScale, transform, updateTransform, dispatchZoomChange) {
  var rotate = transform.rotate, scale = transform.scale, x2 = transform.x, y2 = transform.y, _useState = useState(!1), _useState2 = _slicedToArray(_useState, 2), isTouching = _useState2[0], setIsTouching = _useState2[1], touchPointInfo = useRef({
    point1: {
      x: 0,
      y: 0
    },
    point2: {
      x: 0,
      y: 0
    },
    eventType: "none"
  }), updateTouchPointInfo = /* @__PURE__ */ __name(function(values) {
    touchPointInfo.current = _objectSpread2(_objectSpread2({}, touchPointInfo.current), values);
  }, "updateTouchPointInfo"), onTouchStart = /* @__PURE__ */ __name(function(event) {
    if (movable) {
      event.stopPropagation(), setIsTouching(!0);
      var _event$touches = event.touches, touches = _event$touches === void 0 ? [] : _event$touches;
      touches.length > 1 ? updateTouchPointInfo({
        point1: {
          x: touches[0].clientX,
          y: touches[0].clientY
        },
        point2: {
          x: touches[1].clientX,
          y: touches[1].clientY
        },
        eventType: "touchZoom"
      }) : updateTouchPointInfo({
        point1: {
          x: touches[0].clientX - x2,
          y: touches[0].clientY - y2
        },
        eventType: "move"
      });
    }
  }, "onTouchStart"), onTouchMove = /* @__PURE__ */ __name(function(event) {
    var _event$touches2 = event.touches, touches = _event$touches2 === void 0 ? [] : _event$touches2, _touchPointInfo$curre = touchPointInfo.current, point1 = _touchPointInfo$curre.point1, point2 = _touchPointInfo$curre.point2, eventType = _touchPointInfo$curre.eventType;
    if (touches.length > 1 && eventType === "touchZoom") {
      var newPoint1 = {
        x: touches[0].clientX,
        y: touches[0].clientY
      }, newPoint2 = {
        x: touches[1].clientX,
        y: touches[1].clientY
      }, _getCenter = getCenter(point1, point2, newPoint1, newPoint2), _getCenter2 = _slicedToArray(_getCenter, 2), centerX = _getCenter2[0], centerY = _getCenter2[1], ratio = getDistance(newPoint1, newPoint2) / getDistance(point1, point2);
      dispatchZoomChange(ratio, "touchZoom", centerX, centerY, !0), updateTouchPointInfo({
        point1: newPoint1,
        point2: newPoint2,
        eventType: "touchZoom"
      });
    } else eventType === "move" && (updateTransform({
      x: touches[0].clientX - point1.x,
      y: touches[0].clientY - point1.y
    }, "move"), updateTouchPointInfo({
      eventType: "move"
    }));
  }, "onTouchMove"), onTouchEnd = /* @__PURE__ */ __name(function() {
    if (visible) {
      if (isTouching && setIsTouching(!1), updateTouchPointInfo({
        eventType: "none"
      }), minScale > scale)
        return updateTransform({
          x: 0,
          y: 0,
          scale: minScale
        }, "touchZoom");
      var width = imgRef.current.offsetWidth * scale, height = imgRef.current.offsetHeight * scale, _imgRef$current$getBo = imgRef.current.getBoundingClientRect(), left = _imgRef$current$getBo.left, top = _imgRef$current$getBo.top, isRotate = rotate % 180 !== 0, fixState = getFixScaleEleTransPosition(isRotate ? height : width, isRotate ? width : height, left, top);
      fixState && updateTransform(_objectSpread2({}, fixState), "dragRebound");
    }
  }, "onTouchEnd");
  return useEffect(function() {
    var onTouchMoveListener;
    return visible && movable && (onTouchMoveListener = addEventListenerWrap(window, "touchmove", function(e2) {
      return e2.preventDefault();
    }, {
      passive: !1
    })), function() {
      var _onTouchMoveListener;
      (_onTouchMoveListener = onTouchMoveListener) === null || _onTouchMoveListener === void 0 || _onTouchMoveListener.remove();
    };
  }, [visible, movable]), {
    isTouching,
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
}
__name(useTouchEvent, "useTouchEvent");
var _excluded$7 = ["fallback", "src", "imgRef"], _excluded2$2 = ["prefixCls", "src", "alt", "imageInfo", "fallback", "movable", "onClose", "visible", "icons", "rootClassName", "closeIcon", "getContainer", "current", "count", "countRender", "scaleStep", "minScale", "maxScale", "transitionName", "maskTransitionName", "imageRender", "imgCommonProps", "toolbarRender", "onTransform", "onChange"], PreviewImage = /* @__PURE__ */ __name(function(_ref) {
  var fallback = _ref.fallback, src = _ref.src, imgRef = _ref.imgRef, props = _objectWithoutProperties(_ref, _excluded$7), _useStatus = useStatus({
    src,
    fallback
  }), _useStatus2 = _slicedToArray(_useStatus, 2), getImgRef = _useStatus2[0], srcAndOnload = _useStatus2[1];
  return /* @__PURE__ */ React__default.createElement("img", _extends({
    ref: /* @__PURE__ */ __name(function(_ref2) {
      imgRef.current = _ref2, getImgRef(_ref2);
    }, "ref")
  }, props, srcAndOnload));
}, "PreviewImage"), Preview = /* @__PURE__ */ __name(function(props) {
  var prefixCls = props.prefixCls, src = props.src, alt = props.alt, imageInfo = props.imageInfo, fallback = props.fallback, _props$movable = props.movable, movable = _props$movable === void 0 ? !0 : _props$movable, onClose = props.onClose, visible = props.visible, _props$icons = props.icons, icons2 = _props$icons === void 0 ? {} : _props$icons, rootClassName = props.rootClassName, closeIcon = props.closeIcon, getContainer = props.getContainer, _props$current = props.current, current = _props$current === void 0 ? 0 : _props$current, _props$count = props.count, count = _props$count === void 0 ? 1 : _props$count, countRender = props.countRender, _props$scaleStep = props.scaleStep, scaleStep = _props$scaleStep === void 0 ? 0.5 : _props$scaleStep, _props$minScale = props.minScale, minScale = _props$minScale === void 0 ? 1 : _props$minScale, _props$maxScale = props.maxScale, maxScale = _props$maxScale === void 0 ? 50 : _props$maxScale, _props$transitionName = props.transitionName, transitionName = _props$transitionName === void 0 ? "zoom" : _props$transitionName, _props$maskTransition = props.maskTransitionName, maskTransitionName = _props$maskTransition === void 0 ? "fade" : _props$maskTransition, imageRender = props.imageRender, imgCommonProps = props.imgCommonProps, toolbarRender = props.toolbarRender, onTransform = props.onTransform, onChange = props.onChange, restProps = _objectWithoutProperties(props, _excluded2$2), imgRef = useRef(), groupContext = useContext(PreviewGroupContext), showLeftOrRightSwitches = groupContext && count > 1, showOperationsProgress = groupContext && count >= 1, _useState = useState(!0), _useState2 = _slicedToArray(_useState, 2), enableTransition = _useState2[0], setEnableTransition = _useState2[1], _useImageTransform = useImageTransform(imgRef, minScale, maxScale, onTransform), transform = _useImageTransform.transform, resetTransform = _useImageTransform.resetTransform, updateTransform = _useImageTransform.updateTransform, dispatchZoomChange = _useImageTransform.dispatchZoomChange, _useMouseEvent = useMouseEvent(imgRef, movable, visible, scaleStep, transform, updateTransform, dispatchZoomChange), isMoving = _useMouseEvent.isMoving, onMouseDown = _useMouseEvent.onMouseDown, onWheel = _useMouseEvent.onWheel, _useTouchEvent = useTouchEvent(imgRef, movable, visible, minScale, transform, updateTransform, dispatchZoomChange), isTouching = _useTouchEvent.isTouching, onTouchStart = _useTouchEvent.onTouchStart, onTouchMove = _useTouchEvent.onTouchMove, onTouchEnd = _useTouchEvent.onTouchEnd, rotate = transform.rotate, scale = transform.scale, wrapClassName = cn(_defineProperty({}, "".concat(prefixCls, "-moving"), isMoving));
  useEffect(function() {
    enableTransition || setEnableTransition(!0);
  }, [enableTransition]);
  var onAfterClose = /* @__PURE__ */ __name(function() {
    resetTransform("close");
  }, "onAfterClose"), onZoomIn = /* @__PURE__ */ __name(function() {
    dispatchZoomChange(BASE_SCALE_RATIO + scaleStep, "zoomIn");
  }, "onZoomIn"), onZoomOut = /* @__PURE__ */ __name(function() {
    dispatchZoomChange(BASE_SCALE_RATIO / (BASE_SCALE_RATIO + scaleStep), "zoomOut");
  }, "onZoomOut"), onRotateRight = /* @__PURE__ */ __name(function() {
    updateTransform({
      rotate: rotate + 90
    }, "rotateRight");
  }, "onRotateRight"), onRotateLeft = /* @__PURE__ */ __name(function() {
    updateTransform({
      rotate: rotate - 90
    }, "rotateLeft");
  }, "onRotateLeft"), onFlipX = /* @__PURE__ */ __name(function() {
    updateTransform({
      flipX: !transform.flipX
    }, "flipX");
  }, "onFlipX"), onFlipY = /* @__PURE__ */ __name(function() {
    updateTransform({
      flipY: !transform.flipY
    }, "flipY");
  }, "onFlipY"), onReset = /* @__PURE__ */ __name(function() {
    resetTransform("reset");
  }, "onReset"), onActive = /* @__PURE__ */ __name(function(offset2) {
    var position = current + offset2;
    !Number.isInteger(position) || position < 0 || position > count - 1 || (setEnableTransition(!1), resetTransform(offset2 < 0 ? "prev" : "next"), onChange == null || onChange(position, current));
  }, "onActive"), onKeyDown = /* @__PURE__ */ __name(function(event) {
    !visible || !showLeftOrRightSwitches || (event.keyCode === KeyCode.LEFT ? onActive(-1) : event.keyCode === KeyCode.RIGHT && onActive(1));
  }, "onKeyDown"), onDoubleClick = /* @__PURE__ */ __name(function(event) {
    visible && (scale !== 1 ? updateTransform({
      x: 0,
      y: 0,
      scale: 1
    }, "doubleClick") : dispatchZoomChange(BASE_SCALE_RATIO + scaleStep, "doubleClick", event.clientX, event.clientY));
  }, "onDoubleClick");
  useEffect(function() {
    var onKeyDownListener = addEventListenerWrap(window, "keydown", onKeyDown, !1);
    return function() {
      onKeyDownListener.remove();
    };
  }, [visible, showLeftOrRightSwitches, current]);
  var imgNode = /* @__PURE__ */ React__default.createElement(PreviewImage, _extends({}, imgCommonProps, {
    width: props.width,
    height: props.height,
    imgRef,
    className: "".concat(prefixCls, "-img"),
    alt,
    style: {
      transform: "translate3d(".concat(transform.x, "px, ").concat(transform.y, "px, 0) scale3d(").concat(transform.flipX ? "-" : "").concat(scale, ", ").concat(transform.flipY ? "-" : "").concat(scale, ", 1) rotate(").concat(rotate, "deg)"),
      transitionDuration: (!enableTransition || isTouching) && "0s"
    },
    fallback,
    src,
    onWheel,
    onMouseDown,
    onDoubleClick,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel: onTouchEnd
  })), image2 = _objectSpread2({
    url: src,
    alt
  }, imageInfo);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(DialogWrap, _extends({
    transitionName,
    maskTransitionName,
    closable: !1,
    keyboard: !0,
    prefixCls,
    onClose,
    visible,
    classNames: {
      wrapper: wrapClassName
    },
    rootClassName,
    getContainer
  }, restProps, {
    afterClose: onAfterClose
  }), /* @__PURE__ */ React__default.createElement("div", {
    className: "".concat(prefixCls, "-img-wrapper")
  }, imageRender ? imageRender(imgNode, _objectSpread2({
    transform,
    image: image2
  }, groupContext ? {
    current
  } : {})) : imgNode)), /* @__PURE__ */ React__default.createElement(Operations, {
    visible,
    transform,
    maskTransitionName,
    closeIcon,
    getContainer,
    prefixCls,
    rootClassName,
    icons: icons2,
    countRender,
    showSwitch: showLeftOrRightSwitches,
    showProgress: showOperationsProgress,
    current,
    count,
    scale,
    minScale,
    maxScale,
    toolbarRender,
    onActive,
    onZoomIn,
    onZoomOut,
    onRotateRight,
    onRotateLeft,
    onFlipX,
    onFlipY,
    onClose,
    onReset,
    zIndex: restProps.zIndex !== void 0 ? restProps.zIndex + 1 : void 0,
    image: image2
  }));
}, "Preview"), COMMON_PROPS = ["crossOrigin", "decoding", "draggable", "loading", "referrerPolicy", "sizes", "srcSet", "useMap", "alt"];
function usePreviewItems(items) {
  var _React$useState = React.useState({}), _React$useState2 = _slicedToArray(_React$useState, 2), images = _React$useState2[0], setImages = _React$useState2[1], registerImage = React.useCallback(function(id, data) {
    return setImages(function(imgs) {
      return _objectSpread2(_objectSpread2({}, imgs), {}, _defineProperty({}, id, data));
    }), function() {
      setImages(function(imgs) {
        var cloneImgs = _objectSpread2({}, imgs);
        return delete cloneImgs[id], cloneImgs;
      });
    };
  }, []), mergedItems = React.useMemo(function() {
    return items ? items.map(function(item) {
      if (typeof item == "string")
        return {
          data: {
            src: item
          }
        };
      var data = {};
      return Object.keys(item).forEach(function(key) {
        ["src"].concat(_toConsumableArray(COMMON_PROPS)).includes(key) && (data[key] = item[key]);
      }), {
        data
      };
    }) : Object.keys(images).reduce(function(total, id) {
      var _images$id = images[id], canPreview = _images$id.canPreview, data = _images$id.data;
      return canPreview && total.push({
        data,
        id
      }), total;
    }, []);
  }, [items, images]);
  return [mergedItems, registerImage, !!items];
}
__name(usePreviewItems, "usePreviewItems");
var _excluded$6 = ["visible", "onVisibleChange", "getContainer", "current", "movable", "minScale", "maxScale", "countRender", "closeIcon", "onChange", "onTransform", "toolbarRender", "imageRender"], _excluded2$1 = ["src"], Group = /* @__PURE__ */ __name(function(_ref) {
  var _mergedItems$current, _ref$previewPrefixCls = _ref.previewPrefixCls, previewPrefixCls = _ref$previewPrefixCls === void 0 ? "rc-image-preview" : _ref$previewPrefixCls, children = _ref.children, _ref$icons = _ref.icons, icons2 = _ref$icons === void 0 ? {} : _ref$icons, items = _ref.items, preview = _ref.preview, fallback = _ref.fallback, _ref2 = _typeof(preview) === "object" ? preview : {}, previewVisible = _ref2.visible, onVisibleChange = _ref2.onVisibleChange, getContainer = _ref2.getContainer, currentIndex = _ref2.current, movable = _ref2.movable, minScale = _ref2.minScale, maxScale = _ref2.maxScale, countRender = _ref2.countRender, closeIcon = _ref2.closeIcon, onChange = _ref2.onChange, onTransform = _ref2.onTransform, toolbarRender = _ref2.toolbarRender, imageRender = _ref2.imageRender, dialogProps = _objectWithoutProperties(_ref2, _excluded$6), _usePreviewItems = usePreviewItems(items), _usePreviewItems2 = _slicedToArray(_usePreviewItems, 3), mergedItems = _usePreviewItems2[0], register = _usePreviewItems2[1], fromItems = _usePreviewItems2[2], _useMergedState = useMergedState(0, {
    value: currentIndex
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), current = _useMergedState2[0], setCurrent = _useMergedState2[1], _useState = useState(!1), _useState2 = _slicedToArray(_useState, 2), keepOpenIndex = _useState2[0], setKeepOpenIndex = _useState2[1], _ref3 = ((_mergedItems$current = mergedItems[current]) === null || _mergedItems$current === void 0 ? void 0 : _mergedItems$current.data) || {}, src = _ref3.src, imgCommonProps = _objectWithoutProperties(_ref3, _excluded2$1), _useMergedState3 = useMergedState(!!previewVisible, {
    value: previewVisible,
    onChange: /* @__PURE__ */ __name(function(val, prevVal) {
      onVisibleChange == null || onVisibleChange(val, prevVal, current);
    }, "onChange")
  }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), isShowPreview = _useMergedState4[0], setShowPreview = _useMergedState4[1], _useState3 = useState(null), _useState4 = _slicedToArray(_useState3, 2), mousePosition2 = _useState4[0], setMousePosition = _useState4[1], onPreviewFromImage = React.useCallback(function(id, imageSrc, mouseX, mouseY) {
    var index = fromItems ? mergedItems.findIndex(function(item) {
      return item.data.src === imageSrc;
    }) : mergedItems.findIndex(function(item) {
      return item.id === id;
    });
    setCurrent(index < 0 ? 0 : index), setShowPreview(!0), setMousePosition({
      x: mouseX,
      y: mouseY
    }), setKeepOpenIndex(!0);
  }, [mergedItems, fromItems]);
  React.useEffect(function() {
    isShowPreview ? keepOpenIndex || setCurrent(0) : setKeepOpenIndex(!1);
  }, [isShowPreview]);
  var onInternalChange = /* @__PURE__ */ __name(function(next, prev) {
    setCurrent(next), onChange == null || onChange(next, prev);
  }, "onInternalChange"), onPreviewClose = /* @__PURE__ */ __name(function() {
    setShowPreview(!1), setMousePosition(null);
  }, "onPreviewClose"), previewGroupContext = React.useMemo(function() {
    return {
      register,
      onPreview: onPreviewFromImage
    };
  }, [register, onPreviewFromImage]);
  return /* @__PURE__ */ React.createElement(PreviewGroupContext.Provider, {
    value: previewGroupContext
  }, children, /* @__PURE__ */ React.createElement(Preview, _extends({
    "aria-hidden": !isShowPreview,
    movable,
    visible: isShowPreview,
    prefixCls: previewPrefixCls,
    closeIcon,
    onClose: onPreviewClose,
    mousePosition: mousePosition2,
    imgCommonProps,
    src,
    fallback,
    icons: icons2,
    minScale,
    maxScale,
    getContainer,
    current,
    count: mergedItems.length,
    countRender,
    onTransform,
    toolbarRender,
    imageRender,
    onChange: onInternalChange
  }, dialogProps)));
}, "Group"), uid = 0;
function useRegisterImage(canPreview, data) {
  var _React$useState = React.useState(function() {
    return uid += 1, String(uid);
  }), _React$useState2 = _slicedToArray(_React$useState, 1), id = _React$useState2[0], groupContext = React.useContext(PreviewGroupContext), registerData = {
    data,
    canPreview
  };
  return React.useEffect(function() {
    if (groupContext)
      return groupContext.register(id, registerData);
  }, []), React.useEffect(function() {
    groupContext && groupContext.register(id, registerData);
  }, [canPreview, data]), id;
}
__name(useRegisterImage, "useRegisterImage");
var _excluded$5 = ["src", "alt", "onPreviewClose", "prefixCls", "previewPrefixCls", "placeholder", "fallback", "width", "height", "style", "preview", "className", "onClick", "onError", "wrapperClassName", "wrapperStyle", "rootClassName"], _excluded2 = ["src", "visible", "onVisibleChange", "getContainer", "mask", "maskClassName", "movable", "icons", "scaleStep", "minScale", "maxScale", "imageRender", "toolbarRender"], ImageInternal = /* @__PURE__ */ __name(function(props) {
  var imgSrc = props.src, alt = props.alt, onInitialPreviewClose = props.onPreviewClose, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-image" : _props$prefixCls, _props$previewPrefixC = props.previewPrefixCls, previewPrefixCls = _props$previewPrefixC === void 0 ? "".concat(prefixCls, "-preview") : _props$previewPrefixC, placeholder = props.placeholder, fallback = props.fallback, width = props.width, height = props.height, style = props.style, _props$preview = props.preview, preview = _props$preview === void 0 ? !0 : _props$preview, className = props.className, onClick = props.onClick, onError = props.onError, wrapperClassName = props.wrapperClassName, wrapperStyle = props.wrapperStyle, rootClassName = props.rootClassName, otherProps = _objectWithoutProperties(props, _excluded$5), isCustomPlaceholder = placeholder && placeholder !== !0, _ref = _typeof(preview) === "object" ? preview : {}, previewSrc = _ref.src, _ref$visible = _ref.visible, previewVisible = _ref$visible === void 0 ? void 0 : _ref$visible, _ref$onVisibleChange = _ref.onVisibleChange, onPreviewVisibleChange = _ref$onVisibleChange === void 0 ? onInitialPreviewClose : _ref$onVisibleChange, _ref$getContainer = _ref.getContainer, getPreviewContainer = _ref$getContainer === void 0 ? void 0 : _ref$getContainer, previewMask = _ref.mask, maskClassName = _ref.maskClassName, movable = _ref.movable, icons2 = _ref.icons, scaleStep = _ref.scaleStep, minScale = _ref.minScale, maxScale = _ref.maxScale, imageRender = _ref.imageRender, toolbarRender = _ref.toolbarRender, dialogProps = _objectWithoutProperties(_ref, _excluded2), src = previewSrc ?? imgSrc, _useMergedState = useMergedState(!!previewVisible, {
    value: previewVisible,
    onChange: onPreviewVisibleChange
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), isShowPreview = _useMergedState2[0], setShowPreview = _useMergedState2[1], _useStatus = useStatus({
    src: imgSrc,
    isCustomPlaceholder,
    fallback
  }), _useStatus2 = _slicedToArray(_useStatus, 3), getImgRef = _useStatus2[0], srcAndOnload = _useStatus2[1], status = _useStatus2[2], _useState = useState(null), _useState2 = _slicedToArray(_useState, 2), mousePosition2 = _useState2[0], setMousePosition = _useState2[1], groupContext = useContext(PreviewGroupContext), canPreview = !!preview, onPreviewClose = /* @__PURE__ */ __name(function() {
    setShowPreview(!1), setMousePosition(null);
  }, "onPreviewClose"), wrapperClass = cn(prefixCls, wrapperClassName, rootClassName, _defineProperty({}, "".concat(prefixCls, "-error"), status === "error")), imgCommonProps = useMemo(function() {
    var obj = {};
    return COMMON_PROPS.forEach(function(prop) {
      props[prop] !== void 0 && (obj[prop] = props[prop]);
    }), obj;
  }, COMMON_PROPS.map(function(prop) {
    return props[prop];
  })), registerData = useMemo(function() {
    return _objectSpread2(_objectSpread2({}, imgCommonProps), {}, {
      src
    });
  }, [src, imgCommonProps]), imageId = useRegisterImage(canPreview, registerData), onPreview = /* @__PURE__ */ __name(function(e2) {
    var _getOffset = getOffset(e2.target), left = _getOffset.left, top = _getOffset.top;
    groupContext ? groupContext.onPreview(imageId, src, left, top) : (setMousePosition({
      x: left,
      y: top
    }), setShowPreview(!0)), onClick == null || onClick(e2);
  }, "onPreview");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", _extends({}, otherProps, {
    className: wrapperClass,
    onClick: canPreview ? onPreview : onClick,
    style: _objectSpread2({
      width,
      height
    }, wrapperStyle)
  }), /* @__PURE__ */ React.createElement("img", _extends({}, imgCommonProps, {
    className: cn("".concat(prefixCls, "-img"), _defineProperty({}, "".concat(prefixCls, "-img-placeholder"), placeholder === !0), className),
    style: _objectSpread2({
      height
    }, style),
    ref: getImgRef
  }, srcAndOnload, {
    width,
    height,
    onError
  })), status === "loading" && /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "".concat(prefixCls, "-placeholder")
  }, placeholder), previewMask && canPreview && /* @__PURE__ */ React.createElement("div", {
    className: cn("".concat(prefixCls, "-mask"), maskClassName),
    style: {
      display: (style == null ? void 0 : style.display) === "none" ? "none" : void 0
    }
  }, previewMask)), !groupContext && canPreview && /* @__PURE__ */ React.createElement(Preview, _extends({
    "aria-hidden": !isShowPreview,
    visible: isShowPreview,
    prefixCls: previewPrefixCls,
    onClose: onPreviewClose,
    mousePosition: mousePosition2,
    src,
    alt,
    imageInfo: {
      width,
      height
    },
    fallback,
    getContainer: getPreviewContainer,
    icons: icons2,
    movable,
    scaleStep,
    minScale,
    maxScale,
    rootClassName,
    imageRender,
    imgCommonProps,
    toolbarRender
  }, dialogProps)));
}, "ImageInternal");
ImageInternal.PreviewGroup = Group;
process.env.NODE_ENV !== "production" && (ImageInternal.displayName = "Image");
var RotateLeftOutlined$1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z" } }, { tag: "path", attrs: { d: "M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z" } }] }, name: "rotate-left", theme: "outlined" }, RotateLeftOutlined = /* @__PURE__ */ __name(function(props, ref) {
  return /* @__PURE__ */ React.createElement(Icon, _extends({}, props, {
    ref,
    icon: RotateLeftOutlined$1
  }));
}, "RotateLeftOutlined"), RefIcon$5 = /* @__PURE__ */ React.forwardRef(RotateLeftOutlined);
process.env.NODE_ENV !== "production" && (RefIcon$5.displayName = "RotateLeftOutlined");
var RotateRightOutlined$1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z" } }, { tag: "path", attrs: { d: "M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z" } }] }, name: "rotate-right", theme: "outlined" }, RotateRightOutlined = /* @__PURE__ */ __name(function(props, ref) {
  return /* @__PURE__ */ React.createElement(Icon, _extends({}, props, {
    ref,
    icon: RotateRightOutlined$1
  }));
}, "RotateRightOutlined"), RefIcon$4 = /* @__PURE__ */ React.forwardRef(RotateRightOutlined);
process.env.NODE_ENV !== "production" && (RefIcon$4.displayName = "RotateRightOutlined");
var SwapOutlined$1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, name: "swap", theme: "outlined" }, SwapOutlined = /* @__PURE__ */ __name(function(props, ref) {
  return /* @__PURE__ */ React.createElement(Icon, _extends({}, props, {
    ref,
    icon: SwapOutlined$1
  }));
}, "SwapOutlined"), RefIcon$3 = /* @__PURE__ */ React.forwardRef(SwapOutlined);
process.env.NODE_ENV !== "production" && (RefIcon$3.displayName = "SwapOutlined");
var ZoomInOutlined$1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, name: "zoom-in", theme: "outlined" }, ZoomInOutlined = /* @__PURE__ */ __name(function(props, ref) {
  return /* @__PURE__ */ React.createElement(Icon, _extends({}, props, {
    ref,
    icon: ZoomInOutlined$1
  }));
}, "ZoomInOutlined"), RefIcon$2 = /* @__PURE__ */ React.forwardRef(ZoomInOutlined);
process.env.NODE_ENV !== "production" && (RefIcon$2.displayName = "ZoomInOutlined");
var ZoomOutOutlined$1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, name: "zoom-out", theme: "outlined" }, ZoomOutOutlined = /* @__PURE__ */ __name(function(props, ref) {
  return /* @__PURE__ */ React.createElement(Icon, _extends({}, props, {
    ref,
    icon: ZoomOutOutlined$1
  }));
}, "ZoomOutOutlined"), RefIcon$1 = /* @__PURE__ */ React.forwardRef(ZoomOutOutlined);
process.env.NODE_ENV !== "production" && (RefIcon$1.displayName = "ZoomOutOutlined");
const genBoxStyle = /* @__PURE__ */ __name((position) => ({
  position: position || "absolute",
  inset: 0
}), "genBoxStyle"), genImageMaskStyle = /* @__PURE__ */ __name((token) => {
  const {
    iconCls,
    motionDurationSlow,
    paddingXXS,
    marginXXS,
    prefixCls,
    colorTextLightSolid
  } = token;
  return {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: colorTextLightSolid,
    background: new TinyColor("#000").setAlpha(0.5).toRgbString(),
    cursor: "pointer",
    opacity: 0,
    transition: `opacity ${motionDurationSlow}`,
    [`.${prefixCls}-mask-info`]: Object.assign(Object.assign({}, textEllipsis), {
      padding: `0 ${unit(paddingXXS)}`,
      [iconCls]: {
        marginInlineEnd: marginXXS,
        svg: {
          verticalAlign: "baseline"
        }
      }
    })
  };
}, "genImageMaskStyle"), genPreviewOperationsStyle = /* @__PURE__ */ __name((token) => {
  const {
    previewCls,
    modalMaskBg,
    paddingSM,
    marginXL,
    margin,
    paddingLG,
    previewOperationColorDisabled,
    previewOperationHoverColor,
    motionDurationSlow,
    iconCls,
    colorTextLightSolid
  } = token, operationBg = new TinyColor(modalMaskBg).setAlpha(0.1), operationBgHover = operationBg.clone().setAlpha(0.2);
  return {
    [`${previewCls}-footer`]: {
      position: "fixed",
      bottom: marginXL,
      left: {
        _skip_check_: !0,
        value: "50%"
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: token.previewOperationColor,
      transform: "translateX(-50%)"
    },
    [`${previewCls}-progress`]: {
      marginBottom: margin
    },
    [`${previewCls}-close`]: {
      position: "fixed",
      top: marginXL,
      right: {
        _skip_check_: !0,
        value: marginXL
      },
      display: "flex",
      color: colorTextLightSolid,
      backgroundColor: operationBg.toRgbString(),
      borderRadius: "50%",
      padding: paddingSM,
      outline: 0,
      border: 0,
      cursor: "pointer",
      transition: `all ${motionDurationSlow}`,
      "&:hover": {
        backgroundColor: operationBgHover.toRgbString()
      },
      [`& > ${iconCls}`]: {
        fontSize: token.previewOperationSize
      }
    },
    [`${previewCls}-operations`]: {
      display: "flex",
      alignItems: "center",
      padding: `0 ${unit(paddingLG)}`,
      backgroundColor: operationBg.toRgbString(),
      borderRadius: 100,
      "&-operation": {
        marginInlineStart: paddingSM,
        padding: paddingSM,
        cursor: "pointer",
        transition: `all ${motionDurationSlow}`,
        userSelect: "none",
        [`&:not(${previewCls}-operations-operation-disabled):hover > ${iconCls}`]: {
          color: previewOperationHoverColor
        },
        "&-disabled": {
          color: previewOperationColorDisabled,
          cursor: "not-allowed"
        },
        "&:first-of-type": {
          marginInlineStart: 0
        },
        [`& > ${iconCls}`]: {
          fontSize: token.previewOperationSize
        }
      }
    }
  };
}, "genPreviewOperationsStyle"), genPreviewSwitchStyle = /* @__PURE__ */ __name((token) => {
  const {
    modalMaskBg,
    iconCls,
    previewOperationColorDisabled,
    previewCls,
    zIndexPopup,
    motionDurationSlow
  } = token, operationBg = new TinyColor(modalMaskBg).setAlpha(0.1), operationBgHover = operationBg.clone().setAlpha(0.2);
  return {
    [`${previewCls}-switch-left, ${previewCls}-switch-right`]: {
      position: "fixed",
      insetBlockStart: "50%",
      zIndex: token.calc(zIndexPopup).add(1).equal(),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: token.imagePreviewSwitchSize,
      height: token.imagePreviewSwitchSize,
      marginTop: token.calc(token.imagePreviewSwitchSize).mul(-1).div(2).equal(),
      color: token.previewOperationColor,
      background: operationBg.toRgbString(),
      borderRadius: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      transition: `all ${motionDurationSlow}`,
      userSelect: "none",
      "&:hover": {
        background: operationBgHover.toRgbString()
      },
      "&-disabled": {
        "&, &:hover": {
          color: previewOperationColorDisabled,
          background: "transparent",
          cursor: "not-allowed",
          [`> ${iconCls}`]: {
            cursor: "not-allowed"
          }
        }
      },
      [`> ${iconCls}`]: {
        fontSize: token.previewOperationSize
      }
    },
    [`${previewCls}-switch-left`]: {
      insetInlineStart: token.marginSM
    },
    [`${previewCls}-switch-right`]: {
      insetInlineEnd: token.marginSM
    }
  };
}, "genPreviewSwitchStyle"), genImagePreviewStyle = /* @__PURE__ */ __name((token) => {
  const {
    motionEaseOut,
    previewCls,
    motionDurationSlow,
    componentCls
  } = token;
  return [
    {
      [`${componentCls}-preview-root`]: {
        [previewCls]: {
          height: "100%",
          textAlign: "center",
          pointerEvents: "none"
        },
        [`${previewCls}-body`]: Object.assign(Object.assign({}, genBoxStyle()), {
          overflow: "hidden"
        }),
        [`${previewCls}-img`]: {
          maxWidth: "100%",
          maxHeight: "70%",
          verticalAlign: "middle",
          transform: "scale3d(1, 1, 1)",
          cursor: "grab",
          transition: `transform ${motionDurationSlow} ${motionEaseOut} 0s`,
          userSelect: "none",
          "&-wrapper": Object.assign(Object.assign({}, genBoxStyle()), {
            transition: `transform ${motionDurationSlow} ${motionEaseOut} 0s`,
            // https://github.com/ant-design/ant-design/issues/39913
            // TailwindCSS will reset img default style.
            // Let's set back.
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& > *": {
              pointerEvents: "auto"
            },
            "&::before": {
              display: "inline-block",
              width: 1,
              height: "50%",
              marginInlineEnd: -1,
              content: '""'
            }
          })
        },
        [`${previewCls}-moving`]: {
          [`${previewCls}-preview-img`]: {
            cursor: "grabbing",
            "&-wrapper": {
              transitionDuration: "0s"
            }
          }
        }
      }
    },
    // Override
    {
      [`${componentCls}-preview-root`]: {
        [`${previewCls}-wrap`]: {
          zIndex: token.zIndexPopup
        }
      }
    },
    // Preview operations & switch
    {
      [`${componentCls}-preview-operations-wrapper`]: {
        position: "fixed",
        zIndex: token.calc(token.zIndexPopup).add(1).equal()
      },
      "&": [genPreviewOperationsStyle(token), genPreviewSwitchStyle(token)]
    }
  ];
}, "genImagePreviewStyle"), genImageStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls
  } = token;
  return {
    // ============================== image ==============================
    [componentCls]: {
      position: "relative",
      display: "inline-block",
      [`${componentCls}-img`]: {
        width: "100%",
        height: "auto",
        verticalAlign: "middle"
      },
      [`${componentCls}-img-placeholder`]: {
        backgroundColor: token.colorBgContainerDisabled,
        backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "30%"
      },
      [`${componentCls}-mask`]: Object.assign({}, genImageMaskStyle(token)),
      [`${componentCls}-mask:hover`]: {
        opacity: 1
      },
      [`${componentCls}-placeholder`]: Object.assign({}, genBoxStyle())
    }
  };
}, "genImageStyle"), genPreviewMotion = /* @__PURE__ */ __name((token) => {
  const {
    previewCls
  } = token;
  return {
    [`${previewCls}-root`]: initZoomMotion(token, "zoom"),
    "&": initFadeMotion(token, !0)
  };
}, "genPreviewMotion"), prepareComponentToken$5 = /* @__PURE__ */ __name((token) => ({
  zIndexPopup: token.zIndexPopupBase + 80,
  previewOperationColor: new TinyColor(token.colorTextLightSolid).setAlpha(0.65).toRgbString(),
  previewOperationHoverColor: new TinyColor(token.colorTextLightSolid).setAlpha(0.85).toRgbString(),
  previewOperationColorDisabled: new TinyColor(token.colorTextLightSolid).setAlpha(0.25).toRgbString(),
  previewOperationSize: token.fontSizeIcon * 1.5
  // FIXME: fontSizeIconLG
}), "prepareComponentToken$5"), useStyle$5 = genStyleHooks("Image", (token) => {
  const previewCls = `${token.componentCls}-preview`, imageToken = merge(token, {
    previewCls,
    modalMaskBg: new TinyColor("#000").setAlpha(0.45).toRgbString(),
    // FIXME: Shared Token
    imagePreviewSwitchSize: token.controlHeightLG
  });
  return [genImageStyle(imageToken), genImagePreviewStyle(imageToken), genModalMaskStyle(merge(imageToken, {
    componentCls: previewCls
  })), genPreviewMotion(imageToken)];
}, prepareComponentToken$5);
var __rest$9 = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
const icons = {
  rotateLeft: /* @__PURE__ */ React.createElement(RefIcon$5, null),
  rotateRight: /* @__PURE__ */ React.createElement(RefIcon$4, null),
  zoomIn: /* @__PURE__ */ React.createElement(RefIcon$2, null),
  zoomOut: /* @__PURE__ */ React.createElement(RefIcon$1, null),
  close: /* @__PURE__ */ React.createElement(RefIcon$a, null),
  left: /* @__PURE__ */ React.createElement(RefIcon$d, null),
  right: /* @__PURE__ */ React.createElement(RefIcon$b, null),
  flipX: /* @__PURE__ */ React.createElement(RefIcon$3, null),
  flipY: /* @__PURE__ */ React.createElement(RefIcon$3, {
    rotate: 90
  })
}, InternalPreviewGroup = /* @__PURE__ */ __name((_a) => {
  var {
    previewPrefixCls: customizePrefixCls,
    preview
  } = _a, otherProps = __rest$9(_a, ["previewPrefixCls", "preview"]);
  const {
    getPrefixCls
  } = React.useContext(ConfigContext), prefixCls = getPrefixCls("image", customizePrefixCls), previewPrefixCls = `${prefixCls}-preview`, rootPrefixCls = getPrefixCls(), rootCls = useCSSVarCls(prefixCls), [wrapCSSVar, hashId, cssVarCls] = useStyle$5(prefixCls, rootCls), [zIndex] = useZIndex("ImagePreview", typeof preview == "object" ? preview.zIndex : void 0), mergedPreview = React.useMemo(() => {
    var _a2;
    if (preview === !1)
      return preview;
    const _preview = typeof preview == "object" ? preview : {}, mergedRootClassName = cn(hashId, cssVarCls, rootCls, (_a2 = _preview.rootClassName) !== null && _a2 !== void 0 ? _a2 : "");
    return Object.assign(Object.assign({}, _preview), {
      transitionName: getTransitionName(rootPrefixCls, "zoom", _preview.transitionName),
      maskTransitionName: getTransitionName(rootPrefixCls, "fade", _preview.maskTransitionName),
      rootClassName: mergedRootClassName,
      zIndex
    });
  }, [preview]);
  return wrapCSSVar(/* @__PURE__ */ React.createElement(ImageInternal.PreviewGroup, Object.assign({
    preview: mergedPreview,
    previewPrefixCls,
    icons
  }, otherProps)));
}, "InternalPreviewGroup");
var __rest$8 = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
const Image$1 = /* @__PURE__ */ __name((props) => {
  var _a;
  const {
    prefixCls: customizePrefixCls,
    preview,
    className,
    rootClassName,
    style
  } = props, otherProps = __rest$8(props, ["prefixCls", "preview", "className", "rootClassName", "style"]), {
    getPrefixCls,
    locale: contextLocale = localeValues,
    getPopupContainer: getContextPopupContainer,
    image: image2
  } = React.useContext(ConfigContext), prefixCls = getPrefixCls("image", customizePrefixCls), rootPrefixCls = getPrefixCls(), imageLocale = contextLocale.Image || localeValues.Image, rootCls = useCSSVarCls(prefixCls), [wrapCSSVar, hashId, cssVarCls] = useStyle$5(prefixCls, rootCls), mergedRootClassName = cn(rootClassName, hashId, cssVarCls, rootCls), mergedClassName = cn(className, hashId, image2 == null ? void 0 : image2.className), [zIndex] = useZIndex("ImagePreview", typeof preview == "object" ? preview.zIndex : void 0), mergedPreview = React.useMemo(() => {
    var _a2;
    if (preview === !1)
      return preview;
    const _preview = typeof preview == "object" ? preview : {}, {
      getContainer,
      closeIcon,
      rootClassName: rootClassName2
    } = _preview, restPreviewProps = __rest$8(_preview, ["getContainer", "closeIcon", "rootClassName"]);
    return Object.assign(Object.assign({
      mask: /* @__PURE__ */ React.createElement("div", {
        className: `${prefixCls}-mask-info`
      }, /* @__PURE__ */ React.createElement(RefIcon$e, null), imageLocale == null ? void 0 : imageLocale.preview),
      icons
    }, restPreviewProps), {
      rootClassName: cn(mergedRootClassName, rootClassName2),
      getContainer: getContainer ?? getContextPopupContainer,
      transitionName: getTransitionName(rootPrefixCls, "zoom", _preview.transitionName),
      maskTransitionName: getTransitionName(rootPrefixCls, "fade", _preview.maskTransitionName),
      zIndex,
      closeIcon: closeIcon ?? ((_a2 = image2 == null ? void 0 : image2.preview) === null || _a2 === void 0 ? void 0 : _a2.closeIcon)
    });
  }, [preview, imageLocale, (_a = image2 == null ? void 0 : image2.preview) === null || _a === void 0 ? void 0 : _a.closeIcon]), mergedStyle = Object.assign(Object.assign({}, image2 == null ? void 0 : image2.style), style);
  return wrapCSSVar(/* @__PURE__ */ React.createElement(ImageInternal, Object.assign({
    prefixCls,
    preview: mergedPreview,
    rootClassName: mergedRootClassName,
    className: mergedClassName,
    style: mergedStyle
  }, otherProps)));
}, "Image$1");
Image$1.PreviewGroup = InternalPreviewGroup;
process.env.NODE_ENV !== "production" && (Image$1.displayName = "Image");
const ListContext = /* @__PURE__ */ React__default.createContext({});
ListContext.Consumer;
var __rest$7 = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
const Meta = /* @__PURE__ */ __name((_a) => {
  var {
    prefixCls: customizePrefixCls,
    className,
    avatar,
    title,
    description
  } = _a, others = __rest$7(_a, ["prefixCls", "className", "avatar", "title", "description"]);
  const {
    getPrefixCls
  } = useContext(ConfigContext), prefixCls = getPrefixCls("list", customizePrefixCls), classString = cn(`${prefixCls}-item-meta`, className), content = /* @__PURE__ */ React__default.createElement("div", {
    className: `${prefixCls}-item-meta-content`
  }, title && /* @__PURE__ */ React__default.createElement("h4", {
    className: `${prefixCls}-item-meta-title`
  }, title), description && /* @__PURE__ */ React__default.createElement("div", {
    className: `${prefixCls}-item-meta-description`
  }, description));
  return /* @__PURE__ */ React__default.createElement("div", Object.assign({}, others, {
    className: classString
  }), avatar && /* @__PURE__ */ React__default.createElement("div", {
    className: `${prefixCls}-item-meta-avatar`
  }, avatar), (title || description) && content);
}, "Meta"), InternalItem = /* @__PURE__ */ React__default.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    children,
    actions,
    extra,
    styles: styles2,
    className,
    classNames: customizeClassNames,
    colStyle
  } = props, others = __rest$7(props, ["prefixCls", "children", "actions", "extra", "styles", "className", "classNames", "colStyle"]), {
    grid,
    itemLayout
  } = useContext(ListContext), {
    getPrefixCls,
    list
  } = useContext(ConfigContext), moduleClass = /* @__PURE__ */ __name((moduleName) => {
    var _a, _b;
    return cn((_b = (_a = list == null ? void 0 : list.item) === null || _a === void 0 ? void 0 : _a.classNames) === null || _b === void 0 ? void 0 : _b[moduleName], customizeClassNames == null ? void 0 : customizeClassNames[moduleName]);
  }, "moduleClass"), moduleStyle = /* @__PURE__ */ __name((moduleName) => {
    var _a, _b;
    return Object.assign(Object.assign({}, (_b = (_a = list == null ? void 0 : list.item) === null || _a === void 0 ? void 0 : _a.styles) === null || _b === void 0 ? void 0 : _b[moduleName]), styles2 == null ? void 0 : styles2[moduleName]);
  }, "moduleStyle"), isItemContainsTextNodeAndNotSingular = /* @__PURE__ */ __name(() => {
    let result = !1;
    return Children.forEach(children, (element) => {
      typeof element == "string" && (result = !0);
    }), result && Children.count(children) > 1;
  }, "isItemContainsTextNodeAndNotSingular"), isFlexMode = /* @__PURE__ */ __name(() => itemLayout === "vertical" ? !!extra : !isItemContainsTextNodeAndNotSingular(), "isFlexMode"), prefixCls = getPrefixCls("list", customizePrefixCls), actionsContent = actions && actions.length > 0 && /* @__PURE__ */ React__default.createElement("ul", {
    className: cn(`${prefixCls}-item-action`, moduleClass("actions")),
    key: "actions",
    style: moduleStyle("actions")
  }, actions.map((action, i2) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ React__default.createElement("li", {
      key: `${prefixCls}-item-action-${i2}`
    }, action, i2 !== actions.length - 1 && /* @__PURE__ */ React__default.createElement("em", {
      className: `${prefixCls}-item-action-split`
    }))
  ))), Element2 = grid ? "div" : "li", itemChildren = /* @__PURE__ */ React__default.createElement(Element2, Object.assign({}, others, grid ? {} : {
    ref
  }, {
    className: cn(`${prefixCls}-item`, {
      [`${prefixCls}-item-no-flex`]: !isFlexMode()
    }, className)
  }), itemLayout === "vertical" && extra ? [/* @__PURE__ */ React__default.createElement("div", {
    className: `${prefixCls}-item-main`,
    key: "content"
  }, children, actionsContent), /* @__PURE__ */ React__default.createElement("div", {
    className: cn(`${prefixCls}-item-extra`, moduleClass("extra")),
    key: "extra",
    style: moduleStyle("extra")
  }, extra)] : [children, actionsContent, cloneElement(extra, {
    key: "extra"
  })]);
  return grid ? /* @__PURE__ */ React__default.createElement(Col$1, {
    ref,
    flex: 1,
    style: colStyle
  }, itemChildren) : itemChildren;
}), Item = InternalItem;
Item.Meta = Meta;
const genBorderedStyle = /* @__PURE__ */ __name((token) => {
  const {
    listBorderedCls,
    componentCls,
    paddingLG,
    margin,
    itemPaddingSM,
    itemPaddingLG,
    marginLG,
    borderRadiusLG
  } = token;
  return {
    [listBorderedCls]: {
      border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
      borderRadius: borderRadiusLG,
      [`${componentCls}-header,${componentCls}-footer,${componentCls}-item`]: {
        paddingInline: paddingLG
      },
      [`${componentCls}-pagination`]: {
        margin: `${unit(margin)} ${unit(marginLG)}`
      }
    },
    [`${listBorderedCls}${componentCls}-sm`]: {
      [`${componentCls}-item,${componentCls}-header,${componentCls}-footer`]: {
        padding: itemPaddingSM
      }
    },
    [`${listBorderedCls}${componentCls}-lg`]: {
      [`${componentCls}-item,${componentCls}-header,${componentCls}-footer`]: {
        padding: itemPaddingLG
      }
    }
  };
}, "genBorderedStyle"), genResponsiveStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    screenSM,
    screenMD,
    marginLG,
    marginSM,
    margin
  } = token;
  return {
    [`@media screen and (max-width:${screenMD}px)`]: {
      [componentCls]: {
        [`${componentCls}-item`]: {
          [`${componentCls}-item-action`]: {
            marginInlineStart: marginLG
          }
        }
      },
      [`${componentCls}-vertical`]: {
        [`${componentCls}-item`]: {
          [`${componentCls}-item-extra`]: {
            marginInlineStart: marginLG
          }
        }
      }
    },
    [`@media screen and (max-width: ${screenSM}px)`]: {
      [componentCls]: {
        [`${componentCls}-item`]: {
          flexWrap: "wrap",
          [`${componentCls}-action`]: {
            marginInlineStart: marginSM
          }
        }
      },
      [`${componentCls}-vertical`]: {
        [`${componentCls}-item`]: {
          flexWrap: "wrap-reverse",
          [`${componentCls}-item-main`]: {
            minWidth: token.contentWidth
          },
          [`${componentCls}-item-extra`]: {
            margin: `auto auto ${unit(margin)}`
          }
        }
      }
    }
  };
}, "genResponsiveStyle"), genBaseStyle$2 = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    antCls,
    controlHeight,
    minHeight,
    paddingSM,
    marginLG,
    padding,
    itemPadding,
    colorPrimary,
    itemPaddingSM,
    itemPaddingLG,
    paddingXS,
    margin,
    colorText,
    colorTextDescription,
    motionDurationSlow,
    lineWidth,
    headerBg,
    footerBg,
    emptyTextPadding,
    metaMarginBottom,
    avatarMarginRight,
    titleMarginBottom,
    descriptionFontSize
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      position: "relative",
      "*": {
        outline: "none"
      },
      [`${componentCls}-header`]: {
        background: headerBg
      },
      [`${componentCls}-footer`]: {
        background: footerBg
      },
      [`${componentCls}-header, ${componentCls}-footer`]: {
        paddingBlock: paddingSM
      },
      [`${componentCls}-pagination`]: {
        marginBlockStart: marginLG,
        // https://github.com/ant-design/ant-design/issues/20037
        [`${antCls}-pagination-options`]: {
          textAlign: "start"
        }
      },
      [`${componentCls}-spin`]: {
        minHeight,
        textAlign: "center"
      },
      [`${componentCls}-items`]: {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      [`${componentCls}-item`]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: itemPadding,
        color: colorText,
        [`${componentCls}-item-meta`]: {
          display: "flex",
          flex: 1,
          alignItems: "flex-start",
          maxWidth: "100%",
          [`${componentCls}-item-meta-avatar`]: {
            marginInlineEnd: avatarMarginRight
          },
          [`${componentCls}-item-meta-content`]: {
            flex: "1 0",
            width: 0,
            color: colorText
          },
          [`${componentCls}-item-meta-title`]: {
            margin: `0 0 ${unit(token.marginXXS)} 0`,
            color: colorText,
            fontSize: token.fontSize,
            lineHeight: token.lineHeight,
            "> a": {
              color: colorText,
              transition: `all ${motionDurationSlow}`,
              "&:hover": {
                color: colorPrimary
              }
            }
          },
          [`${componentCls}-item-meta-description`]: {
            color: colorTextDescription,
            fontSize: descriptionFontSize,
            lineHeight: token.lineHeight
          }
        },
        [`${componentCls}-item-action`]: {
          flex: "0 0 auto",
          marginInlineStart: token.marginXXL,
          padding: 0,
          fontSize: 0,
          listStyle: "none",
          "& > li": {
            position: "relative",
            display: "inline-block",
            padding: `0 ${unit(paddingXS)}`,
            color: colorTextDescription,
            fontSize: token.fontSize,
            lineHeight: token.lineHeight,
            textAlign: "center",
            "&:first-child": {
              paddingInlineStart: 0
            }
          },
          [`${componentCls}-item-action-split`]: {
            position: "absolute",
            insetBlockStart: "50%",
            insetInlineEnd: 0,
            width: lineWidth,
            height: token.calc(token.fontHeight).sub(token.calc(token.marginXXS).mul(2)).equal(),
            transform: "translateY(-50%)",
            backgroundColor: token.colorSplit
          }
        }
      },
      [`${componentCls}-empty`]: {
        padding: `${unit(padding)} 0`,
        color: colorTextDescription,
        fontSize: token.fontSizeSM,
        textAlign: "center"
      },
      [`${componentCls}-empty-text`]: {
        padding: emptyTextPadding,
        color: token.colorTextDisabled,
        fontSize: token.fontSize,
        textAlign: "center"
      },
      // ============================ without flex ============================
      [`${componentCls}-item-no-flex`]: {
        display: "block"
      }
    }),
    [`${componentCls}-grid ${antCls}-col > ${componentCls}-item`]: {
      display: "block",
      maxWidth: "100%",
      marginBlockEnd: margin,
      paddingBlock: 0,
      borderBlockEnd: "none"
    },
    [`${componentCls}-vertical ${componentCls}-item`]: {
      alignItems: "initial",
      [`${componentCls}-item-main`]: {
        display: "block",
        flex: 1
      },
      [`${componentCls}-item-extra`]: {
        marginInlineStart: marginLG
      },
      [`${componentCls}-item-meta`]: {
        marginBlockEnd: metaMarginBottom,
        [`${componentCls}-item-meta-title`]: {
          marginBlockStart: 0,
          marginBlockEnd: titleMarginBottom,
          color: colorText,
          fontSize: token.fontSizeLG,
          lineHeight: token.lineHeightLG
        }
      },
      [`${componentCls}-item-action`]: {
        marginBlockStart: padding,
        marginInlineStart: "auto",
        "> li": {
          padding: `0 ${unit(padding)}`,
          "&:first-child": {
            paddingInlineStart: 0
          }
        }
      }
    },
    [`${componentCls}-split ${componentCls}-item`]: {
      borderBlockEnd: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
      "&:last-child": {
        borderBlockEnd: "none"
      }
    },
    [`${componentCls}-split ${componentCls}-header`]: {
      borderBlockEnd: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
    },
    [`${componentCls}-split${componentCls}-empty ${componentCls}-footer`]: {
      borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
    },
    [`${componentCls}-loading ${componentCls}-spin-nested-loading`]: {
      minHeight: controlHeight
    },
    [`${componentCls}-split${componentCls}-something-after-last-item ${antCls}-spin-container > ${componentCls}-items > ${componentCls}-item:last-child`]: {
      borderBlockEnd: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
    },
    [`${componentCls}-lg ${componentCls}-item`]: {
      padding: itemPaddingLG
    },
    [`${componentCls}-sm ${componentCls}-item`]: {
      padding: itemPaddingSM
    },
    // Horizontal
    [`${componentCls}:not(${componentCls}-vertical)`]: {
      [`${componentCls}-item-no-flex`]: {
        [`${componentCls}-item-action`]: {
          float: "right"
        }
      }
    }
  };
}, "genBaseStyle$2"), prepareComponentToken$4 = /* @__PURE__ */ __name((token) => ({
  contentWidth: 220,
  itemPadding: `${unit(token.paddingContentVertical)} 0`,
  itemPaddingSM: `${unit(token.paddingContentVerticalSM)} ${unit(token.paddingContentHorizontal)}`,
  itemPaddingLG: `${unit(token.paddingContentVerticalLG)} ${unit(token.paddingContentHorizontalLG)}`,
  headerBg: "transparent",
  footerBg: "transparent",
  emptyTextPadding: token.padding,
  metaMarginBottom: token.padding,
  avatarMarginRight: token.padding,
  titleMarginBottom: token.paddingSM,
  descriptionFontSize: token.fontSize
}), "prepareComponentToken$4"), useStyle$4 = genStyleHooks("List", (token) => {
  const listToken = merge(token, {
    listBorderedCls: `${token.componentCls}-bordered`,
    minHeight: token.controlHeightLG
  });
  return [genBaseStyle$2(listToken), genBorderedStyle(listToken), genResponsiveStyle(listToken)];
}, prepareComponentToken$4);
var __rest$6 = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
function InternalList(_a, ref) {
  var {
    pagination: pagination2 = !1,
    prefixCls: customizePrefixCls,
    bordered = !1,
    split = !0,
    className,
    rootClassName,
    style,
    children,
    itemLayout,
    loadMore,
    grid,
    dataSource = [],
    size: customizeSize,
    header: header2,
    footer,
    loading = !1,
    rowKey,
    renderItem: renderItem2,
    locale
  } = _a, rest = __rest$6(_a, ["pagination", "prefixCls", "bordered", "split", "className", "rootClassName", "style", "children", "itemLayout", "loadMore", "grid", "dataSource", "size", "header", "footer", "loading", "rowKey", "renderItem", "locale"]);
  const paginationObj = pagination2 && typeof pagination2 == "object" ? pagination2 : {}, [paginationCurrent, setPaginationCurrent] = React.useState(paginationObj.defaultCurrent || 1), [paginationSize, setPaginationSize] = React.useState(paginationObj.defaultPageSize || 10), {
    getPrefixCls,
    renderEmpty,
    direction,
    list
  } = React.useContext(ConfigContext), defaultPaginationProps = {
    current: 1,
    total: 0
  }, triggerPaginationEvent = /* @__PURE__ */ __name((eventName) => (page, pageSize) => {
    var _a2;
    setPaginationCurrent(page), setPaginationSize(pageSize), pagination2 && ((_a2 = pagination2 == null ? void 0 : pagination2[eventName]) === null || _a2 === void 0 || _a2.call(pagination2, page, pageSize));
  }, "triggerPaginationEvent"), onPaginationChange = triggerPaginationEvent("onChange"), onPaginationShowSizeChange = triggerPaginationEvent("onShowSizeChange"), renderInnerItem = /* @__PURE__ */ __name((item, index) => {
    if (!renderItem2) return null;
    let key;
    return typeof rowKey == "function" ? key = rowKey(item) : rowKey ? key = item[rowKey] : key = item.key, key || (key = `list-item-${index}`), /* @__PURE__ */ React.createElement(React.Fragment, {
      key
    }, renderItem2(item, index));
  }, "renderInnerItem"), isSomethingAfterLastItem = /* @__PURE__ */ __name(() => !!(loadMore || pagination2 || footer), "isSomethingAfterLastItem"), prefixCls = getPrefixCls("list", customizePrefixCls), [wrapCSSVar, hashId, cssVarCls] = useStyle$4(prefixCls);
  let loadingProp = loading;
  typeof loadingProp == "boolean" && (loadingProp = {
    spinning: loadingProp
  });
  const isLoading = !!(loadingProp != null && loadingProp.spinning), mergedSize = useSize(customizeSize);
  let sizeCls = "";
  switch (mergedSize) {
    case "large":
      sizeCls = "lg";
      break;
    case "small":
      sizeCls = "sm";
      break;
  }
  const classString = cn(prefixCls, {
    [`${prefixCls}-vertical`]: itemLayout === "vertical",
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-split`]: split,
    [`${prefixCls}-bordered`]: bordered,
    [`${prefixCls}-loading`]: isLoading,
    [`${prefixCls}-grid`]: !!grid,
    [`${prefixCls}-something-after-last-item`]: isSomethingAfterLastItem(),
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, list == null ? void 0 : list.className, className, rootClassName, hashId, cssVarCls), paginationProps = extendsObject(defaultPaginationProps, {
    total: dataSource.length,
    current: paginationCurrent,
    pageSize: paginationSize
  }, pagination2 || {}), largestPage = Math.ceil(paginationProps.total / paginationProps.pageSize);
  paginationProps.current > largestPage && (paginationProps.current = largestPage);
  const paginationContent = pagination2 && /* @__PURE__ */ React.createElement("div", {
    className: cn(`${prefixCls}-pagination`)
  }, /* @__PURE__ */ React.createElement(Pagination$1, Object.assign({
    align: "end"
  }, paginationProps, {
    onChange: onPaginationChange,
    onShowSizeChange: onPaginationShowSizeChange
  })));
  let splitDataSource = _toConsumableArray(dataSource);
  pagination2 && dataSource.length > (paginationProps.current - 1) * paginationProps.pageSize && (splitDataSource = _toConsumableArray(dataSource).splice((paginationProps.current - 1) * paginationProps.pageSize, paginationProps.pageSize));
  const needResponsive = Object.keys(grid || {}).some((key) => ["xs", "sm", "md", "lg", "xl", "xxl"].includes(key)), screens = useBreakpoint(needResponsive), currentBreakpoint = React.useMemo(() => {
    for (let i2 = 0; i2 < responsiveArray.length; i2 += 1) {
      const breakpoint = responsiveArray[i2];
      if (screens[breakpoint])
        return breakpoint;
    }
  }, [screens]), colStyle = React.useMemo(() => {
    if (!grid)
      return;
    const columnCount = currentBreakpoint && grid[currentBreakpoint] ? grid[currentBreakpoint] : grid.column;
    if (columnCount)
      return {
        width: `${100 / columnCount}%`,
        maxWidth: `${100 / columnCount}%`
      };
  }, [JSON.stringify(grid), currentBreakpoint]);
  let childrenContent = isLoading && /* @__PURE__ */ React.createElement("div", {
    style: {
      minHeight: 53
    }
  });
  if (splitDataSource.length > 0) {
    const items = splitDataSource.map((item, index) => renderInnerItem(item, index));
    childrenContent = grid ? /* @__PURE__ */ React.createElement(Row$1, {
      gutter: grid.gutter
    }, React.Children.map(items, (child) => /* @__PURE__ */ React.createElement("div", {
      key: child == null ? void 0 : child.key,
      style: colStyle
    }, child))) : /* @__PURE__ */ React.createElement("ul", {
      className: `${prefixCls}-items`
    }, items);
  } else !children && !isLoading && (childrenContent = /* @__PURE__ */ React.createElement("div", {
    className: `${prefixCls}-empty-text`
  }, (locale == null ? void 0 : locale.emptyText) || (renderEmpty == null ? void 0 : renderEmpty("List")) || /* @__PURE__ */ React.createElement(DefaultRenderEmpty, {
    componentName: "List"
  })));
  const paginationPosition = paginationProps.position || "bottom", contextValue = React.useMemo(() => ({
    grid,
    itemLayout
  }), [JSON.stringify(grid), itemLayout]);
  return wrapCSSVar(/* @__PURE__ */ React.createElement(ListContext.Provider, {
    value: contextValue
  }, /* @__PURE__ */ React.createElement("div", Object.assign({
    ref,
    style: Object.assign(Object.assign({}, list == null ? void 0 : list.style), style),
    className: classString
  }, rest), (paginationPosition === "top" || paginationPosition === "both") && paginationContent, header2 && /* @__PURE__ */ React.createElement("div", {
    className: `${prefixCls}-header`
  }, header2), /* @__PURE__ */ React.createElement(Spin, Object.assign({}, loadingProp), childrenContent, children), footer && /* @__PURE__ */ React.createElement("div", {
    className: `${prefixCls}-footer`
  }, footer), loadMore || (paginationPosition === "bottom" || paginationPosition === "both") && paginationContent)));
}
__name(InternalList, "InternalList");
const ListWithForwardRef = /* @__PURE__ */ React.forwardRef(InternalList);
process.env.NODE_ENV !== "production" && (ListWithForwardRef.displayName = "List");
const List$1 = ListWithForwardRef;
List$1.Item = Item;
var __rest$5 = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
const PurePanel$1 = /* @__PURE__ */ __name((props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    closeIcon,
    closable,
    type,
    title,
    children,
    footer
  } = props, restProps = __rest$5(props, ["prefixCls", "className", "closeIcon", "closable", "type", "title", "children", "footer"]), {
    getPrefixCls
  } = React.useContext(ConfigContext), rootPrefixCls = getPrefixCls(), prefixCls = customizePrefixCls || getPrefixCls("modal"), rootCls = useCSSVarCls(rootPrefixCls), [wrapCSSVar, hashId, cssVarCls] = useStyle$b(prefixCls, rootCls), confirmPrefixCls = `${prefixCls}-confirm`;
  let additionalProps = {};
  return type ? additionalProps = {
    closable: closable ?? !1,
    title: "",
    footer: "",
    children: /* @__PURE__ */ React.createElement(ConfirmContent, Object.assign({}, props, {
      prefixCls,
      confirmPrefixCls,
      rootPrefixCls,
      content: children
    }))
  } : additionalProps = {
    closable: closable ?? !0,
    title,
    footer: footer !== null && /* @__PURE__ */ React.createElement(Footer$1, Object.assign({}, props)),
    children
  }, wrapCSSVar(/* @__PURE__ */ React.createElement(Panel, Object.assign({
    prefixCls,
    className: cn(hashId, `${prefixCls}-pure-panel`, type && confirmPrefixCls, type && `${confirmPrefixCls}-${type}`, className, cssVarCls, rootCls)
  }, restProps, {
    closeIcon: renderCloseIcon(prefixCls, closeIcon),
    closable
  }, additionalProps)));
}, "PurePanel$1"), PurePanel$2 = withPureRenderTheme(PurePanel$1);
function modalWarn(props) {
  return confirm(withWarn(props));
}
__name(modalWarn, "modalWarn");
const Modal$1 = Modal$2;
Modal$1.useModal = useModal$1;
Modal$1.info = /* @__PURE__ */ __name(function(props) {
  return confirm(withInfo(props));
}, "infoFn");
Modal$1.success = /* @__PURE__ */ __name(function(props) {
  return confirm(withSuccess(props));
}, "successFn");
Modal$1.error = /* @__PURE__ */ __name(function(props) {
  return confirm(withError(props));
}, "errorFn");
Modal$1.warning = modalWarn;
Modal$1.warn = modalWarn;
Modal$1.confirm = /* @__PURE__ */ __name(function(props) {
  return confirm(withConfirm(props));
}, "confirmFn");
Modal$1.destroyAll = /* @__PURE__ */ __name(function() {
  for (; destroyFns.length; ) {
    const close = destroyFns.pop();
    close && close();
  }
}, "destroyAllFn");
Modal$1.config = modalGlobalConfig;
Modal$1._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$2;
process.env.NODE_ENV !== "production" && (Modal$1.displayName = "Modal");
let notification = null, act = /* @__PURE__ */ __name((callback) => callback(), "act"), taskQueue = [], defaultGlobalConfig = {};
function getGlobalContext() {
  const {
    getContainer,
    rtl,
    maxCount,
    top,
    bottom,
    showProgress,
    pauseOnHover
  } = defaultGlobalConfig, mergedContainer = (getContainer == null ? void 0 : getContainer()) || document.body;
  return {
    getContainer: /* @__PURE__ */ __name(() => mergedContainer, "getContainer"),
    rtl,
    maxCount,
    top,
    bottom,
    showProgress,
    pauseOnHover
  };
}
__name(getGlobalContext, "getGlobalContext");
const GlobalHolder = /* @__PURE__ */ React__default.forwardRef((props, ref) => {
  const {
    notificationConfig,
    sync
  } = props, {
    getPrefixCls
  } = useContext(ConfigContext), prefixCls = defaultGlobalConfig.prefixCls || getPrefixCls("notification"), appConfig = useContext(AppConfigContext), [api, holder] = useInternalNotification(Object.assign(Object.assign(Object.assign({}, notificationConfig), {
    prefixCls
  }), appConfig.notification));
  return React__default.useEffect(sync, []), React__default.useImperativeHandle(ref, () => {
    const instance2 = Object.assign({}, api);
    return Object.keys(instance2).forEach((method) => {
      instance2[method] = function() {
        return sync(), api[method].apply(api, arguments);
      };
    }), {
      instance: instance2,
      sync
    };
  }), holder;
}), GlobalHolderWrapper = /* @__PURE__ */ React__default.forwardRef((_2, ref) => {
  const [notificationConfig, setNotificationConfig] = React__default.useState(getGlobalContext), sync = /* @__PURE__ */ __name(() => {
    setNotificationConfig(getGlobalContext);
  }, "sync");
  React__default.useEffect(sync, []);
  const global = globalConfig(), rootPrefixCls = global.getRootPrefixCls(), rootIconPrefixCls = global.getIconPrefixCls(), theme = global.getTheme(), dom = /* @__PURE__ */ React__default.createElement(GlobalHolder, {
    ref,
    sync,
    notificationConfig
  });
  return /* @__PURE__ */ React__default.createElement(ConfigProvider, {
    prefixCls: rootPrefixCls,
    iconPrefixCls: rootIconPrefixCls,
    theme
  }, global.holderRender ? global.holderRender(dom) : dom);
});
function flushNotice() {
  if (!notification) {
    const holderFragment = document.createDocumentFragment(), newNotification = {
      fragment: holderFragment
    };
    notification = newNotification, act(() => {
      getReactRender()(/* @__PURE__ */ React__default.createElement(GlobalHolderWrapper, {
        ref: /* @__PURE__ */ __name((node) => {
          const {
            instance: instance2,
            sync
          } = node || {};
          Promise.resolve().then(() => {
            !newNotification.instance && instance2 && (newNotification.instance = instance2, newNotification.sync = sync, flushNotice());
          });
        }, "ref")
      }), holderFragment);
    });
    return;
  }
  notification.instance && (taskQueue.forEach((task) => {
    switch (task.type) {
      case "open": {
        act(() => {
          notification.instance.open(Object.assign(Object.assign({}, defaultGlobalConfig), task.config));
        });
        break;
      }
      case "destroy":
        act(() => {
          notification == null || notification.instance.destroy(task.key);
        });
        break;
    }
  }), taskQueue = []);
}
__name(flushNotice, "flushNotice");
function setNotificationGlobalConfig(config) {
  defaultGlobalConfig = Object.assign(Object.assign({}, defaultGlobalConfig), config), act(() => {
    var _a;
    (_a = notification == null ? void 0 : notification.sync) === null || _a === void 0 || _a.call(notification);
  });
}
__name(setNotificationGlobalConfig, "setNotificationGlobalConfig");
function open(config) {
  const global = globalConfig();
  process.env.NODE_ENV !== "production" && !global.holderRender && warnContext("notification"), taskQueue.push({
    type: "open",
    config
  }), flushNotice();
}
__name(open, "open");
const destroy = /* @__PURE__ */ __name((key) => {
  taskQueue.push({
    type: "destroy",
    key
  }), flushNotice();
}, "destroy"), methods = ["success", "info", "warning", "error"], baseStaticMethods = {
  open,
  destroy,
  config: setNotificationGlobalConfig,
  useNotification: useNotification$1,
  _InternalPanelDoNotUseOrYouWillBeFired: PurePanel$5
}, staticMethods = baseStaticMethods;
methods.forEach((type) => {
  staticMethods[type] = (config) => open(Object.assign(Object.assign({}, config), {
    type
  }));
});
process.env.NODE_ENV;
process.env.NODE_ENV;
function _createForOfIteratorHelper(r2, e2) {
  var t2 = typeof Symbol < "u" && r2[Symbol.iterator] || r2["@@iterator"];
  if (!t2) {
    if (Array.isArray(r2) || (t2 = _unsupportedIterableToArray(r2)) || e2) {
      t2 && (r2 = t2);
      var _n = 0, F2 = /* @__PURE__ */ __name(function() {
      }, "F");
      return {
        s: F2,
        n: /* @__PURE__ */ __name(function() {
          return _n >= r2.length ? {
            done: !0
          } : {
            done: !1,
            value: r2[_n++]
          };
        }, "n"),
        e: /* @__PURE__ */ __name(function(r3) {
          throw r3;
        }, "e"),
        f: F2
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o2, a2 = !0, u2 = !1;
  return {
    s: /* @__PURE__ */ __name(function() {
      t2 = t2.call(r2);
    }, "s"),
    n: /* @__PURE__ */ __name(function() {
      var r3 = t2.next();
      return a2 = r3.done, r3;
    }, "n"),
    e: /* @__PURE__ */ __name(function(r3) {
      u2 = !0, o2 = r3;
    }, "e"),
    f: /* @__PURE__ */ __name(function() {
      try {
        a2 || t2.return == null || t2.return();
      } finally {
        if (u2) throw o2;
      }
    }, "f")
  };
}
__name(_createForOfIteratorHelper, "_createForOfIteratorHelper");
var InboxOutlined$1 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z" } }] }, name: "inbox", theme: "outlined" }, InboxOutlined = /* @__PURE__ */ __name(function(props, ref) {
  return /* @__PURE__ */ React.createElement(Icon, _extends({}, props, {
    ref,
    icon: InboxOutlined$1
  }));
}, "InboxOutlined"), RefIcon = /* @__PURE__ */ React.forwardRef(InboxOutlined);
process.env.NODE_ENV !== "production" && (RefIcon.displayName = "InboxOutlined");
var _excluded$4 = ["className", "prefixCls", "style", "active", "status", "iconPrefix", "icon", "wrapperStyle", "stepNumber", "disabled", "description", "title", "subTitle", "progressDot", "stepIcon", "tailContent", "icons", "stepIndex", "onStepClick", "onClick", "render"];
function isString$1(str) {
  return typeof str == "string";
}
__name(isString$1, "isString$1");
function Step(props) {
  var _classNames2, className = props.className, prefixCls = props.prefixCls, style = props.style, active = props.active, status = props.status, iconPrefix = props.iconPrefix, icon2 = props.icon;
  props.wrapperStyle;
  var stepNumber = props.stepNumber, disabled = props.disabled, description = props.description, title = props.title, subTitle = props.subTitle, progressDot = props.progressDot, stepIcon = props.stepIcon, tailContent = props.tailContent, icons2 = props.icons, stepIndex = props.stepIndex, onStepClick = props.onStepClick, onClick = props.onClick, render = props.render, restProps = _objectWithoutProperties(props, _excluded$4), clickable = !!onStepClick && !disabled, accessibilityProps = {};
  clickable && (accessibilityProps.role = "button", accessibilityProps.tabIndex = 0, accessibilityProps.onClick = function(e2) {
    onClick == null || onClick(e2), onStepClick(stepIndex);
  }, accessibilityProps.onKeyDown = function(e2) {
    var which = e2.which;
    (which === KeyCode.ENTER || which === KeyCode.SPACE) && onStepClick(stepIndex);
  });
  var renderIconNode = /* @__PURE__ */ __name(function() {
    var _classNames, iconNode, iconClassName = cn("".concat(prefixCls, "-icon"), "".concat(iconPrefix, "icon"), (_classNames = {}, _defineProperty(_classNames, "".concat(iconPrefix, "icon-").concat(icon2), icon2 && isString$1(icon2)), _defineProperty(_classNames, "".concat(iconPrefix, "icon-check"), !icon2 && status === "finish" && (icons2 && !icons2.finish || !icons2)), _defineProperty(_classNames, "".concat(iconPrefix, "icon-cross"), !icon2 && status === "error" && (icons2 && !icons2.error || !icons2)), _classNames)), iconDot = /* @__PURE__ */ React.createElement("span", {
      className: "".concat(prefixCls, "-icon-dot")
    });
    return progressDot ? typeof progressDot == "function" ? iconNode = /* @__PURE__ */ React.createElement("span", {
      className: "".concat(prefixCls, "-icon")
    }, progressDot(iconDot, {
      index: stepNumber - 1,
      status,
      title,
      description
    })) : iconNode = /* @__PURE__ */ React.createElement("span", {
      className: "".concat(prefixCls, "-icon")
    }, iconDot) : icon2 && !isString$1(icon2) ? iconNode = /* @__PURE__ */ React.createElement("span", {
      className: "".concat(prefixCls, "-icon")
    }, icon2) : icons2 && icons2.finish && status === "finish" ? iconNode = /* @__PURE__ */ React.createElement("span", {
      className: "".concat(prefixCls, "-icon")
    }, icons2.finish) : icons2 && icons2.error && status === "error" ? iconNode = /* @__PURE__ */ React.createElement("span", {
      className: "".concat(prefixCls, "-icon")
    }, icons2.error) : icon2 || status === "finish" || status === "error" ? iconNode = /* @__PURE__ */ React.createElement("span", {
      className: iconClassName
    }) : iconNode = /* @__PURE__ */ React.createElement("span", {
      className: "".concat(prefixCls, "-icon")
    }, stepNumber), stepIcon && (iconNode = stepIcon({
      index: stepNumber - 1,
      status,
      title,
      description,
      node: iconNode
    })), iconNode;
  }, "renderIconNode"), mergedStatus = status || "wait", classString = cn("".concat(prefixCls, "-item"), "".concat(prefixCls, "-item-").concat(mergedStatus), className, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-item-custom"), icon2), _defineProperty(_classNames2, "".concat(prefixCls, "-item-active"), active), _defineProperty(_classNames2, "".concat(prefixCls, "-item-disabled"), disabled === !0), _classNames2)), stepItemStyle = _objectSpread2({}, style), stepNode = /* @__PURE__ */ React.createElement("div", _extends({}, restProps, {
    className: classString,
    style: stepItemStyle
  }), /* @__PURE__ */ React.createElement("div", _extends({
    onClick
  }, accessibilityProps, {
    className: "".concat(prefixCls, "-item-container")
  }), /* @__PURE__ */ React.createElement("div", {
    className: "".concat(prefixCls, "-item-tail")
  }, tailContent), /* @__PURE__ */ React.createElement("div", {
    className: "".concat(prefixCls, "-item-icon")
  }, renderIconNode()), /* @__PURE__ */ React.createElement("div", {
    className: "".concat(prefixCls, "-item-content")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "".concat(prefixCls, "-item-title")
  }, title, subTitle && /* @__PURE__ */ React.createElement("div", {
    title: typeof subTitle == "string" ? subTitle : void 0,
    className: "".concat(prefixCls, "-item-subtitle")
  }, subTitle)), description && /* @__PURE__ */ React.createElement("div", {
    className: "".concat(prefixCls, "-item-description")
  }, description))));
  return render && (stepNode = render(stepNode) || null), stepNode;
}
__name(Step, "Step");
var _excluded$3 = ["prefixCls", "style", "className", "children", "direction", "type", "labelPlacement", "iconPrefix", "status", "size", "current", "progressDot", "stepIcon", "initial", "icons", "onChange", "itemRender", "items"];
function Steps$2(props) {
  var _classNames, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-steps" : _props$prefixCls, _props$style = props.style, style = _props$style === void 0 ? {} : _props$style, className = props.className;
  props.children;
  var _props$direction = props.direction, direction = _props$direction === void 0 ? "horizontal" : _props$direction, _props$type = props.type, type = _props$type === void 0 ? "default" : _props$type, _props$labelPlacement = props.labelPlacement, labelPlacement = _props$labelPlacement === void 0 ? "horizontal" : _props$labelPlacement, _props$iconPrefix = props.iconPrefix, iconPrefix = _props$iconPrefix === void 0 ? "rc" : _props$iconPrefix, _props$status = props.status, status = _props$status === void 0 ? "process" : _props$status, size = props.size, _props$current = props.current, current = _props$current === void 0 ? 0 : _props$current, _props$progressDot = props.progressDot, progressDot = _props$progressDot === void 0 ? !1 : _props$progressDot, stepIcon = props.stepIcon, _props$initial = props.initial, initial = _props$initial === void 0 ? 0 : _props$initial, icons2 = props.icons, onChange = props.onChange, itemRender = props.itemRender, _props$items = props.items, items = _props$items === void 0 ? [] : _props$items, restProps = _objectWithoutProperties(props, _excluded$3), isNav = type === "navigation", isInline = type === "inline", mergedProgressDot = isInline || progressDot, mergedDirection = isInline ? "horizontal" : direction, mergedSize = isInline ? void 0 : size, adjustedLabelPlacement = mergedProgressDot ? "vertical" : labelPlacement, classString = cn(prefixCls, "".concat(prefixCls, "-").concat(mergedDirection), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), _defineProperty(_classNames, "".concat(prefixCls, "-label-").concat(adjustedLabelPlacement), mergedDirection === "horizontal"), _defineProperty(_classNames, "".concat(prefixCls, "-dot"), !!mergedProgressDot), _defineProperty(_classNames, "".concat(prefixCls, "-navigation"), isNav), _defineProperty(_classNames, "".concat(prefixCls, "-inline"), isInline), _classNames)), onStepClick = /* @__PURE__ */ __name(function(next) {
    onChange && current !== next && onChange(next);
  }, "onStepClick"), renderStep = /* @__PURE__ */ __name(function(item, index) {
    var mergedItem = _objectSpread2({}, item), stepNumber = initial + index;
    return status === "error" && index === current - 1 && (mergedItem.className = "".concat(prefixCls, "-next-error")), mergedItem.status || (stepNumber === current ? mergedItem.status = status : stepNumber < current ? mergedItem.status = "finish" : mergedItem.status = "wait"), isInline && (mergedItem.icon = void 0, mergedItem.subTitle = void 0), !mergedItem.render && itemRender && (mergedItem.render = function(stepItem) {
      return itemRender(mergedItem, stepItem);
    }), /* @__PURE__ */ React__default.createElement(Step, _extends({}, mergedItem, {
      active: stepNumber === current,
      stepNumber: stepNumber + 1,
      stepIndex: stepNumber,
      key: stepNumber,
      prefixCls,
      iconPrefix,
      wrapperStyle: style,
      progressDot: mergedProgressDot,
      stepIcon,
      icons: icons2,
      onStepClick: onChange && onStepClick
    }));
  }, "renderStep");
  return /* @__PURE__ */ React__default.createElement("div", _extends({
    className: classString,
    style
  }, restProps), items.filter(function(item) {
    return item;
  }).map(renderStep));
}
__name(Steps$2, "Steps$2");
Steps$2.Step = Step;
const genStepsCustomIconStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    customIconTop,
    customIconSize,
    customIconFontSize
  } = token;
  return {
    [`${componentCls}-item-custom`]: {
      [`> ${componentCls}-item-container > ${componentCls}-item-icon`]: {
        height: "auto",
        background: "none",
        border: 0,
        [`> ${componentCls}-icon`]: {
          top: customIconTop,
          width: customIconSize,
          height: customIconSize,
          fontSize: customIconFontSize,
          lineHeight: unit(customIconSize)
        }
      }
    },
    // Only adjust horizontal customize icon width
    [`&:not(${componentCls}-vertical)`]: {
      [`${componentCls}-item-custom`]: {
        [`${componentCls}-item-icon`]: {
          width: "auto",
          background: "none"
        }
      }
    }
  };
}, "genStepsCustomIconStyle"), genHorizontalStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls
  } = token, stepsItemCls = `${componentCls}-item`;
  return {
    [`${componentCls}-horizontal`]: {
      [`${stepsItemCls}-tail`]: {
        transform: "translateY(-50%)"
      }
    }
  };
}, "genHorizontalStyle"), genStepsInlineStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    inlineDotSize,
    inlineTitleColor,
    inlineTailColor
  } = token, containerPaddingTop = token.calc(token.paddingXS).add(token.lineWidth).equal(), titleStyle = {
    [`${componentCls}-item-container ${componentCls}-item-content ${componentCls}-item-title`]: {
      color: inlineTitleColor
    }
  };
  return {
    [`&${componentCls}-inline`]: {
      width: "auto",
      display: "inline-flex",
      [`${componentCls}-item`]: {
        flex: "none",
        "&-container": {
          padding: `${unit(containerPaddingTop)} ${unit(token.paddingXXS)} 0`,
          margin: `0 ${unit(token.calc(token.marginXXS).div(2).equal())}`,
          borderRadius: token.borderRadiusSM,
          cursor: "pointer",
          transition: `background-color ${token.motionDurationMid}`,
          "&:hover": {
            background: token.controlItemBgHover
          },
          "&[role='button']:hover": {
            opacity: 1
          }
        },
        "&-icon": {
          width: inlineDotSize,
          height: inlineDotSize,
          marginInlineStart: `calc(50% - ${unit(token.calc(inlineDotSize).div(2).equal())})`,
          [`> ${componentCls}-icon`]: {
            top: 0
          },
          [`${componentCls}-icon-dot`]: {
            borderRadius: token.calc(token.fontSizeSM).div(4).equal(),
            "&::after": {
              display: "none"
            }
          }
        },
        "&-content": {
          width: "auto",
          marginTop: token.calc(token.marginXS).sub(token.lineWidth).equal()
        },
        "&-title": {
          color: inlineTitleColor,
          fontSize: token.fontSizeSM,
          lineHeight: token.lineHeightSM,
          fontWeight: "normal",
          marginBottom: token.calc(token.marginXXS).div(2).equal()
        },
        "&-description": {
          display: "none"
        },
        "&-tail": {
          marginInlineStart: 0,
          top: token.calc(inlineDotSize).div(2).add(containerPaddingTop).equal(),
          transform: "translateY(-50%)",
          "&:after": {
            width: "100%",
            height: token.lineWidth,
            borderRadius: 0,
            marginInlineStart: 0,
            background: inlineTailColor
          }
        },
        [`&:first-child ${componentCls}-item-tail`]: {
          width: "50%",
          marginInlineStart: "50%"
        },
        [`&:last-child ${componentCls}-item-tail`]: {
          display: "block",
          width: "50%"
        },
        "&-wait": Object.assign({
          [`${componentCls}-item-icon ${componentCls}-icon ${componentCls}-icon-dot`]: {
            backgroundColor: token.colorBorderBg,
            border: `${unit(token.lineWidth)} ${token.lineType} ${inlineTailColor}`
          }
        }, titleStyle),
        "&-finish": Object.assign({
          [`${componentCls}-item-tail::after`]: {
            backgroundColor: inlineTailColor
          },
          [`${componentCls}-item-icon ${componentCls}-icon ${componentCls}-icon-dot`]: {
            backgroundColor: inlineTailColor,
            border: `${unit(token.lineWidth)} ${token.lineType} ${inlineTailColor}`
          }
        }, titleStyle),
        "&-error": titleStyle,
        "&-active, &-process": Object.assign({
          [`${componentCls}-item-icon`]: {
            width: inlineDotSize,
            height: inlineDotSize,
            marginInlineStart: `calc(50% - ${unit(token.calc(inlineDotSize).div(2).equal())})`,
            top: 0
          }
        }, titleStyle),
        [`&:not(${componentCls}-item-active) > ${componentCls}-item-container[role='button']:hover`]: {
          [`${componentCls}-item-title`]: {
            color: inlineTitleColor
          }
        }
      }
    }
  };
}, "genStepsInlineStyle"), genStepsLabelPlacementStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    iconSize,
    lineHeight,
    iconSizeSM
  } = token;
  return {
    [`&${componentCls}-label-vertical`]: {
      [`${componentCls}-item`]: {
        overflow: "visible",
        "&-tail": {
          marginInlineStart: token.calc(iconSize).div(2).add(token.controlHeightLG).equal(),
          padding: `0 ${unit(token.paddingLG)}`
        },
        "&-content": {
          display: "block",
          width: token.calc(iconSize).div(2).add(token.controlHeightLG).mul(2).equal(),
          marginTop: token.marginSM,
          textAlign: "center"
        },
        "&-icon": {
          display: "inline-block",
          marginInlineStart: token.controlHeightLG
        },
        "&-title": {
          paddingInlineEnd: 0,
          paddingInlineStart: 0,
          "&::after": {
            display: "none"
          }
        },
        "&-subtitle": {
          display: "block",
          marginBottom: token.marginXXS,
          marginInlineStart: 0,
          lineHeight
        }
      },
      [`&${componentCls}-small:not(${componentCls}-dot)`]: {
        [`${componentCls}-item`]: {
          "&-icon": {
            marginInlineStart: token.calc(iconSize).sub(iconSizeSM).div(2).add(token.controlHeightLG).equal()
          }
        }
      }
    }
  };
}, "genStepsLabelPlacementStyle"), genStepsNavStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    navContentMaxWidth,
    navArrowColor,
    stepsNavActiveColor,
    motionDurationSlow
  } = token;
  return {
    [`&${componentCls}-navigation`]: {
      paddingTop: token.paddingSM,
      [`&${componentCls}-small`]: {
        [`${componentCls}-item`]: {
          "&-container": {
            marginInlineStart: token.calc(token.marginSM).mul(-1).equal()
          }
        }
      },
      [`${componentCls}-item`]: {
        overflow: "visible",
        textAlign: "center",
        "&-container": {
          display: "inline-block",
          height: "100%",
          marginInlineStart: token.calc(token.margin).mul(-1).equal(),
          paddingBottom: token.paddingSM,
          textAlign: "start",
          transition: `opacity ${motionDurationSlow}`,
          [`${componentCls}-item-content`]: {
            maxWidth: navContentMaxWidth
          },
          [`${componentCls}-item-title`]: Object.assign(Object.assign({
            maxWidth: "100%",
            paddingInlineEnd: 0
          }, textEllipsis), {
            "&::after": {
              display: "none"
            }
          })
        },
        [`&:not(${componentCls}-item-active)`]: {
          [`${componentCls}-item-container[role='button']`]: {
            cursor: "pointer",
            "&:hover": {
              opacity: 0.85
            }
          }
        },
        "&:last-child": {
          flex: 1,
          "&::after": {
            display: "none"
          }
        },
        "&::after": {
          position: "absolute",
          top: `calc(50% - ${unit(token.calc(token.paddingSM).div(2).equal())})`,
          insetInlineStart: "100%",
          display: "inline-block",
          width: token.fontSizeIcon,
          height: token.fontSizeIcon,
          borderTop: `${unit(token.lineWidth)} ${token.lineType} ${navArrowColor}`,
          borderBottom: "none",
          borderInlineStart: "none",
          borderInlineEnd: `${unit(token.lineWidth)} ${token.lineType} ${navArrowColor}`,
          transform: "translateY(-50%) translateX(-50%) rotate(45deg)",
          content: '""'
        },
        "&::before": {
          position: "absolute",
          bottom: 0,
          insetInlineStart: "50%",
          display: "inline-block",
          width: 0,
          height: token.lineWidthBold,
          backgroundColor: stepsNavActiveColor,
          transition: `width ${motionDurationSlow}, inset-inline-start ${motionDurationSlow}`,
          transitionTimingFunction: "ease-out",
          content: '""'
        }
      },
      [`${componentCls}-item${componentCls}-item-active::before`]: {
        insetInlineStart: 0,
        width: "100%"
      }
    },
    [`&${componentCls}-navigation${componentCls}-vertical`]: {
      [`> ${componentCls}-item`]: {
        marginInlineEnd: 0,
        "&::before": {
          display: "none"
        },
        [`&${componentCls}-item-active::before`]: {
          top: 0,
          insetInlineEnd: 0,
          insetInlineStart: "unset",
          display: "block",
          width: token.calc(token.lineWidth).mul(3).equal(),
          height: `calc(100% - ${unit(token.marginLG)})`
        },
        "&::after": {
          position: "relative",
          insetInlineStart: "50%",
          display: "block",
          width: token.calc(token.controlHeight).mul(0.25).equal(),
          height: token.calc(token.controlHeight).mul(0.25).equal(),
          marginBottom: token.marginXS,
          textAlign: "center",
          transform: "translateY(-50%) translateX(-50%) rotate(135deg)"
        },
        "&:last-child": {
          "&::after": {
            display: "none"
          }
        },
        [`> ${componentCls}-item-container > ${componentCls}-item-tail`]: {
          visibility: "hidden"
        }
      }
    },
    [`&${componentCls}-navigation${componentCls}-horizontal`]: {
      [`> ${componentCls}-item > ${componentCls}-item-container > ${componentCls}-item-tail`]: {
        visibility: "hidden"
      }
    }
  };
}, "genStepsNavStyle"), genStepsProgressStyle = /* @__PURE__ */ __name((token) => {
  const {
    antCls,
    componentCls,
    iconSize,
    iconSizeSM,
    processIconColor,
    marginXXS,
    lineWidthBold,
    lineWidth,
    paddingXXS
  } = token, progressSize = token.calc(iconSize).add(token.calc(lineWidthBold).mul(4).equal()).equal(), progressSizeSM = token.calc(iconSizeSM).add(token.calc(token.lineWidth).mul(4).equal()).equal();
  return {
    [`&${componentCls}-with-progress`]: {
      [`${componentCls}-item`]: {
        paddingTop: paddingXXS,
        [`&-process ${componentCls}-item-container ${componentCls}-item-icon ${componentCls}-icon`]: {
          color: processIconColor
        }
      },
      [`&${componentCls}-vertical > ${componentCls}-item `]: {
        paddingInlineStart: paddingXXS,
        [`> ${componentCls}-item-container > ${componentCls}-item-tail`]: {
          top: marginXXS,
          insetInlineStart: token.calc(iconSize).div(2).sub(lineWidth).add(paddingXXS).equal()
        }
      },
      [`&, &${componentCls}-small`]: {
        [`&${componentCls}-horizontal ${componentCls}-item:first-child`]: {
          paddingBottom: paddingXXS,
          paddingInlineStart: paddingXXS
        }
      },
      [`&${componentCls}-small${componentCls}-vertical > ${componentCls}-item > ${componentCls}-item-container > ${componentCls}-item-tail`]: {
        insetInlineStart: token.calc(iconSizeSM).div(2).sub(lineWidth).add(paddingXXS).equal()
      },
      [`&${componentCls}-label-vertical ${componentCls}-item ${componentCls}-item-tail`]: {
        top: token.calc(iconSize).div(2).add(paddingXXS).equal()
      },
      [`${componentCls}-item-icon`]: {
        position: "relative",
        [`${antCls}-progress`]: {
          position: "absolute",
          insetInlineStart: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          "&-inner": {
            width: `${unit(progressSize)} !important`,
            height: `${unit(progressSize)} !important`
          }
        }
      },
      // ============================== Small size ==============================
      [`&${componentCls}-small`]: {
        [`&${componentCls}-label-vertical ${componentCls}-item ${componentCls}-item-tail`]: {
          top: token.calc(iconSizeSM).div(2).add(paddingXXS).equal()
        },
        [`${componentCls}-item-icon ${antCls}-progress-inner`]: {
          width: `${unit(progressSizeSM)} !important`,
          height: `${unit(progressSizeSM)} !important`
        }
      }
    }
  };
}, "genStepsProgressStyle"), genStepsProgressDotStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    descriptionMaxWidth,
    lineHeight,
    dotCurrentSize,
    dotSize,
    motionDurationSlow
  } = token;
  return {
    [`&${componentCls}-dot, &${componentCls}-dot${componentCls}-small`]: {
      [`${componentCls}-item`]: {
        "&-title": {
          lineHeight
        },
        "&-tail": {
          // Math.floor((token.size - token.lineWidth * 3) / 2)
          top: token.calc(token.dotSize).sub(token.calc(token.lineWidth).mul(3).equal()).div(2).equal(),
          width: "100%",
          marginTop: 0,
          marginBottom: 0,
          marginInline: `${unit(token.calc(descriptionMaxWidth).div(2).equal())} 0`,
          padding: 0,
          "&::after": {
            width: `calc(100% - ${unit(token.calc(token.marginSM).mul(2).equal())})`,
            height: token.calc(token.lineWidth).mul(3).equal(),
            marginInlineStart: token.marginSM
          }
        },
        "&-icon": {
          width: dotSize,
          height: dotSize,
          marginInlineStart: token.calc(token.descriptionMaxWidth).sub(dotSize).div(2).equal(),
          paddingInlineEnd: 0,
          lineHeight: unit(dotSize),
          background: "transparent",
          border: 0,
          [`${componentCls}-icon-dot`]: {
            position: "relative",
            float: "left",
            width: "100%",
            height: "100%",
            borderRadius: 100,
            // very large number
            transition: `all ${motionDurationSlow}`,
            /* expand hover area */
            "&::after": {
              position: "absolute",
              top: token.calc(token.marginSM).mul(-1).equal(),
              insetInlineStart: token.calc(dotSize).sub(token.calc(token.controlHeightLG).mul(1.5).equal()).div(2).equal(),
              width: token.calc(token.controlHeightLG).mul(1.5).equal(),
              height: token.controlHeight,
              background: "transparent",
              content: '""'
            }
          }
        },
        "&-content": {
          width: descriptionMaxWidth
        },
        [`&-process ${componentCls}-item-icon`]: {
          position: "relative",
          top: token.calc(dotSize).sub(dotCurrentSize).div(2).equal(),
          width: dotCurrentSize,
          height: dotCurrentSize,
          lineHeight: unit(dotCurrentSize),
          background: "none",
          marginInlineStart: token.calc(token.descriptionMaxWidth).sub(dotCurrentSize).div(2).equal()
        },
        [`&-process ${componentCls}-icon`]: {
          [`&:first-child ${componentCls}-icon-dot`]: {
            insetInlineStart: 0
          }
        }
      }
    },
    [`&${componentCls}-vertical${componentCls}-dot`]: {
      [`${componentCls}-item-icon`]: {
        marginTop: token.calc(token.controlHeight).sub(dotSize).div(2).equal(),
        marginInlineStart: 0,
        background: "none"
      },
      [`${componentCls}-item-process ${componentCls}-item-icon`]: {
        marginTop: token.calc(token.controlHeight).sub(dotCurrentSize).div(2).equal(),
        top: 0,
        insetInlineStart: token.calc(dotSize).sub(dotCurrentSize).div(2).equal(),
        marginInlineStart: 0
      },
      // https://github.com/ant-design/ant-design/issues/18354
      [`${componentCls}-item > ${componentCls}-item-container > ${componentCls}-item-tail`]: {
        top: token.calc(token.controlHeight).sub(dotSize).div(2).equal(),
        insetInlineStart: 0,
        margin: 0,
        padding: `${unit(token.calc(dotSize).add(token.paddingXS).equal())} 0 ${unit(token.paddingXS)}`,
        "&::after": {
          marginInlineStart: token.calc(dotSize).sub(token.lineWidth).div(2).equal()
        }
      },
      [`&${componentCls}-small`]: {
        [`${componentCls}-item-icon`]: {
          marginTop: token.calc(token.controlHeightSM).sub(dotSize).div(2).equal()
        },
        [`${componentCls}-item-process ${componentCls}-item-icon`]: {
          marginTop: token.calc(token.controlHeightSM).sub(dotCurrentSize).div(2).equal()
        },
        [`${componentCls}-item > ${componentCls}-item-container > ${componentCls}-item-tail`]: {
          top: token.calc(token.controlHeightSM).sub(dotSize).div(2).equal()
        }
      },
      [`${componentCls}-item:first-child ${componentCls}-icon-dot`]: {
        insetInlineStart: 0
      },
      [`${componentCls}-item-content`]: {
        width: "inherit"
      }
    }
  };
}, "genStepsProgressDotStyle"), genStepsRTLStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls
  } = token;
  return {
    [`&${componentCls}-rtl`]: {
      direction: "rtl",
      [`${componentCls}-item`]: {
        "&-subtitle": {
          float: "left"
        }
      },
      // nav
      [`&${componentCls}-navigation`]: {
        [`${componentCls}-item::after`]: {
          transform: "rotate(-45deg)"
        }
      },
      // vertical
      [`&${componentCls}-vertical`]: {
        [`> ${componentCls}-item`]: {
          "&::after": {
            transform: "rotate(225deg)"
          },
          [`${componentCls}-item-icon`]: {
            float: "right"
          }
        }
      },
      // progress-dot
      [`&${componentCls}-dot`]: {
        [`${componentCls}-item-icon ${componentCls}-icon-dot, &${componentCls}-small ${componentCls}-item-icon ${componentCls}-icon-dot`]: {
          float: "right"
        }
      }
    }
  };
}, "genStepsRTLStyle"), genStepsSmallStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    iconSizeSM,
    // stepsSmallIconMargin,
    fontSizeSM,
    fontSize,
    colorTextDescription
  } = token;
  return {
    [`&${componentCls}-small`]: {
      [`&${componentCls}-horizontal:not(${componentCls}-label-vertical) ${componentCls}-item`]: {
        paddingInlineStart: token.paddingSM,
        "&:first-child": {
          paddingInlineStart: 0
        }
      },
      [`${componentCls}-item-icon`]: {
        width: iconSizeSM,
        height: iconSizeSM,
        // margin: stepsSmallIconMargin,
        marginTop: 0,
        marginBottom: 0,
        marginInline: `0 ${unit(token.marginXS)}`,
        fontSize: fontSizeSM,
        lineHeight: unit(iconSizeSM),
        textAlign: "center",
        borderRadius: iconSizeSM
      },
      [`${componentCls}-item-title`]: {
        paddingInlineEnd: token.paddingSM,
        fontSize,
        lineHeight: unit(iconSizeSM),
        "&::after": {
          top: token.calc(iconSizeSM).div(2).equal()
        }
      },
      [`${componentCls}-item-description`]: {
        color: colorTextDescription,
        fontSize
      },
      [`${componentCls}-item-tail`]: {
        top: token.calc(iconSizeSM).div(2).sub(token.paddingXXS).equal()
      },
      [`${componentCls}-item-custom ${componentCls}-item-icon`]: {
        width: "inherit",
        height: "inherit",
        lineHeight: "inherit",
        background: "none",
        border: 0,
        borderRadius: 0,
        [`> ${componentCls}-icon`]: {
          fontSize: iconSizeSM,
          lineHeight: unit(iconSizeSM),
          transform: "none"
        }
      }
    }
  };
}, "genStepsSmallStyle"), genStepsVerticalStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    iconSizeSM,
    iconSize
  } = token;
  return {
    [`&${componentCls}-vertical`]: {
      display: "flex",
      flexDirection: "column",
      [`> ${componentCls}-item`]: {
        display: "block",
        flex: "1 0 auto",
        paddingInlineStart: 0,
        overflow: "visible",
        [`${componentCls}-item-icon`]: {
          float: "left",
          marginInlineEnd: token.margin
        },
        [`${componentCls}-item-content`]: {
          display: "block",
          minHeight: token.calc(token.controlHeight).mul(1.5).equal(),
          overflow: "hidden"
        },
        [`${componentCls}-item-title`]: {
          lineHeight: unit(iconSize)
        },
        [`${componentCls}-item-description`]: {
          paddingBottom: token.paddingSM
        }
      },
      [`> ${componentCls}-item > ${componentCls}-item-container > ${componentCls}-item-tail`]: {
        position: "absolute",
        top: 0,
        insetInlineStart: token.calc(iconSize).div(2).sub(token.lineWidth).equal(),
        width: token.lineWidth,
        height: "100%",
        padding: `${unit(token.calc(token.marginXXS).mul(1.5).add(iconSize).equal())} 0 ${unit(token.calc(token.marginXXS).mul(1.5).equal())}`,
        "&::after": {
          width: token.lineWidth,
          height: "100%"
        }
      },
      [`> ${componentCls}-item:not(:last-child) > ${componentCls}-item-container > ${componentCls}-item-tail`]: {
        display: "block"
      },
      [` > ${componentCls}-item > ${componentCls}-item-container > ${componentCls}-item-content > ${componentCls}-item-title`]: {
        "&::after": {
          display: "none"
        }
      },
      [`&${componentCls}-small ${componentCls}-item-container`]: {
        [`${componentCls}-item-tail`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: token.calc(iconSizeSM).div(2).sub(token.lineWidth).equal(),
          padding: `${unit(token.calc(token.marginXXS).mul(1.5).add(iconSizeSM).equal())} 0 ${unit(token.calc(token.marginXXS).mul(1.5).equal())}`
        },
        [`${componentCls}-item-title`]: {
          lineHeight: unit(iconSizeSM)
        }
      }
    }
  };
}, "genStepsVerticalStyle"), STEP_ITEM_STATUS_WAIT = "wait", STEP_ITEM_STATUS_PROCESS = "process", STEP_ITEM_STATUS_FINISH = "finish", STEP_ITEM_STATUS_ERROR = "error", genStepsItemStatusStyle = /* @__PURE__ */ __name((status, token) => {
  const prefix = `${token.componentCls}-item`, iconColorKey = `${status}IconColor`, titleColorKey = `${status}TitleColor`, descriptionColorKey = `${status}DescriptionColor`, tailColorKey = `${status}TailColor`, iconBgColorKey = `${status}IconBgColor`, iconBorderColorKey = `${status}IconBorderColor`, dotColorKey = `${status}DotColor`;
  return {
    [`${prefix}-${status} ${prefix}-icon`]: {
      backgroundColor: token[iconBgColorKey],
      borderColor: token[iconBorderColorKey],
      [`> ${token.componentCls}-icon`]: {
        color: token[iconColorKey],
        [`${token.componentCls}-icon-dot`]: {
          background: token[dotColorKey]
        }
      }
    },
    [`${prefix}-${status}${prefix}-custom ${prefix}-icon`]: {
      [`> ${token.componentCls}-icon`]: {
        color: token[dotColorKey]
      }
    },
    [`${prefix}-${status} > ${prefix}-container > ${prefix}-content > ${prefix}-title`]: {
      color: token[titleColorKey],
      "&::after": {
        backgroundColor: token[tailColorKey]
      }
    },
    [`${prefix}-${status} > ${prefix}-container > ${prefix}-content > ${prefix}-description`]: {
      color: token[descriptionColorKey]
    },
    [`${prefix}-${status} > ${prefix}-container > ${prefix}-tail::after`]: {
      backgroundColor: token[tailColorKey]
    }
  };
}, "genStepsItemStatusStyle"), genStepsItemStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    motionDurationSlow
  } = token, stepsItemCls = `${componentCls}-item`, stepItemIconCls = `${stepsItemCls}-icon`;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    [stepsItemCls]: {
      position: "relative",
      display: "inline-block",
      flex: 1,
      overflow: "hidden",
      verticalAlign: "top",
      "&:last-child": {
        flex: "none",
        [`> ${stepsItemCls}-container > ${stepsItemCls}-tail, > ${stepsItemCls}-container >  ${stepsItemCls}-content > ${stepsItemCls}-title::after`]: {
          display: "none"
        }
      }
    },
    [`${stepsItemCls}-container`]: {
      outline: "none",
      "&:focus-visible": {
        [stepItemIconCls]: Object.assign({}, genFocusOutline(token))
      }
    },
    [`${stepItemIconCls}, ${stepsItemCls}-content`]: {
      display: "inline-block",
      verticalAlign: "top"
    },
    [stepItemIconCls]: {
      width: token.iconSize,
      height: token.iconSize,
      marginTop: 0,
      marginBottom: 0,
      marginInlineStart: 0,
      marginInlineEnd: token.marginXS,
      fontSize: token.iconFontSize,
      fontFamily: token.fontFamily,
      lineHeight: unit(token.iconSize),
      textAlign: "center",
      borderRadius: token.iconSize,
      border: `${unit(token.lineWidth)} ${token.lineType} transparent`,
      transition: `background-color ${motionDurationSlow}, border-color ${motionDurationSlow}`,
      [`${componentCls}-icon`]: {
        position: "relative",
        top: token.iconTop,
        color: token.colorPrimary,
        lineHeight: 1
      }
    },
    [`${stepsItemCls}-tail`]: {
      position: "absolute",
      top: token.calc(token.iconSize).div(2).equal(),
      insetInlineStart: 0,
      width: "100%",
      "&::after": {
        display: "inline-block",
        width: "100%",
        height: token.lineWidth,
        background: token.colorSplit,
        borderRadius: token.lineWidth,
        transition: `background ${motionDurationSlow}`,
        content: '""'
      }
    },
    [`${stepsItemCls}-title`]: {
      position: "relative",
      display: "inline-block",
      paddingInlineEnd: token.padding,
      color: token.colorText,
      fontSize: token.fontSizeLG,
      lineHeight: unit(token.titleLineHeight),
      "&::after": {
        position: "absolute",
        top: token.calc(token.titleLineHeight).div(2).equal(),
        insetInlineStart: "100%",
        display: "block",
        width: 9999,
        height: token.lineWidth,
        background: token.processTailColor,
        content: '""'
      }
    },
    [`${stepsItemCls}-subtitle`]: {
      display: "inline",
      marginInlineStart: token.marginXS,
      color: token.colorTextDescription,
      fontWeight: "normal",
      fontSize: token.fontSize
    },
    [`${stepsItemCls}-description`]: {
      color: token.colorTextDescription,
      fontSize: token.fontSize
    }
  }, genStepsItemStatusStyle(STEP_ITEM_STATUS_WAIT, token)), genStepsItemStatusStyle(STEP_ITEM_STATUS_PROCESS, token)), {
    [`${stepsItemCls}-process > ${stepsItemCls}-container > ${stepsItemCls}-title`]: {
      fontWeight: token.fontWeightStrong
    }
  }), genStepsItemStatusStyle(STEP_ITEM_STATUS_FINISH, token)), genStepsItemStatusStyle(STEP_ITEM_STATUS_ERROR, token)), {
    [`${stepsItemCls}${componentCls}-next-error > ${componentCls}-item-title::after`]: {
      background: token.colorError
    },
    [`${stepsItemCls}-disabled`]: {
      cursor: "not-allowed"
    }
  });
}, "genStepsItemStyle"), genStepsClickableStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    motionDurationSlow
  } = token;
  return {
    [`& ${componentCls}-item`]: {
      [`&:not(${componentCls}-item-active)`]: {
        [`& > ${componentCls}-item-container[role='button']`]: {
          cursor: "pointer",
          [`${componentCls}-item`]: {
            [`&-title, &-subtitle, &-description, &-icon ${componentCls}-icon`]: {
              transition: `color ${motionDurationSlow}`
            }
          },
          "&:hover": {
            [`${componentCls}-item`]: {
              "&-title, &-subtitle, &-description": {
                color: token.colorPrimary
              }
            }
          }
        },
        [`&:not(${componentCls}-item-process)`]: {
          [`& > ${componentCls}-item-container[role='button']:hover`]: {
            [`${componentCls}-item`]: {
              "&-icon": {
                borderColor: token.colorPrimary,
                [`${componentCls}-icon`]: {
                  color: token.colorPrimary
                }
              }
            }
          }
        }
      }
    },
    [`&${componentCls}-horizontal:not(${componentCls}-label-vertical)`]: {
      [`${componentCls}-item`]: {
        paddingInlineStart: token.padding,
        whiteSpace: "nowrap",
        "&:first-child": {
          paddingInlineStart: 0
        },
        [`&:last-child ${componentCls}-item-title`]: {
          paddingInlineEnd: 0
        },
        "&-tail": {
          display: "none"
        },
        "&-description": {
          maxWidth: token.descriptionMaxWidth,
          whiteSpace: "normal"
        }
      }
    }
  };
}, "genStepsClickableStyle"), genStepsStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token)), {
      display: "flex",
      width: "100%",
      fontSize: 0,
      textAlign: "initial"
    }), genStepsItemStyle(token)), genStepsClickableStyle(token)), genStepsCustomIconStyle(token)), genStepsSmallStyle(token)), genStepsVerticalStyle(token)), genHorizontalStyle(token)), genStepsLabelPlacementStyle(token)), genStepsProgressDotStyle(token)), genStepsNavStyle(token)), genStepsRTLStyle(token)), genStepsProgressStyle(token)), genStepsInlineStyle(token))
  };
}, "genStepsStyle"), prepareComponentToken$3 = /* @__PURE__ */ __name((token) => ({
  titleLineHeight: token.controlHeight,
  customIconSize: token.controlHeight,
  customIconTop: 0,
  customIconFontSize: token.controlHeightSM,
  iconSize: token.controlHeight,
  iconTop: -0.5,
  // magic for ui experience
  iconFontSize: token.fontSize,
  iconSizeSM: token.fontSizeHeading3,
  dotSize: token.controlHeight / 4,
  dotCurrentSize: token.controlHeightLG / 4,
  navArrowColor: token.colorTextDisabled,
  navContentMaxWidth: "auto",
  descriptionMaxWidth: 140,
  waitIconColor: token.wireframe ? token.colorTextDisabled : token.colorTextLabel,
  waitIconBgColor: token.wireframe ? token.colorBgContainer : token.colorFillContent,
  waitIconBorderColor: token.wireframe ? token.colorTextDisabled : "transparent",
  finishIconBgColor: token.wireframe ? token.colorBgContainer : token.controlItemBgActive,
  finishIconBorderColor: token.wireframe ? token.colorPrimary : token.controlItemBgActive
}), "prepareComponentToken$3"), useStyle$3 = genStyleHooks("Steps", (token) => {
  const {
    colorTextDisabled,
    controlHeightLG,
    colorTextLightSolid,
    colorText,
    colorPrimary,
    colorTextDescription,
    colorTextQuaternary,
    colorError,
    colorBorderSecondary,
    colorSplit
  } = token, stepsToken = merge(token, {
    // Steps component less variable
    processIconColor: colorTextLightSolid,
    processTitleColor: colorText,
    processDescriptionColor: colorText,
    processIconBgColor: colorPrimary,
    processIconBorderColor: colorPrimary,
    processDotColor: colorPrimary,
    processTailColor: colorSplit,
    waitTitleColor: colorTextDescription,
    waitDescriptionColor: colorTextDescription,
    waitTailColor: colorSplit,
    waitDotColor: colorTextDisabled,
    finishIconColor: colorPrimary,
    finishTitleColor: colorText,
    finishDescriptionColor: colorTextDescription,
    finishTailColor: colorPrimary,
    finishDotColor: colorPrimary,
    errorIconColor: colorTextLightSolid,
    errorTitleColor: colorError,
    errorDescriptionColor: colorError,
    errorTailColor: colorSplit,
    errorIconBgColor: colorError,
    errorIconBorderColor: colorError,
    errorDotColor: colorError,
    stepsNavActiveColor: colorPrimary,
    stepsProgressSize: controlHeightLG,
    // Steps inline variable
    inlineDotSize: 6,
    inlineTitleColor: colorTextQuaternary,
    inlineTailColor: colorBorderSecondary
  });
  return [genStepsStyle(stepsToken)];
}, prepareComponentToken$3);
function filter(items) {
  return items.filter((item) => item);
}
__name(filter, "filter");
function useLegacyItems(items, children) {
  if (process.env.NODE_ENV === "test" && devUseWarning("Menu").deprecated(!children, "Step", "items"), items)
    return items;
  const childrenItems = toArray$1(children).map((node) => {
    if (/* @__PURE__ */ React.isValidElement(node)) {
      const {
        props
      } = node;
      return Object.assign({}, props);
    }
    return null;
  });
  return filter(childrenItems);
}
__name(useLegacyItems, "useLegacyItems");
var __rest$4 = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
const Steps$1 = /* @__PURE__ */ __name((props) => {
  const {
    percent,
    size: customizeSize,
    className,
    rootClassName,
    direction,
    items,
    responsive = !0,
    current = 0,
    children,
    style
  } = props, restProps = __rest$4(props, ["percent", "size", "className", "rootClassName", "direction", "items", "responsive", "current", "children", "style"]), {
    xs
  } = useBreakpoint(responsive), {
    getPrefixCls,
    direction: rtlDirection,
    steps
  } = React.useContext(ConfigContext), realDirectionValue = React.useMemo(() => responsive && xs ? "vertical" : direction, [xs, direction]), size = useSize(customizeSize), prefixCls = getPrefixCls("steps", props.prefixCls), [wrapCSSVar, hashId, cssVarCls] = useStyle$3(prefixCls), isInline = props.type === "inline", iconPrefix = getPrefixCls("", props.iconPrefix), mergedItems = useLegacyItems(items, children), mergedPercent = isInline ? void 0 : percent, mergedStyle = Object.assign(Object.assign({}, steps == null ? void 0 : steps.style), style), stepsClassName = cn(steps == null ? void 0 : steps.className, {
    [`${prefixCls}-rtl`]: rtlDirection === "rtl",
    [`${prefixCls}-with-progress`]: mergedPercent !== void 0
  }, className, rootClassName, hashId, cssVarCls), icons2 = {
    finish: /* @__PURE__ */ React.createElement(RefIcon$f, {
      className: `${prefixCls}-finish-icon`
    }),
    error: /* @__PURE__ */ React.createElement(RefIcon$a, {
      className: `${prefixCls}-error-icon`
    })
  }, stepIconRender = /* @__PURE__ */ __name((_ref) => {
    let {
      node,
      status
    } = _ref;
    if (status === "process" && mergedPercent !== void 0) {
      const progressWidth = size === "small" ? 32 : 40;
      return /* @__PURE__ */ React.createElement("div", {
        className: `${prefixCls}-progress-icon`
      }, /* @__PURE__ */ React.createElement(Progress$1, {
        type: "circle",
        percent: mergedPercent,
        size: progressWidth,
        strokeWidth: 4,
        format: /* @__PURE__ */ __name(() => null, "format")
      }), node);
    }
    return node;
  }, "stepIconRender"), itemRender = /* @__PURE__ */ __name((item, stepItem) => item.description ? /* @__PURE__ */ React.createElement(Tooltip, {
    title: item.description
  }, stepItem) : stepItem, "itemRender");
  return wrapCSSVar(/* @__PURE__ */ React.createElement(Steps$2, Object.assign({
    icons: icons2
  }, restProps, {
    style: mergedStyle,
    current,
    size,
    items: mergedItems,
    itemRender: isInline ? itemRender : void 0,
    stepIcon: stepIconRender,
    direction: realDirectionValue,
    prefixCls,
    iconPrefix,
    className: stepsClassName
  })));
}, "Steps$1");
Steps$1.Step = Steps$2.Step;
process.env.NODE_ENV !== "production" && (Steps$1.displayName = "Steps");
var _excluded$2 = ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"], Switch$2 = /* @__PURE__ */ React.forwardRef(function(_ref, ref) {
  var _classNames, _ref$prefixCls = _ref.prefixCls, prefixCls = _ref$prefixCls === void 0 ? "rc-switch" : _ref$prefixCls, className = _ref.className, checked = _ref.checked, defaultChecked = _ref.defaultChecked, disabled = _ref.disabled, loadingIcon = _ref.loadingIcon, checkedChildren = _ref.checkedChildren, unCheckedChildren = _ref.unCheckedChildren, onClick = _ref.onClick, onChange = _ref.onChange, onKeyDown = _ref.onKeyDown, restProps = _objectWithoutProperties(_ref, _excluded$2), _useMergedState = useMergedState(!1, {
    value: checked,
    defaultValue: defaultChecked
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), innerChecked = _useMergedState2[0], setInnerChecked = _useMergedState2[1];
  function triggerChange(newChecked, event) {
    var mergedChecked = innerChecked;
    return disabled || (mergedChecked = newChecked, setInnerChecked(mergedChecked), onChange == null || onChange(mergedChecked, event)), mergedChecked;
  }
  __name(triggerChange, "triggerChange");
  function onInternalKeyDown(e2) {
    e2.which === KeyCode.LEFT ? triggerChange(!1, e2) : e2.which === KeyCode.RIGHT && triggerChange(!0, e2), onKeyDown == null || onKeyDown(e2);
  }
  __name(onInternalKeyDown, "onInternalKeyDown");
  function onInternalClick(e2) {
    var ret = triggerChange(!innerChecked, e2);
    onClick == null || onClick(ret, e2);
  }
  __name(onInternalClick, "onInternalClick");
  var switchClassName = cn(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-checked"), innerChecked), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
  return /* @__PURE__ */ React.createElement("button", _extends({}, restProps, {
    type: "button",
    role: "switch",
    "aria-checked": innerChecked,
    disabled,
    className: switchClassName,
    ref,
    onKeyDown: onInternalKeyDown,
    onClick: onInternalClick
  }), loadingIcon, /* @__PURE__ */ React.createElement("span", {
    className: "".concat(prefixCls, "-inner")
  }, /* @__PURE__ */ React.createElement("span", {
    className: "".concat(prefixCls, "-inner-checked")
  }, checkedChildren), /* @__PURE__ */ React.createElement("span", {
    className: "".concat(prefixCls, "-inner-unchecked")
  }, unCheckedChildren)));
});
Switch$2.displayName = "Switch";
const genSwitchSmallStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    trackHeightSM,
    trackPadding,
    trackMinWidthSM,
    innerMinMarginSM,
    innerMaxMarginSM,
    handleSizeSM,
    calc
  } = token, switchInnerCls = `${componentCls}-inner`, trackPaddingCalc = unit(calc(handleSizeSM).add(calc(trackPadding).mul(2)).equal()), innerMaxMarginCalc = unit(calc(innerMaxMarginSM).mul(2).equal());
  return {
    [componentCls]: {
      [`&${componentCls}-small`]: {
        minWidth: trackMinWidthSM,
        height: trackHeightSM,
        lineHeight: unit(trackHeightSM),
        [`${componentCls}-inner`]: {
          paddingInlineStart: innerMaxMarginSM,
          paddingInlineEnd: innerMinMarginSM,
          [`${switchInnerCls}-checked, ${switchInnerCls}-unchecked`]: {
            minHeight: trackHeightSM
          },
          [`${switchInnerCls}-checked`]: {
            marginInlineStart: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`,
            marginInlineEnd: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`
          },
          [`${switchInnerCls}-unchecked`]: {
            marginTop: calc(trackHeightSM).mul(-1).equal(),
            marginInlineStart: 0,
            marginInlineEnd: 0
          }
        },
        [`${componentCls}-handle`]: {
          width: handleSizeSM,
          height: handleSizeSM
        },
        [`${componentCls}-loading-icon`]: {
          top: calc(calc(handleSizeSM).sub(token.switchLoadingIconSize)).div(2).equal(),
          fontSize: token.switchLoadingIconSize
        },
        [`&${componentCls}-checked`]: {
          [`${componentCls}-inner`]: {
            paddingInlineStart: innerMinMarginSM,
            paddingInlineEnd: innerMaxMarginSM,
            [`${switchInnerCls}-checked`]: {
              marginInlineStart: 0,
              marginInlineEnd: 0
            },
            [`${switchInnerCls}-unchecked`]: {
              marginInlineStart: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`,
              marginInlineEnd: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`
            }
          },
          [`${componentCls}-handle`]: {
            insetInlineStart: `calc(100% - ${unit(calc(handleSizeSM).add(trackPadding).equal())})`
          }
        },
        [`&:not(${componentCls}-disabled):active`]: {
          [`&:not(${componentCls}-checked) ${switchInnerCls}`]: {
            [`${switchInnerCls}-unchecked`]: {
              marginInlineStart: calc(token.marginXXS).div(2).equal(),
              marginInlineEnd: calc(token.marginXXS).mul(-1).div(2).equal()
            }
          },
          [`&${componentCls}-checked ${switchInnerCls}`]: {
            [`${switchInnerCls}-checked`]: {
              marginInlineStart: calc(token.marginXXS).mul(-1).div(2).equal(),
              marginInlineEnd: calc(token.marginXXS).div(2).equal()
            }
          }
        }
      }
    }
  };
}, "genSwitchSmallStyle"), genSwitchLoadingStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    handleSize,
    calc
  } = token;
  return {
    [componentCls]: {
      [`${componentCls}-loading-icon${token.iconCls}`]: {
        position: "relative",
        top: calc(calc(handleSize).sub(token.fontSize)).div(2).equal(),
        color: token.switchLoadingIconColor,
        verticalAlign: "top"
      },
      [`&${componentCls}-checked ${componentCls}-loading-icon`]: {
        color: token.switchColor
      }
    }
  };
}, "genSwitchLoadingStyle"), genSwitchHandleStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    trackPadding,
    handleBg,
    handleShadow,
    handleSize,
    calc
  } = token, switchHandleCls = `${componentCls}-handle`;
  return {
    [componentCls]: {
      [switchHandleCls]: {
        position: "absolute",
        top: trackPadding,
        insetInlineStart: trackPadding,
        width: handleSize,
        height: handleSize,
        transition: `all ${token.switchDuration} ease-in-out`,
        "&::before": {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          backgroundColor: handleBg,
          borderRadius: calc(handleSize).div(2).equal(),
          boxShadow: handleShadow,
          transition: `all ${token.switchDuration} ease-in-out`,
          content: '""'
        }
      },
      [`&${componentCls}-checked ${switchHandleCls}`]: {
        insetInlineStart: `calc(100% - ${unit(calc(handleSize).add(trackPadding).equal())})`
      },
      [`&:not(${componentCls}-disabled):active`]: {
        [`${switchHandleCls}::before`]: {
          insetInlineEnd: token.switchHandleActiveInset,
          insetInlineStart: 0
        },
        [`&${componentCls}-checked ${switchHandleCls}::before`]: {
          insetInlineEnd: 0,
          insetInlineStart: token.switchHandleActiveInset
        }
      }
    }
  };
}, "genSwitchHandleStyle"), genSwitchInnerStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    trackHeight,
    trackPadding,
    innerMinMargin,
    innerMaxMargin,
    handleSize,
    calc
  } = token, switchInnerCls = `${componentCls}-inner`, trackPaddingCalc = unit(calc(handleSize).add(calc(trackPadding).mul(2)).equal()), innerMaxMarginCalc = unit(calc(innerMaxMargin).mul(2).equal());
  return {
    [componentCls]: {
      [switchInnerCls]: {
        display: "block",
        overflow: "hidden",
        borderRadius: 100,
        height: "100%",
        paddingInlineStart: innerMaxMargin,
        paddingInlineEnd: innerMinMargin,
        transition: `padding-inline-start ${token.switchDuration} ease-in-out, padding-inline-end ${token.switchDuration} ease-in-out`,
        [`${switchInnerCls}-checked, ${switchInnerCls}-unchecked`]: {
          display: "block",
          color: token.colorTextLightSolid,
          fontSize: token.fontSizeSM,
          transition: `margin-inline-start ${token.switchDuration} ease-in-out, margin-inline-end ${token.switchDuration} ease-in-out`,
          pointerEvents: "none",
          minHeight: trackHeight
        },
        [`${switchInnerCls}-checked`]: {
          marginInlineStart: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`,
          marginInlineEnd: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`
        },
        [`${switchInnerCls}-unchecked`]: {
          marginTop: calc(trackHeight).mul(-1).equal(),
          marginInlineStart: 0,
          marginInlineEnd: 0
        }
      },
      [`&${componentCls}-checked ${switchInnerCls}`]: {
        paddingInlineStart: innerMinMargin,
        paddingInlineEnd: innerMaxMargin,
        [`${switchInnerCls}-checked`]: {
          marginInlineStart: 0,
          marginInlineEnd: 0
        },
        [`${switchInnerCls}-unchecked`]: {
          marginInlineStart: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`,
          marginInlineEnd: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`
        }
      },
      [`&:not(${componentCls}-disabled):active`]: {
        [`&:not(${componentCls}-checked) ${switchInnerCls}`]: {
          [`${switchInnerCls}-unchecked`]: {
            marginInlineStart: calc(trackPadding).mul(2).equal(),
            marginInlineEnd: calc(trackPadding).mul(-1).mul(2).equal()
          }
        },
        [`&${componentCls}-checked ${switchInnerCls}`]: {
          [`${switchInnerCls}-checked`]: {
            marginInlineStart: calc(trackPadding).mul(-1).mul(2).equal(),
            marginInlineEnd: calc(trackPadding).mul(2).equal()
          }
        }
      }
    }
  };
}, "genSwitchInnerStyle"), genSwitchStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    trackHeight,
    trackMinWidth
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token)), {
      position: "relative",
      display: "inline-block",
      boxSizing: "border-box",
      minWidth: trackMinWidth,
      height: trackHeight,
      lineHeight: unit(trackHeight),
      verticalAlign: "middle",
      background: token.colorTextQuaternary,
      border: "0",
      borderRadius: 100,
      cursor: "pointer",
      transition: `all ${token.motionDurationMid}`,
      userSelect: "none",
      [`&:hover:not(${componentCls}-disabled)`]: {
        background: token.colorTextTertiary
      }
    }), genFocusStyle(token)), {
      [`&${componentCls}-checked`]: {
        background: token.switchColor,
        [`&:hover:not(${componentCls}-disabled)`]: {
          background: token.colorPrimaryHover
        }
      },
      [`&${componentCls}-loading, &${componentCls}-disabled`]: {
        cursor: "not-allowed",
        opacity: token.switchDisabledOpacity,
        "*": {
          boxShadow: "none",
          cursor: "not-allowed"
        }
      },
      // rtl style
      [`&${componentCls}-rtl`]: {
        direction: "rtl"
      }
    })
  };
}, "genSwitchStyle"), prepareComponentToken$2 = /* @__PURE__ */ __name((token) => {
  const {
    fontSize,
    lineHeight,
    controlHeight,
    colorWhite
  } = token, height = fontSize * lineHeight, heightSM = controlHeight / 2, padding = 2, handleSize = height - padding * 2, handleSizeSM = heightSM - padding * 2;
  return {
    trackHeight: height,
    trackHeightSM: heightSM,
    trackMinWidth: handleSize * 2 + padding * 4,
    trackMinWidthSM: handleSizeSM * 2 + padding * 2,
    trackPadding: padding,
    // Fixed value
    handleBg: colorWhite,
    handleSize,
    handleSizeSM,
    handleShadow: `0 2px 4px 0 ${new TinyColor("#00230b").setAlpha(0.2).toRgbString()}`,
    innerMinMargin: handleSize / 2,
    innerMaxMargin: handleSize + padding + padding * 2,
    innerMinMarginSM: handleSizeSM / 2,
    innerMaxMarginSM: handleSizeSM + padding + padding * 2
  };
}, "prepareComponentToken$2"), useStyle$2 = genStyleHooks("Switch", (token) => {
  const switchToken = merge(token, {
    switchDuration: token.motionDurationMid,
    switchColor: token.colorPrimary,
    switchDisabledOpacity: token.opacityLoading,
    switchLoadingIconSize: token.calc(token.fontSizeIcon).mul(0.75).equal(),
    switchLoadingIconColor: `rgba(0, 0, 0, ${token.opacityLoading})`,
    switchHandleActiveInset: "-30%"
  });
  return [
    genSwitchStyle(switchToken),
    // inner style
    genSwitchInnerStyle(switchToken),
    // handle style
    genSwitchHandleStyle(switchToken),
    // loading style
    genSwitchLoadingStyle(switchToken),
    // small style
    genSwitchSmallStyle(switchToken)
  ];
}, prepareComponentToken$2);
var __rest$3 = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
const InternalSwitch = /* @__PURE__ */ React.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    size: customizeSize,
    disabled: customDisabled,
    loading,
    className,
    rootClassName,
    style,
    checked: checkedProp,
    value,
    defaultChecked: defaultCheckedProp,
    defaultValue,
    onChange
  } = props, restProps = __rest$3(props, ["prefixCls", "size", "disabled", "loading", "className", "rootClassName", "style", "checked", "value", "defaultChecked", "defaultValue", "onChange"]), [checked, setChecked] = useMergedState(!1, {
    value: checkedProp ?? value,
    defaultValue: defaultCheckedProp ?? defaultValue
  }), {
    getPrefixCls,
    direction,
    switch: SWITCH
  } = React.useContext(ConfigContext), disabled = React.useContext(DisabledContext), mergedDisabled = (customDisabled ?? disabled) || loading, prefixCls = getPrefixCls("switch", customizePrefixCls), loadingIcon = /* @__PURE__ */ React.createElement("div", {
    className: `${prefixCls}-handle`
  }, loading && /* @__PURE__ */ React.createElement(RefIcon$g, {
    className: `${prefixCls}-loading-icon`
  })), [wrapCSSVar, hashId, cssVarCls] = useStyle$2(prefixCls), mergedSize = useSize(customizeSize), classes = cn(SWITCH == null ? void 0 : SWITCH.className, {
    [`${prefixCls}-small`]: mergedSize === "small",
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, className, rootClassName, hashId, cssVarCls), mergedStyle = Object.assign(Object.assign({}, SWITCH == null ? void 0 : SWITCH.style), style), changeHandler = /* @__PURE__ */ __name(function() {
    setChecked(arguments.length <= 0 ? void 0 : arguments[0]), onChange == null || onChange.apply(void 0, arguments);
  }, "changeHandler");
  return wrapCSSVar(/* @__PURE__ */ React.createElement(Wave, {
    component: "Switch"
  }, /* @__PURE__ */ React.createElement(Switch$2, Object.assign({}, restProps, {
    checked,
    onChange: changeHandler,
    prefixCls,
    className: classes,
    style: mergedStyle,
    disabled: mergedDisabled,
    ref,
    loadingIcon
  }))));
}), Switch$1 = InternalSwitch;
Switch$1.__ANT_SWITCH = !0;
process.env.NODE_ENV !== "production" && (Switch$1.displayName = "Switch");
const genBaseStyle$1 = /* @__PURE__ */ __name((token) => {
  const {
    paddingXXS,
    lineWidth,
    tagPaddingHorizontal,
    componentCls,
    calc
  } = token, paddingInline = calc(tagPaddingHorizontal).sub(lineWidth).equal(), iconMarginInline = calc(paddingXXS).sub(lineWidth).equal();
  return {
    // Result
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      display: "inline-block",
      height: "auto",
      // https://github.com/ant-design/ant-design/pull/47504
      marginInlineEnd: token.marginXS,
      paddingInline,
      fontSize: token.tagFontSize,
      lineHeight: token.tagLineHeight,
      whiteSpace: "nowrap",
      background: token.defaultBg,
      border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
      borderRadius: token.borderRadiusSM,
      opacity: 1,
      transition: `all ${token.motionDurationMid}`,
      textAlign: "start",
      position: "relative",
      // RTL
      [`&${componentCls}-rtl`]: {
        direction: "rtl"
      },
      "&, a, a:hover": {
        color: token.defaultColor
      },
      [`${componentCls}-close-icon`]: {
        marginInlineStart: iconMarginInline,
        fontSize: token.tagIconSize,
        color: token.colorTextDescription,
        cursor: "pointer",
        transition: `all ${token.motionDurationMid}`,
        "&:hover": {
          color: token.colorTextHeading
        }
      },
      [`&${componentCls}-has-color`]: {
        borderColor: "transparent",
        [`&, a, a:hover, ${token.iconCls}-close, ${token.iconCls}-close:hover`]: {
          color: token.colorTextLightSolid
        }
      },
      "&-checkable": {
        backgroundColor: "transparent",
        borderColor: "transparent",
        cursor: "pointer",
        [`&:not(${componentCls}-checkable-checked):hover`]: {
          color: token.colorPrimary,
          backgroundColor: token.colorFillSecondary
        },
        "&:active, &-checked": {
          color: token.colorTextLightSolid
        },
        "&-checked": {
          backgroundColor: token.colorPrimary,
          "&:hover": {
            backgroundColor: token.colorPrimaryHover
          }
        },
        "&:active": {
          backgroundColor: token.colorPrimaryActive
        }
      },
      "&-hidden": {
        display: "none"
      },
      // To ensure that a space will be placed between character and `Icon`.
      [`> ${token.iconCls} + span, > span + ${token.iconCls}`]: {
        marginInlineStart: paddingInline
      }
    }),
    [`${componentCls}-borderless`]: {
      borderColor: "transparent",
      background: token.tagBorderlessBg
    }
  };
}, "genBaseStyle$1"), prepareToken = /* @__PURE__ */ __name((token) => {
  const {
    lineWidth,
    fontSizeIcon,
    calc
  } = token, tagFontSize = token.fontSizeSM;
  return merge(token, {
    tagFontSize,
    tagLineHeight: unit(calc(token.lineHeightSM).mul(tagFontSize).equal()),
    tagIconSize: calc(fontSizeIcon).sub(calc(lineWidth).mul(2)).equal(),
    // Tag icon is much smaller
    tagPaddingHorizontal: 8,
    // Fixed padding.
    tagBorderlessBg: token.defaultBg
  });
}, "prepareToken"), prepareComponentToken$1 = /* @__PURE__ */ __name((token) => ({
  defaultBg: new TinyColor(token.colorFillQuaternary).onBackground(token.colorBgContainer).toHexString(),
  defaultColor: token.colorText
}), "prepareComponentToken$1"), useStyle$1 = genStyleHooks("Tag", (token) => {
  const tagToken = prepareToken(token);
  return genBaseStyle$1(tagToken);
}, prepareComponentToken$1);
var __rest$2 = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
const CheckableTag = /* @__PURE__ */ React.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    style,
    className,
    checked,
    onChange,
    onClick
  } = props, restProps = __rest$2(props, ["prefixCls", "style", "className", "checked", "onChange", "onClick"]), {
    getPrefixCls,
    tag
  } = React.useContext(ConfigContext), handleClick = /* @__PURE__ */ __name((e2) => {
    onChange == null || onChange(!checked), onClick == null || onClick(e2);
  }, "handleClick"), prefixCls = getPrefixCls("tag", customizePrefixCls), [wrapCSSVar, hashId, cssVarCls] = useStyle$1(prefixCls), cls = cn(prefixCls, `${prefixCls}-checkable`, {
    [`${prefixCls}-checkable-checked`]: checked
  }, tag == null ? void 0 : tag.className, className, hashId, cssVarCls);
  return wrapCSSVar(/* @__PURE__ */ React.createElement("span", Object.assign({}, restProps, {
    ref,
    style: Object.assign(Object.assign({}, style), tag == null ? void 0 : tag.style),
    className: cls,
    onClick: handleClick
  })));
}), genPresetStyle = /* @__PURE__ */ __name((token) => genPresetColor(token, (colorKey, _ref) => {
  let {
    textColor,
    lightBorderColor,
    lightColor,
    darkColor
  } = _ref;
  return {
    [`${token.componentCls}${token.componentCls}-${colorKey}`]: {
      color: textColor,
      background: lightColor,
      borderColor: lightBorderColor,
      // Inverse color
      "&-inverse": {
        color: token.colorTextLightSolid,
        background: darkColor,
        borderColor: darkColor
      },
      [`&${token.componentCls}-borderless`]: {
        borderColor: "transparent"
      }
    }
  };
}), "genPresetStyle"), PresetCmp = genSubStyleComponent(["Tag", "preset"], (token) => {
  const tagToken = prepareToken(token);
  return genPresetStyle(tagToken);
}, prepareComponentToken$1);
function capitalize(str) {
  return typeof str != "string" ? str : str.charAt(0).toUpperCase() + str.slice(1);
}
__name(capitalize, "capitalize");
const genTagStatusStyle = /* @__PURE__ */ __name((token, status, cssVariableType) => {
  const capitalizedCssVariableType = capitalize(cssVariableType);
  return {
    [`${token.componentCls}${token.componentCls}-${status}`]: {
      color: token[`color${cssVariableType}`],
      background: token[`color${capitalizedCssVariableType}Bg`],
      borderColor: token[`color${capitalizedCssVariableType}Border`],
      [`&${token.componentCls}-borderless`]: {
        borderColor: "transparent"
      }
    }
  };
}, "genTagStatusStyle"), StatusCmp = genSubStyleComponent(["Tag", "status"], (token) => {
  const tagToken = prepareToken(token);
  return [genTagStatusStyle(tagToken, "success", "Success"), genTagStatusStyle(tagToken, "processing", "Info"), genTagStatusStyle(tagToken, "error", "Error"), genTagStatusStyle(tagToken, "warning", "Warning")];
}, prepareComponentToken$1);
var __rest$1 = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
const InternalTag = /* @__PURE__ */ React.forwardRef((tagProps, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    children,
    icon: icon2,
    color,
    onClose,
    bordered = !0,
    visible: deprecatedVisible
  } = tagProps, props = __rest$1(tagProps, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "bordered", "visible"]), {
    getPrefixCls,
    direction,
    tag: tagContext
  } = React.useContext(ConfigContext), [visible, setVisible] = React.useState(!0), domProps = omit(props, ["closeIcon", "closable"]);
  process.env.NODE_ENV !== "production" && devUseWarning("Tag").deprecated(!("visible" in tagProps), "visible", "visible && <Tag />"), React.useEffect(() => {
    deprecatedVisible !== void 0 && setVisible(deprecatedVisible);
  }, [deprecatedVisible]);
  const isPreset = isPresetColor(color), isStatus = isPresetStatusColor(color), isInternalColor = isPreset || isStatus, tagStyle = Object.assign(Object.assign({
    backgroundColor: color && !isInternalColor ? color : void 0
  }, tagContext == null ? void 0 : tagContext.style), style), prefixCls = getPrefixCls("tag", customizePrefixCls), [wrapCSSVar, hashId, cssVarCls] = useStyle$1(prefixCls), tagClassName = cn(prefixCls, tagContext == null ? void 0 : tagContext.className, {
    [`${prefixCls}-${color}`]: isInternalColor,
    [`${prefixCls}-has-color`]: color && !isInternalColor,
    [`${prefixCls}-hidden`]: !visible,
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-borderless`]: !bordered
  }, className, rootClassName, hashId, cssVarCls), handleCloseClick = /* @__PURE__ */ __name((e2) => {
    e2.stopPropagation(), onClose == null || onClose(e2), !e2.defaultPrevented && setVisible(!1);
  }, "handleCloseClick"), [, mergedCloseIcon] = useClosable(pickClosable(tagProps), pickClosable(tagContext), {
    closable: !1,
    closeIconRender: /* @__PURE__ */ __name((iconNode2) => {
      const replacement = /* @__PURE__ */ React.createElement("span", {
        className: `${prefixCls}-close-icon`,
        onClick: handleCloseClick
      }, iconNode2);
      return replaceElement(iconNode2, replacement, (originProps) => ({
        onClick: /* @__PURE__ */ __name((e2) => {
          var _a;
          (_a = originProps == null ? void 0 : originProps.onClick) === null || _a === void 0 || _a.call(originProps, e2), handleCloseClick(e2);
        }, "onClick"),
        className: cn(originProps == null ? void 0 : originProps.className, `${prefixCls}-close-icon`)
      }));
    }, "closeIconRender")
  }), isNeedWave = typeof props.onClick == "function" || children && children.type === "a", iconNode = icon2 || null, kids = iconNode ? /* @__PURE__ */ React.createElement(React.Fragment, null, iconNode, children && /* @__PURE__ */ React.createElement("span", null, children)) : children, tagNode = /* @__PURE__ */ React.createElement("span", Object.assign({}, domProps, {
    ref,
    className: tagClassName,
    style: tagStyle
  }), kids, mergedCloseIcon, isPreset && /* @__PURE__ */ React.createElement(PresetCmp, {
    key: "preset",
    prefixCls
  }), isStatus && /* @__PURE__ */ React.createElement(StatusCmp, {
    key: "status",
    prefixCls
  }));
  return wrapCSSVar(isNeedWave ? /* @__PURE__ */ React.createElement(Wave, {
    component: "Tag"
  }, tagNode) : tagNode);
}), Tag$1 = InternalTag;
process.env.NODE_ENV !== "production" && (Tag$1.displayName = "Tag");
Tag$1.CheckableTag = CheckableTag;
const groupKeysMap = /* @__PURE__ */ __name((keys2) => {
  const map = /* @__PURE__ */ new Map();
  return keys2.forEach((key, index) => {
    map.set(key, index);
  }), map;
}, "groupKeysMap"), groupDisabledKeysMap = /* @__PURE__ */ __name((dataSource) => {
  const map = /* @__PURE__ */ new Map();
  return dataSource.forEach((_ref, index) => {
    let {
      disabled,
      key
    } = _ref;
    disabled && map.set(key, index);
  }), map;
}, "groupDisabledKeysMap"), useData = /* @__PURE__ */ __name((dataSource, rowKey, targetKeys) => {
  const mergedDataSource = React.useMemo(() => (dataSource || []).map((record) => rowKey ? Object.assign(Object.assign({}, record), {
    key: rowKey(record)
  }) : record), [dataSource, rowKey]), [leftDataSource, rightDataSource] = React.useMemo(() => {
    const leftData = [], rightData = new Array((targetKeys || []).length), targetKeysMap = groupKeysMap(targetKeys || []);
    return mergedDataSource.forEach((record) => {
      targetKeysMap.has(record.key) ? rightData[targetKeysMap.get(record.key)] = record : leftData.push(record);
    }), [leftData, rightData];
  }, [mergedDataSource, targetKeys, rowKey]);
  return [mergedDataSource, leftDataSource, rightDataSource];
}, "useData"), EMPTY_KEYS = [];
function filterKeys(keys2, dataKeys) {
  const filteredKeys = keys2.filter((key) => dataKeys.has(key));
  return keys2.length === filteredKeys.length ? keys2 : filteredKeys;
}
__name(filterKeys, "filterKeys");
function flattenKeys(keys2) {
  return Array.from(keys2).join(";");
}
__name(flattenKeys, "flattenKeys");
function useSelection(leftDataSource, rightDataSource, selectedKeys) {
  const [leftKeys, rightKeys] = React.useMemo(() => [new Set(leftDataSource.map((src) => src.key)), new Set(rightDataSource.map((src) => src.key))], [leftDataSource, rightDataSource]), [mergedSelectedKeys, setMergedSelectedKeys] = useMergedState(EMPTY_KEYS, {
    value: selectedKeys
  }), sourceSelectedKeys = React.useMemo(() => filterKeys(mergedSelectedKeys, leftKeys), [mergedSelectedKeys, leftKeys]), targetSelectedKeys = React.useMemo(() => filterKeys(mergedSelectedKeys, rightKeys), [mergedSelectedKeys, rightKeys]);
  React.useEffect(() => {
    setMergedSelectedKeys([].concat(_toConsumableArray(filterKeys(mergedSelectedKeys, leftKeys)), _toConsumableArray(filterKeys(mergedSelectedKeys, rightKeys))));
  }, [flattenKeys(leftKeys), flattenKeys(rightKeys)]);
  const setSourceSelectedKeys = useEvent((nextSrcKeys) => {
    setMergedSelectedKeys([].concat(_toConsumableArray(nextSrcKeys), _toConsumableArray(targetSelectedKeys)));
  }), setTargetSelectedKeys = useEvent((nextTargetKeys) => {
    setMergedSelectedKeys([].concat(_toConsumableArray(sourceSelectedKeys), _toConsumableArray(nextTargetKeys)));
  });
  return [
    // Keys
    sourceSelectedKeys,
    targetSelectedKeys,
    // Updater
    setSourceSelectedKeys,
    setTargetSelectedKeys
  ];
}
__name(useSelection, "useSelection");
const ListItem = /* @__PURE__ */ __name((props) => {
  const {
    renderedText,
    renderedEl,
    item,
    checked,
    disabled,
    prefixCls,
    onClick,
    onRemove,
    showRemove
  } = props, className = cn(`${prefixCls}-content-item`, {
    [`${prefixCls}-content-item-disabled`]: disabled || item.disabled,
    [`${prefixCls}-content-item-checked`]: checked && !item.disabled
  });
  let title;
  (typeof renderedText == "string" || typeof renderedText == "number") && (title = String(renderedText));
  const [contextLocale] = useLocale("Transfer", localeValues.Transfer), liProps = {
    className,
    title
  }, labelNode = /* @__PURE__ */ React.createElement("span", {
    className: `${prefixCls}-content-item-text`
  }, renderedEl);
  return showRemove ? /* @__PURE__ */ React.createElement("li", Object.assign({}, liProps), labelNode, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    disabled: disabled || item.disabled,
    className: `${prefixCls}-content-item-remove`,
    "aria-label": contextLocale == null ? void 0 : contextLocale.remove,
    onClick: /* @__PURE__ */ __name(() => onRemove == null ? void 0 : onRemove(item), "onClick")
  }, /* @__PURE__ */ React.createElement(RefIcon$h, null))) : (liProps.onClick = disabled || item.disabled ? void 0 : (event) => onClick(item, event), /* @__PURE__ */ React.createElement("li", Object.assign({}, liProps), /* @__PURE__ */ React.createElement(Checkbox, {
    className: `${prefixCls}-checkbox`,
    checked,
    disabled: disabled || item.disabled
  }), labelNode));
}, "ListItem"), ListItem$1 = /* @__PURE__ */ React.memo(ListItem), OmitProps = ["handleFilter", "handleClear", "checkedKeys"], parsePagination = /* @__PURE__ */ __name((pagination2) => Object.assign(Object.assign({}, {
  simple: !0,
  showSizeChanger: !1,
  showLessItems: !1
}), pagination2), "parsePagination"), TransferListBody = /* @__PURE__ */ __name((props, ref) => {
  const {
    prefixCls,
    filteredRenderItems,
    selectedKeys,
    disabled: globalDisabled,
    showRemove,
    pagination: pagination2,
    onScroll,
    onItemSelect,
    onItemRemove
  } = props, [current, setCurrent] = React.useState(1), mergedPagination = React.useMemo(() => pagination2 ? parsePagination(typeof pagination2 == "object" ? pagination2 : {}) : null, [pagination2]), [pageSize, setPageSize] = useMergedState(10, {
    value: mergedPagination == null ? void 0 : mergedPagination.pageSize
  });
  React.useEffect(() => {
    if (mergedPagination) {
      const maxPageCount = Math.ceil(filteredRenderItems.length / pageSize);
      setCurrent(Math.min(current, maxPageCount));
    }
  }, [filteredRenderItems, mergedPagination, pageSize]);
  const onInternalClick = /* @__PURE__ */ __name((item, e2) => {
    onItemSelect(item.key, !selectedKeys.includes(item.key), e2);
  }, "onInternalClick"), onRemove = /* @__PURE__ */ __name((item) => {
    onItemRemove == null || onItemRemove([item.key]);
  }, "onRemove"), onPageChange = /* @__PURE__ */ __name((cur) => {
    setCurrent(cur);
  }, "onPageChange"), onSizeChange = /* @__PURE__ */ __name((cur, size) => {
    setCurrent(cur), setPageSize(size);
  }, "onSizeChange"), memoizedItems = React.useMemo(() => mergedPagination ? filteredRenderItems.slice((current - 1) * pageSize, current * pageSize) : filteredRenderItems, [current, filteredRenderItems, mergedPagination, pageSize]);
  React.useImperativeHandle(ref, () => ({
    items: memoizedItems
  }));
  const paginationNode = mergedPagination ? /* @__PURE__ */ React.createElement(Pagination$1, {
    size: "small",
    disabled: globalDisabled,
    simple: mergedPagination.simple,
    pageSize,
    showLessItems: mergedPagination.showLessItems,
    showSizeChanger: mergedPagination.showSizeChanger,
    className: `${prefixCls}-pagination`,
    total: filteredRenderItems.length,
    current,
    onChange: onPageChange,
    onShowSizeChange: onSizeChange
  }) : null, cls = cn(`${prefixCls}-content`, {
    [`${prefixCls}-content-show-remove`]: showRemove
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ul", {
    className: cls,
    onScroll
  }, (memoizedItems || []).map((_ref) => {
    let {
      renderedEl,
      renderedText,
      item
    } = _ref;
    return /* @__PURE__ */ React.createElement(ListItem$1, {
      key: item.key,
      item,
      renderedText,
      renderedEl,
      prefixCls,
      showRemove,
      onClick: onInternalClick,
      onRemove,
      checked: selectedKeys.includes(item.key),
      disabled: globalDisabled || item.disabled
    });
  })), paginationNode);
}, "TransferListBody");
process.env.NODE_ENV !== "production" && (TransferListBody.displayName = "TransferListBody");
const DefaultListBody = /* @__PURE__ */ React.forwardRef(TransferListBody), Search = /* @__PURE__ */ __name((props) => {
  const {
    placeholder = "",
    value,
    prefixCls,
    disabled,
    onChange,
    handleClear
  } = props, handleChange = React.useCallback((e2) => {
    onChange == null || onChange(e2), e2.target.value === "" && (handleClear == null || handleClear());
  }, [onChange]);
  return /* @__PURE__ */ React.createElement(Input, {
    placeholder,
    className: prefixCls,
    value,
    onChange: handleChange,
    disabled,
    allowClear: !0,
    prefix: /* @__PURE__ */ React.createElement(RefIcon$i, null)
  });
}, "Search");
process.env.NODE_ENV !== "production" && (Search.displayName = "Search");
const defaultRender = /* @__PURE__ */ __name(() => null, "defaultRender");
function isRenderResultPlainObject(result) {
  return !!(result && !/* @__PURE__ */ React__default.isValidElement(result) && Object.prototype.toString.call(result) === "[object Object]");
}
__name(isRenderResultPlainObject, "isRenderResultPlainObject");
function getEnabledItemKeys(items) {
  return items.filter((data) => !data.disabled).map((data) => data.key);
}
__name(getEnabledItemKeys, "getEnabledItemKeys");
const isValidIcon = /* @__PURE__ */ __name((icon2) => icon2 !== void 0, "isValidIcon"), TransferList = /* @__PURE__ */ __name((props) => {
  const {
    prefixCls,
    dataSource = [],
    titleText = "",
    checkedKeys,
    disabled,
    showSearch = !1,
    style,
    searchPlaceholder,
    notFoundContent,
    selectAll,
    deselectAll,
    selectCurrent,
    selectInvert,
    removeAll,
    removeCurrent,
    showSelectAll = !0,
    showRemove,
    pagination: pagination2,
    direction,
    itemsUnit,
    itemUnit,
    selectAllLabel,
    selectionsIcon,
    footer,
    renderList,
    onItemSelectAll,
    onItemRemove,
    handleFilter,
    handleClear,
    filterOption,
    render = defaultRender
  } = props, [filterValue, setFilterValue] = useState(""), listBodyRef = useRef({}), internalHandleFilter = /* @__PURE__ */ __name((e2) => {
    setFilterValue(e2.target.value), handleFilter(e2);
  }, "internalHandleFilter"), internalHandleClear = /* @__PURE__ */ __name(() => {
    setFilterValue(""), handleClear();
  }, "internalHandleClear"), matchFilter = /* @__PURE__ */ __name((text, item) => filterOption ? filterOption(filterValue, item, direction) : text.includes(filterValue), "matchFilter"), renderListBody = /* @__PURE__ */ __name((listProps) => {
    let bodyContent = renderList ? renderList(Object.assign(Object.assign({}, listProps), {
      onItemSelect: /* @__PURE__ */ __name((key, check) => listProps.onItemSelect(key, check), "onItemSelect")
    })) : null;
    const customize = !!bodyContent;
    return customize || (bodyContent = /* @__PURE__ */ React__default.createElement(DefaultListBody, Object.assign({
      ref: listBodyRef
    }, listProps))), {
      customize,
      bodyContent
    };
  }, "renderListBody"), renderItem2 = /* @__PURE__ */ __name((item) => {
    const renderResult = render(item), isRenderResultPlain = isRenderResultPlainObject(renderResult);
    return {
      item,
      renderedEl: isRenderResultPlain ? renderResult.label : renderResult,
      renderedText: isRenderResultPlain ? renderResult.value : renderResult
    };
  }, "renderItem"), notFoundContentEle = useMemo(() => Array.isArray(notFoundContent) ? notFoundContent[direction === "left" ? 0 : 1] : notFoundContent, [notFoundContent, direction]), [filteredItems, filteredRenderItems] = useMemo(() => {
    const filterItems = [], filterRenderItems = [];
    return dataSource.forEach((item) => {
      const renderedItem = renderItem2(item);
      filterValue && !matchFilter(renderedItem.renderedText, item) || (filterItems.push(item), filterRenderItems.push(renderedItem));
    }), [filterItems, filterRenderItems];
  }, [dataSource, filterValue]), checkedActiveItems = useMemo(() => filteredItems.filter((item) => checkedKeys.includes(item.key) && !item.disabled), [checkedKeys, filteredItems]), checkStatus = useMemo(() => {
    if (checkedActiveItems.length === 0)
      return "none";
    const checkedKeysMap = groupKeysMap(checkedKeys);
    return filteredItems.every((item) => checkedKeysMap.has(item.key) || !!item.disabled) ? "all" : "part";
  }, [checkedKeys, checkedActiveItems]), listBody = useMemo(() => {
    const search = showSearch ? /* @__PURE__ */ React__default.createElement("div", {
      className: `${prefixCls}-body-search-wrapper`
    }, /* @__PURE__ */ React__default.createElement(Search, {
      prefixCls: `${prefixCls}-search`,
      onChange: internalHandleFilter,
      handleClear: internalHandleClear,
      placeholder: searchPlaceholder,
      value: filterValue,
      disabled
    })) : null, {
      customize,
      bodyContent
    } = renderListBody(Object.assign(Object.assign({}, omit(props, OmitProps)), {
      filteredItems,
      filteredRenderItems,
      selectedKeys: checkedKeys
    }));
    let bodyNode;
    return customize ? bodyNode = /* @__PURE__ */ React__default.createElement("div", {
      className: `${prefixCls}-body-customize-wrapper`
    }, bodyContent) : bodyNode = filteredItems.length ? bodyContent : /* @__PURE__ */ React__default.createElement("div", {
      className: `${prefixCls}-body-not-found`
    }, notFoundContentEle), /* @__PURE__ */ React__default.createElement("div", {
      className: cn(showSearch ? `${prefixCls}-body ${prefixCls}-body-with-search` : `${prefixCls}-body`)
    }, search, bodyNode);
  }, [showSearch, prefixCls, searchPlaceholder, filterValue, disabled, checkedKeys, filteredItems, filteredRenderItems, notFoundContentEle]), checkBox = /* @__PURE__ */ React__default.createElement(Checkbox, {
    disabled: dataSource.filter((d2) => !d2.disabled).length === 0 || disabled,
    checked: checkStatus === "all",
    indeterminate: checkStatus === "part",
    className: `${prefixCls}-checkbox`,
    onChange: /* @__PURE__ */ __name(() => {
      onItemSelectAll == null || onItemSelectAll(filteredItems.filter((item) => !item.disabled).map((_ref) => {
        let {
          key
        } = _ref;
        return key;
      }), checkStatus !== "all");
    }, "onChange")
  }), getSelectAllLabel = /* @__PURE__ */ __name((selectedCount, totalCount) => {
    if (selectAllLabel)
      return typeof selectAllLabel == "function" ? selectAllLabel({
        selectedCount,
        totalCount
      }) : selectAllLabel;
    const unit2 = totalCount > 1 ? itemsUnit : itemUnit;
    return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, (selectedCount > 0 ? `${selectedCount}/` : "") + totalCount, " ", unit2);
  }, "getSelectAllLabel"), footerDom = footer && (footer.length < 2 ? footer(props) : footer(props, {
    direction
  })), listCls = cn(prefixCls, {
    [`${prefixCls}-with-pagination`]: !!pagination2,
    [`${prefixCls}-with-footer`]: !!footerDom
  }), listFooter = footerDom ? /* @__PURE__ */ React__default.createElement("div", {
    className: `${prefixCls}-footer`
  }, footerDom) : null, checkAllCheckbox = !showRemove && !pagination2 && checkBox;
  let items;
  showRemove ? items = [
    /* Remove Current Page */
    pagination2 ? {
      key: "removeCurrent",
      label: removeCurrent,
      onClick() {
        var _a;
        const pageKeys = getEnabledItemKeys((((_a = listBodyRef.current) === null || _a === void 0 ? void 0 : _a.items) || []).map((entity) => entity.item));
        onItemRemove == null || onItemRemove(pageKeys);
      }
    } : null,
    /* Remove All */
    {
      key: "removeAll",
      label: removeAll,
      onClick() {
        onItemRemove == null || onItemRemove(getEnabledItemKeys(filteredItems));
      }
    }
  ].filter(Boolean) : items = [{
    key: "selectAll",
    label: checkStatus === "all" ? deselectAll : selectAll,
    onClick() {
      const keys2 = getEnabledItemKeys(filteredItems);
      onItemSelectAll == null || onItemSelectAll(keys2, keys2.length !== checkedKeys.length);
    }
  }, pagination2 ? {
    key: "selectCurrent",
    label: selectCurrent,
    onClick() {
      var _a;
      const pageItems = ((_a = listBodyRef.current) === null || _a === void 0 ? void 0 : _a.items) || [];
      onItemSelectAll == null || onItemSelectAll(getEnabledItemKeys(pageItems.map((entity) => entity.item)), !0);
    }
  } : null, {
    key: "selectInvert",
    label: selectInvert,
    onClick() {
      var _a;
      const availablePageItemKeys = getEnabledItemKeys((((_a = listBodyRef.current) === null || _a === void 0 ? void 0 : _a.items) || []).map((entity) => entity.item)), checkedKeySet = new Set(checkedKeys), newCheckedKeysSet = new Set(checkedKeySet);
      availablePageItemKeys.forEach((key) => {
        checkedKeySet.has(key) ? newCheckedKeysSet.delete(key) : newCheckedKeysSet.add(key);
      }), onItemSelectAll == null || onItemSelectAll(Array.from(newCheckedKeysSet), "replace");
    }
  }];
  const dropdown = /* @__PURE__ */ React__default.createElement(Dropdown$2, {
    className: `${prefixCls}-header-dropdown`,
    menu: {
      items
    },
    disabled
  }, isValidIcon(selectionsIcon) ? selectionsIcon : /* @__PURE__ */ React__default.createElement(RefIcon$c, null));
  return /* @__PURE__ */ React__default.createElement("div", {
    className: listCls,
    style
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: `${prefixCls}-header`
  }, showSelectAll ? /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, checkAllCheckbox, dropdown) : null, /* @__PURE__ */ React__default.createElement("span", {
    className: `${prefixCls}-header-selected`
  }, getSelectAllLabel(checkedActiveItems.length, filteredItems.length)), /* @__PURE__ */ React__default.createElement("span", {
    className: `${prefixCls}-header-title`
  }, titleText)), listBody, listFooter);
}, "TransferList");
process.env.NODE_ENV !== "production" && (TransferList.displayName = "TransferList");
const Operation = /* @__PURE__ */ __name((props) => {
  const {
    disabled,
    moveToLeft,
    moveToRight,
    leftArrowText = "",
    rightArrowText = "",
    leftActive,
    rightActive,
    className,
    style,
    direction,
    oneWay
  } = props;
  return /* @__PURE__ */ React.createElement("div", {
    className,
    style
  }, /* @__PURE__ */ React.createElement(Button, {
    type: "primary",
    size: "small",
    disabled: disabled || !rightActive,
    onClick: moveToRight,
    icon: direction !== "rtl" ? /* @__PURE__ */ React.createElement(RefIcon$b, null) : /* @__PURE__ */ React.createElement(RefIcon$d, null)
  }, rightArrowText), !oneWay && /* @__PURE__ */ React.createElement(Button, {
    type: "primary",
    size: "small",
    disabled: disabled || !leftActive,
    onClick: moveToLeft,
    icon: direction !== "rtl" ? /* @__PURE__ */ React.createElement(RefIcon$d, null) : /* @__PURE__ */ React.createElement(RefIcon$b, null)
  }, leftArrowText));
}, "Operation");
process.env.NODE_ENV !== "production" && (Operation.displayName = "Operation");
const genTransferCustomizeStyle = /* @__PURE__ */ __name((token) => {
  const {
    antCls,
    componentCls,
    listHeight,
    controlHeightLG
  } = token, tableCls = `${antCls}-table`, inputCls = `${antCls}-input`;
  return {
    [`${componentCls}-customize-list`]: {
      [`${componentCls}-list`]: {
        flex: "1 1 50%",
        width: "auto",
        height: "auto",
        minHeight: listHeight,
        minWidth: 0
      },
      // =================== Hook Components ===================
      [`${tableCls}-wrapper`]: {
        [`${tableCls}-small`]: {
          border: 0,
          borderRadius: 0,
          [`${tableCls}-selection-column`]: {
            width: controlHeightLG,
            minWidth: controlHeightLG
          }
        },
        [`${tableCls}-pagination${tableCls}-pagination`]: {
          margin: 0,
          padding: token.paddingXS
        }
      },
      [`${inputCls}[disabled]`]: {
        backgroundColor: "transparent"
      }
    }
  };
}, "genTransferCustomizeStyle"), genTransferStatusColor = /* @__PURE__ */ __name((token, color) => {
  const {
    componentCls,
    colorBorder
  } = token;
  return {
    [`${componentCls}-list`]: {
      borderColor: color,
      "&-search:not([disabled])": {
        borderColor: colorBorder
      }
    }
  };
}, "genTransferStatusColor"), genTransferStatusStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-status-error`]: Object.assign({}, genTransferStatusColor(token, token.colorError)),
    [`${componentCls}-status-warning`]: Object.assign({}, genTransferStatusColor(token, token.colorWarning))
  };
}, "genTransferStatusStyle"), genTransferListStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    colorBorder,
    colorSplit,
    lineWidth,
    itemHeight,
    headerHeight,
    transferHeaderVerticalPadding,
    itemPaddingBlock,
    controlItemBgActive,
    colorTextDisabled,
    colorTextSecondary,
    listHeight,
    listWidth,
    listWidthLG,
    fontSizeIcon,
    marginXS,
    paddingSM,
    lineType,
    antCls,
    iconCls,
    motionDurationSlow,
    controlItemBgHover,
    borderRadiusLG,
    colorBgContainer,
    colorText,
    controlItemBgActiveHover
  } = token, contentBorderRadius = unit(token.calc(borderRadiusLG).sub(lineWidth).equal());
  return {
    display: "flex",
    flexDirection: "column",
    width: listWidth,
    height: listHeight,
    border: `${unit(lineWidth)} ${lineType} ${colorBorder}`,
    borderRadius: token.borderRadiusLG,
    "&-with-pagination": {
      width: listWidthLG,
      height: "auto"
    },
    "&-search": {
      [`${iconCls}-search`]: {
        color: colorTextDisabled
      }
    },
    "&-header": {
      display: "flex",
      flex: "none",
      alignItems: "center",
      height: headerHeight,
      // border-top is on the transfer dom. We should minus 1px for this
      padding: `${unit(token.calc(transferHeaderVerticalPadding).sub(lineWidth).equal())} ${unit(paddingSM)} ${unit(transferHeaderVerticalPadding)}`,
      color: colorText,
      background: colorBgContainer,
      borderBottom: `${unit(lineWidth)} ${lineType} ${colorSplit}`,
      borderRadius: `${unit(borderRadiusLG)} ${unit(borderRadiusLG)} 0 0`,
      "> *:not(:last-child)": {
        marginInlineEnd: 4
        // This is magic and fixed number, DO NOT use token since it may change.
      },
      "> *": {
        flex: "none"
      },
      "&-title": Object.assign(Object.assign({}, textEllipsis), {
        flex: "auto",
        textAlign: "end"
      }),
      "&-dropdown": Object.assign(Object.assign({}, resetIcon()), {
        fontSize: fontSizeIcon,
        transform: "translateY(10%)",
        cursor: "pointer",
        "&[disabled]": {
          cursor: "not-allowed"
        }
      })
    },
    "&-body": {
      display: "flex",
      flex: "auto",
      flexDirection: "column",
      fontSize: token.fontSize,
      // https://blog.csdn.net/qq449245884/article/details/107373672/
      minHeight: 0,
      "&-search-wrapper": {
        position: "relative",
        flex: "none",
        padding: paddingSM
      }
    },
    "&-content": {
      flex: "auto",
      margin: 0,
      padding: 0,
      overflow: "auto",
      listStyle: "none",
      borderRadius: `0 0 ${contentBorderRadius} ${contentBorderRadius}`,
      "&-item": {
        display: "flex",
        alignItems: "center",
        minHeight: itemHeight,
        padding: `${unit(itemPaddingBlock)} ${unit(paddingSM)}`,
        transition: `all ${motionDurationSlow}`,
        "> *:not(:last-child)": {
          marginInlineEnd: marginXS
        },
        "> *": {
          flex: "none"
        },
        "&-text": Object.assign(Object.assign({}, textEllipsis), {
          flex: "auto"
        }),
        "&-remove": Object.assign(Object.assign({}, operationUnit(token)), {
          color: colorBorder,
          "&:hover, &:focus": {
            color: colorTextSecondary
          }
        }),
        [`&:not(${componentCls}-list-content-item-disabled)`]: {
          "&:hover": {
            backgroundColor: controlItemBgHover,
            cursor: "pointer"
          },
          [`&${componentCls}-list-content-item-checked:hover`]: {
            backgroundColor: controlItemBgActiveHover
          }
        },
        "&-checked": {
          backgroundColor: controlItemBgActive
        },
        "&-disabled": {
          color: colorTextDisabled,
          cursor: "not-allowed"
        }
      },
      // Do not change hover style when `oneWay` mode
      [`&-show-remove ${componentCls}-list-content-item:not(${componentCls}-list-content-item-disabled):hover`]: {
        background: "transparent",
        cursor: "default"
      }
    },
    "&-pagination": {
      padding: token.paddingXS,
      textAlign: "end",
      borderTop: `${unit(lineWidth)} ${lineType} ${colorSplit}`,
      [`${antCls}-pagination-options`]: {
        paddingInlineEnd: token.paddingXS
      }
    },
    "&-body-not-found": {
      flex: "none",
      width: "100%",
      margin: "auto 0",
      color: colorTextDisabled,
      textAlign: "center"
    },
    "&-footer": {
      borderTop: `${unit(lineWidth)} ${lineType} ${colorSplit}`
    },
    // fix: https://github.com/ant-design/ant-design/issues/44489
    "&-checkbox": {
      lineHeight: 1
    }
  };
}, "genTransferListStyle"), genTransferStyle = /* @__PURE__ */ __name((token) => {
  const {
    antCls,
    iconCls,
    componentCls,
    marginXS,
    marginXXS,
    fontSizeIcon,
    colorBgContainerDisabled
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      position: "relative",
      display: "flex",
      alignItems: "stretch",
      [`${componentCls}-disabled`]: {
        [`${componentCls}-list`]: {
          background: colorBgContainerDisabled
        }
      },
      [`${componentCls}-list`]: genTransferListStyle(token),
      [`${componentCls}-operation`]: {
        display: "flex",
        flex: "none",
        flexDirection: "column",
        alignSelf: "center",
        margin: `0 ${unit(marginXS)}`,
        verticalAlign: "middle",
        gap: marginXXS,
        [`${antCls}-btn ${iconCls}`]: {
          fontSize: fontSizeIcon
        }
      }
    })
  };
}, "genTransferStyle"), genTransferRTLStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-rtl`]: {
      direction: "rtl"
    }
  };
}, "genTransferRTLStyle"), prepareComponentToken = /* @__PURE__ */ __name((token) => {
  const {
    fontSize,
    lineHeight,
    controlHeight,
    controlHeightLG,
    lineWidth
  } = token, fontHeight = Math.round(fontSize * lineHeight);
  return {
    listWidth: 180,
    listHeight: 200,
    listWidthLG: 250,
    headerHeight: controlHeightLG,
    itemHeight: controlHeight,
    itemPaddingBlock: (controlHeight - fontHeight) / 2,
    transferHeaderVerticalPadding: Math.ceil((controlHeightLG - lineWidth - fontHeight) / 2)
  };
}, "prepareComponentToken"), useStyle = genStyleHooks("Transfer", (token) => {
  const transferToken = merge(token);
  return [genTransferStyle(transferToken), genTransferCustomizeStyle(transferToken), genTransferStatusStyle(transferToken), genTransferRTLStyle(transferToken)];
}, prepareComponentToken), Transfer$1 = /* @__PURE__ */ __name((props) => {
  const {
    dataSource,
    targetKeys = [],
    selectedKeys,
    selectAllLabels = [],
    operations = [],
    style = {},
    listStyle = {},
    locale = {},
    titles: titles2,
    disabled,
    showSearch = !1,
    operationStyle,
    showSelectAll,
    oneWay,
    pagination: pagination2,
    status: customStatus,
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    selectionsIcon,
    filterOption,
    render,
    footer,
    children,
    rowKey,
    onScroll,
    onChange,
    onSearch,
    onSelectChange
  } = props, {
    getPrefixCls,
    renderEmpty,
    direction: dir,
    transfer
  } = useContext(ConfigContext), prefixCls = getPrefixCls("transfer", customizePrefixCls), [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls), [mergedDataSource, leftDataSource, rightDataSource] = useData(dataSource, rowKey, targetKeys), [
    // Keys
    sourceSelectedKeys,
    targetSelectedKeys,
    // Setters
    setSourceSelectedKeys,
    setTargetSelectedKeys
  ] = useSelection(leftDataSource, rightDataSource, selectedKeys), [leftMultipleSelect, updateLeftPrevSelectedIndex] = useMultipleSelect((item) => item.key), [rightMultipleSelect, updateRightPrevSelectedIndex] = useMultipleSelect((item) => item.key);
  if (process.env.NODE_ENV !== "production") {
    const warning2 = devUseWarning("Transfer");
    process.env.NODE_ENV !== "production" && warning2(!pagination2 || !children, "usage", "`pagination` not support customize render list.");
  }
  const setStateKeys = useCallback((direction, keys2) => {
    if (direction === "left") {
      const nextKeys = typeof keys2 == "function" ? keys2(sourceSelectedKeys || []) : keys2;
      setSourceSelectedKeys(nextKeys);
    } else {
      const nextKeys = typeof keys2 == "function" ? keys2(targetSelectedKeys || []) : keys2;
      setTargetSelectedKeys(nextKeys);
    }
  }, [sourceSelectedKeys, targetSelectedKeys]), setPrevSelectedIndex = /* @__PURE__ */ __name((direction, value) => {
    (direction === "left" ? updateLeftPrevSelectedIndex : updateRightPrevSelectedIndex)(value);
  }, "setPrevSelectedIndex"), handleSelectChange = useCallback((direction, holder) => {
    direction === "left" ? onSelectChange == null || onSelectChange(holder, targetSelectedKeys) : onSelectChange == null || onSelectChange(sourceSelectedKeys, holder);
  }, [sourceSelectedKeys, targetSelectedKeys]), getTitles = /* @__PURE__ */ __name((transferLocale) => {
    var _a;
    return (_a = titles2 ?? transferLocale.titles) !== null && _a !== void 0 ? _a : [];
  }, "getTitles"), handleLeftScroll = /* @__PURE__ */ __name((e2) => {
    onScroll == null || onScroll("left", e2);
  }, "handleLeftScroll"), handleRightScroll = /* @__PURE__ */ __name((e2) => {
    onScroll == null || onScroll("right", e2);
  }, "handleRightScroll"), moveTo = /* @__PURE__ */ __name((direction) => {
    const moveKeys = direction === "right" ? sourceSelectedKeys : targetSelectedKeys, dataSourceDisabledKeysMap = groupDisabledKeysMap(mergedDataSource), newMoveKeys = moveKeys.filter((key) => !dataSourceDisabledKeysMap.has(key)), newMoveKeysMap = groupKeysMap(newMoveKeys), newTargetKeys = direction === "right" ? newMoveKeys.concat(targetKeys) : targetKeys.filter((targetKey) => !newMoveKeysMap.has(targetKey)), oppositeDirection = direction === "right" ? "left" : "right";
    setStateKeys(oppositeDirection, []), handleSelectChange(oppositeDirection, []), onChange == null || onChange(newTargetKeys, direction, newMoveKeys);
  }, "moveTo"), moveToLeft = /* @__PURE__ */ __name(() => {
    moveTo("left"), setPrevSelectedIndex("left", null);
  }, "moveToLeft"), moveToRight = /* @__PURE__ */ __name(() => {
    moveTo("right"), setPrevSelectedIndex("right", null);
  }, "moveToRight"), onItemSelectAll = /* @__PURE__ */ __name((direction, keys2, checkAll) => {
    setStateKeys(direction, (prevKeys) => {
      let mergedCheckedKeys = [];
      if (checkAll === "replace")
        mergedCheckedKeys = keys2;
      else if (checkAll)
        mergedCheckedKeys = Array.from(new Set([].concat(_toConsumableArray(prevKeys), _toConsumableArray(keys2))));
      else {
        const selectedKeysMap = groupKeysMap(keys2);
        mergedCheckedKeys = prevKeys.filter((key) => !selectedKeysMap.has(key));
      }
      return handleSelectChange(direction, mergedCheckedKeys), mergedCheckedKeys;
    }), setPrevSelectedIndex(direction, null);
  }, "onItemSelectAll"), onLeftItemSelectAll = /* @__PURE__ */ __name((keys2, checkAll) => {
    onItemSelectAll("left", keys2, checkAll);
  }, "onLeftItemSelectAll"), onRightItemSelectAll = /* @__PURE__ */ __name((keys2, checkAll) => {
    onItemSelectAll("right", keys2, checkAll);
  }, "onRightItemSelectAll"), leftFilter = /* @__PURE__ */ __name((e2) => onSearch == null ? void 0 : onSearch("left", e2.target.value), "leftFilter"), rightFilter = /* @__PURE__ */ __name((e2) => onSearch == null ? void 0 : onSearch("right", e2.target.value), "rightFilter"), handleLeftClear = /* @__PURE__ */ __name(() => onSearch == null ? void 0 : onSearch("left", ""), "handleLeftClear"), handleRightClear = /* @__PURE__ */ __name(() => onSearch == null ? void 0 : onSearch("right", ""), "handleRightClear"), handleSingleSelect = /* @__PURE__ */ __name((direction, holder, selectedKey, checked, currentSelectedIndex) => {
    holder.has(selectedKey) && (holder.delete(selectedKey), setPrevSelectedIndex(direction, null)), checked && (holder.add(selectedKey), setPrevSelectedIndex(direction, currentSelectedIndex));
  }, "handleSingleSelect"), handleMultipleSelect = /* @__PURE__ */ __name((direction, data, holder, currentSelectedIndex) => {
    (direction === "left" ? leftMultipleSelect : rightMultipleSelect)(currentSelectedIndex, data, holder);
  }, "handleMultipleSelect"), onItemSelect = /* @__PURE__ */ __name((direction, selectedKey, checked, multiple) => {
    const isLeftDirection = direction === "left", holder = _toConsumableArray(isLeftDirection ? sourceSelectedKeys : targetSelectedKeys), holderSet = new Set(holder), data = _toConsumableArray(isLeftDirection ? leftDataSource : rightDataSource).filter((item) => !(item != null && item.disabled)), currentSelectedIndex = data.findIndex((item) => item.key === selectedKey);
    multiple && holder.length > 0 ? handleMultipleSelect(direction, data, holderSet, currentSelectedIndex) : handleSingleSelect(direction, holderSet, selectedKey, checked, currentSelectedIndex);
    const holderArr = Array.from(holderSet);
    handleSelectChange(direction, holderArr), props.selectedKeys || setStateKeys(direction, holderArr);
  }, "onItemSelect"), onLeftItemSelect = /* @__PURE__ */ __name((selectedKey, checked, e2) => {
    onItemSelect("left", selectedKey, checked, e2 == null ? void 0 : e2.shiftKey);
  }, "onLeftItemSelect"), onRightItemSelect = /* @__PURE__ */ __name((selectedKey, checked, e2) => {
    onItemSelect("right", selectedKey, checked, e2 == null ? void 0 : e2.shiftKey);
  }, "onRightItemSelect"), onRightItemRemove = /* @__PURE__ */ __name((keys2) => {
    setStateKeys("right", []), onChange == null || onChange(targetKeys.filter((key) => !keys2.includes(key)), "left", _toConsumableArray(keys2));
  }, "onRightItemRemove"), handleListStyle = /* @__PURE__ */ __name((direction) => typeof listStyle == "function" ? listStyle({
    direction
  }) : listStyle || {}, "handleListStyle"), formItemContext = useContext(FormItemInputContext), {
    hasFeedback,
    status
  } = formItemContext, getLocale = /* @__PURE__ */ __name((transferLocale) => Object.assign(Object.assign(Object.assign({}, transferLocale), {
    notFoundContent: (renderEmpty == null ? void 0 : renderEmpty("Transfer")) || /* @__PURE__ */ React__default.createElement(DefaultRenderEmpty, {
      componentName: "Transfer"
    })
  }), locale), "getLocale"), mergedStatus = getMergedStatus(status, customStatus), mergedPagination = !children && pagination2, leftActive = rightDataSource.filter((d2) => targetSelectedKeys.includes(d2.key) && !d2.disabled).length > 0, rightActive = leftDataSource.filter((d2) => sourceSelectedKeys.includes(d2.key) && !d2.disabled).length > 0, cls = cn(prefixCls, {
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-customize-list`]: !!children,
    [`${prefixCls}-rtl`]: dir === "rtl"
  }, getStatusClassNames(prefixCls, mergedStatus, hasFeedback), transfer == null ? void 0 : transfer.className, className, rootClassName, hashId, cssVarCls), [contextLocale] = useLocale("Transfer", localeValues.Transfer), listLocale = getLocale(contextLocale), [leftTitle, rightTitle] = getTitles(listLocale), mergedSelectionsIcon = selectionsIcon ?? (transfer == null ? void 0 : transfer.selectionsIcon);
  return wrapCSSVar(/* @__PURE__ */ React__default.createElement("div", {
    className: cls,
    style: Object.assign(Object.assign({}, transfer == null ? void 0 : transfer.style), style)
  }, /* @__PURE__ */ React__default.createElement(TransferList, Object.assign({
    prefixCls: `${prefixCls}-list`,
    titleText: leftTitle,
    dataSource: leftDataSource,
    filterOption,
    style: handleListStyle("left"),
    checkedKeys: sourceSelectedKeys,
    handleFilter: leftFilter,
    handleClear: handleLeftClear,
    onItemSelect: onLeftItemSelect,
    onItemSelectAll: onLeftItemSelectAll,
    render,
    showSearch,
    renderList: children,
    footer,
    onScroll: handleLeftScroll,
    disabled,
    direction: dir === "rtl" ? "right" : "left",
    showSelectAll,
    selectAllLabel: selectAllLabels[0],
    pagination: mergedPagination,
    selectionsIcon: mergedSelectionsIcon
  }, listLocale)), /* @__PURE__ */ React__default.createElement(Operation, {
    className: `${prefixCls}-operation`,
    rightActive,
    rightArrowText: operations[0],
    moveToRight,
    leftActive,
    leftArrowText: operations[1],
    moveToLeft,
    style: operationStyle,
    disabled,
    direction: dir,
    oneWay
  }), /* @__PURE__ */ React__default.createElement(TransferList, Object.assign({
    prefixCls: `${prefixCls}-list`,
    titleText: rightTitle,
    dataSource: rightDataSource,
    filterOption,
    style: handleListStyle("right"),
    checkedKeys: targetSelectedKeys,
    handleFilter: rightFilter,
    handleClear: handleRightClear,
    onItemSelect: onRightItemSelect,
    onItemSelectAll: onRightItemSelectAll,
    onItemRemove: onRightItemRemove,
    render,
    showSearch,
    renderList: children,
    footer,
    onScroll: handleRightScroll,
    disabled,
    direction: dir === "rtl" ? "left" : "right",
    showSelectAll,
    selectAllLabel: selectAllLabels[1],
    showRemove: oneWay,
    pagination: mergedPagination,
    selectionsIcon: mergedSelectionsIcon
  }, listLocale))));
}, "Transfer$1");
process.env.NODE_ENV !== "production" && (Transfer$1.displayName = "Transfer");
Transfer$1.List = TransferList;
Transfer$1.Search = Search;
Transfer$1.Operation = Operation;
const useCache = /* @__PURE__ */ __name(function(values) {
  var cacheRef = React.useRef({
    valueLabels: /* @__PURE__ */ new Map()
  });
  return React.useMemo(function() {
    var valueLabels = cacheRef.current.valueLabels, valueLabelsCache = /* @__PURE__ */ new Map(), filledValues = values.map(function(item) {
      var value = item.value, label2 = item.label, mergedLabel = label2 ?? valueLabels.get(value);
      return valueLabelsCache.set(value, mergedLabel), _objectSpread2(_objectSpread2({}, item), {}, {
        label: mergedLabel
      });
    });
    return cacheRef.current.valueLabels = valueLabelsCache, [filledValues];
  }, [values]);
}, "useCache");
var useCheckedKeys = /* @__PURE__ */ __name(function(rawLabeledValues, rawHalfCheckedValues, treeConduction, keyEntities) {
  return React.useMemo(function() {
    var extractValues = /* @__PURE__ */ __name(function(values) {
      return values.map(function(_ref) {
        var value = _ref.value;
        return value;
      });
    }, "extractValues"), checkedKeys = extractValues(rawLabeledValues), halfCheckedKeys = extractValues(rawHalfCheckedValues), missingValues = checkedKeys.filter(function(key) {
      return !keyEntities[key];
    }), finalCheckedKeys = checkedKeys, finalHalfCheckedKeys = halfCheckedKeys;
    if (treeConduction) {
      var conductResult = conductCheck(checkedKeys, !0, keyEntities);
      finalCheckedKeys = conductResult.checkedKeys, finalHalfCheckedKeys = conductResult.halfCheckedKeys;
    }
    return [Array.from(new Set([].concat(_toConsumableArray(missingValues), _toConsumableArray(finalCheckedKeys)))), finalHalfCheckedKeys];
  }, [rawLabeledValues, rawHalfCheckedValues, treeConduction, keyEntities]);
}, "useCheckedKeys"), toArray = /* @__PURE__ */ __name(function(value) {
  return Array.isArray(value) ? value : value !== void 0 ? [value] : [];
}, "toArray"), fillFieldNames = /* @__PURE__ */ __name(function(fieldNames) {
  var _ref = fieldNames || {}, label2 = _ref.label, value = _ref.value, children = _ref.children;
  return {
    _title: label2 ? [label2] : ["title", "label"],
    value: value || "value",
    key: value || "value",
    children: children || "children"
  };
}, "fillFieldNames"), isCheckDisabled = /* @__PURE__ */ __name(function(node) {
  return !node || node.disabled || node.disableCheckbox || node.checkable === !1;
}, "isCheckDisabled"), getAllKeys = /* @__PURE__ */ __name(function(treeData, fieldNames) {
  var keys2 = [], dig = /* @__PURE__ */ __name(function dig2(list) {
    list.forEach(function(item) {
      var children = item[fieldNames.children];
      children && (keys2.push(item[fieldNames.value]), dig2(children));
    });
  }, "dig");
  return dig(treeData), keys2;
}, "getAllKeys"), isNil = /* @__PURE__ */ __name(function(val) {
  return val == null;
}, "isNil");
const useDataEntities = /* @__PURE__ */ __name(function(treeData, fieldNames) {
  return React.useMemo(function() {
    var collection = convertDataToEntities(treeData, {
      fieldNames,
      initWrapper: /* @__PURE__ */ __name(function(wrapper) {
        return _objectSpread2(_objectSpread2({}, wrapper), {}, {
          valueEntities: /* @__PURE__ */ new Map()
        });
      }, "initWrapper"),
      processEntity: /* @__PURE__ */ __name(function(entity, wrapper) {
        var val = entity.node[fieldNames.value];
        if (process.env.NODE_ENV !== "production") {
          var key = entity.node.key;
          warningOnce(!isNil(val), "TreeNode `value` is invalidate: undefined"), warningOnce(!wrapper.valueEntities.has(val), "Same `value` exist in the tree: ".concat(val)), warningOnce(!key || String(key) === String(val), "`key` or `value` with TreeNode must be the same or you can remove one of them. key: ".concat(key, ", value: ").concat(val, "."));
        }
        wrapper.valueEntities.set(val, entity);
      }, "processEntity")
    });
    return collection;
  }, [treeData, fieldNames]);
}, "useDataEntities");
var TreeNode = /* @__PURE__ */ __name(function() {
  return null;
}, "TreeNode"), _excluded$1 = ["children", "value"];
function convertChildrenToData(nodes) {
  return toArray$1(nodes).map(function(node) {
    if (!/* @__PURE__ */ React.isValidElement(node) || !node.type)
      return null;
    var _ref = node, key = _ref.key, _ref$props = _ref.props, children = _ref$props.children, value = _ref$props.value, restProps = _objectWithoutProperties(_ref$props, _excluded$1), data = _objectSpread2({
      key,
      value
    }, restProps), childData = convertChildrenToData(children);
    return childData.length && (data.children = childData), data;
  }).filter(function(data) {
    return data;
  });
}
__name(convertChildrenToData, "convertChildrenToData");
function fillLegacyProps(dataNode) {
  if (!dataNode)
    return dataNode;
  var cloneNode = _objectSpread2({}, dataNode);
  return "props" in cloneNode || Object.defineProperty(cloneNode, "props", {
    get: /* @__PURE__ */ __name(function() {
      return warningOnce(!1, "New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."), cloneNode;
    }, "get")
  }), cloneNode;
}
__name(fillLegacyProps, "fillLegacyProps");
function fillAdditionalInfo(extra, triggerValue, checkedValues, treeData, showPosition, fieldNames) {
  var triggerNode = null, nodeList = null;
  function generateMap() {
    function dig(list) {
      var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "0", parentIncluded = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      return list.map(function(option, index) {
        var pos = "".concat(level, "-").concat(index), value = option[fieldNames.value], included = checkedValues.includes(value), children = dig(option[fieldNames.children] || [], pos, included), node = /* @__PURE__ */ React.createElement(TreeNode, option, children.map(function(child) {
          return child.node;
        }));
        if (triggerValue === value && (triggerNode = node), included) {
          var checkedNode = {
            pos,
            node,
            children
          };
          return parentIncluded || nodeList.push(checkedNode), checkedNode;
        }
        return null;
      }).filter(function(node) {
        return node;
      });
    }
    __name(dig, "dig"), nodeList || (nodeList = [], dig(treeData), nodeList.sort(function(_ref2, _ref3) {
      var val1 = _ref2.node.props.value, val2 = _ref3.node.props.value, index1 = checkedValues.indexOf(val1), index2 = checkedValues.indexOf(val2);
      return index1 - index2;
    }));
  }
  __name(generateMap, "generateMap"), Object.defineProperty(extra, "triggerNode", {
    get: /* @__PURE__ */ __name(function() {
      return warningOnce(!1, "`triggerNode` is deprecated. Please consider decoupling data with node."), generateMap(), triggerNode;
    }, "get")
  }), Object.defineProperty(extra, "allCheckedNodes", {
    get: /* @__PURE__ */ __name(function() {
      return warningOnce(!1, "`allCheckedNodes` is deprecated. Please consider decoupling data with node."), generateMap(), showPosition ? nodeList : nodeList.map(function(_ref4) {
        var node = _ref4.node;
        return node;
      });
    }, "get")
  });
}
__name(fillAdditionalInfo, "fillAdditionalInfo");
var useFilterTreeData = /* @__PURE__ */ __name(function(treeData, searchValue, options) {
  var fieldNames = options.fieldNames, treeNodeFilterProp = options.treeNodeFilterProp, filterTreeNode = options.filterTreeNode, fieldChildren = fieldNames.children;
  return React.useMemo(function() {
    if (!searchValue || filterTreeNode === !1)
      return treeData;
    var filterOptionFunc = typeof filterTreeNode == "function" ? filterTreeNode : function(_2, dataNode) {
      return String(dataNode[treeNodeFilterProp]).toUpperCase().includes(searchValue.toUpperCase());
    }, filterTreeNodes = /* @__PURE__ */ __name(function filterTreeNodes2(nodes) {
      var keepAll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return nodes.reduce(function(filtered, node) {
        var children = node[fieldChildren], isMatch = keepAll || filterOptionFunc(searchValue, fillLegacyProps(node)), filteredChildren = filterTreeNodes2(children || [], isMatch);
        return (isMatch || filteredChildren.length) && filtered.push(_objectSpread2(_objectSpread2({}, node), {}, _defineProperty({
          isLeaf: void 0
        }, fieldChildren, filteredChildren))), filtered;
      }, []);
    }, "filterTreeNodes");
    return filterTreeNodes(treeData);
  }, [treeData, searchValue, fieldChildren, treeNodeFilterProp, filterTreeNode]);
}, "useFilterTreeData");
function useRefFunc(callback) {
  var funcRef = React.useRef();
  funcRef.current = callback;
  var cacheFn = React.useCallback(function() {
    return funcRef.current.apply(funcRef, arguments);
  }, []);
  return cacheFn;
}
__name(useRefFunc, "useRefFunc");
function buildTreeStructure(nodes, config) {
  var id = config.id, pId = config.pId, rootPId = config.rootPId, nodeMap = /* @__PURE__ */ new Map(), rootNodes = [];
  return nodes.forEach(function(node) {
    var nodeKey = node[id], clonedNode = _objectSpread2(_objectSpread2({}, node), {}, {
      key: node.key || nodeKey
    });
    nodeMap.set(nodeKey, clonedNode);
  }), nodeMap.forEach(function(node) {
    var parentKey = node[pId], parent2 = nodeMap.get(parentKey);
    parent2 ? (parent2.children = parent2.children || [], parent2.children.push(node)) : (parentKey === rootPId || rootPId === null) && rootNodes.push(node);
  }), rootNodes;
}
__name(buildTreeStructure, "buildTreeStructure");
function useTreeData(treeData, children, simpleMode) {
  return React.useMemo(function() {
    if (treeData) {
      if (simpleMode) {
        var config = _objectSpread2({
          id: "id",
          pId: "pId",
          rootPId: null
        }, _typeof(simpleMode) === "object" ? simpleMode : {});
        return buildTreeStructure(treeData, config);
      }
      return treeData;
    }
    return convertChildrenToData(children);
  }, [children, simpleMode, treeData]);
}
__name(useTreeData, "useTreeData");
var LegacySelectContext = /* @__PURE__ */ React.createContext(null), TreeSelectContext = /* @__PURE__ */ React.createContext(null), HIDDEN_STYLE = {
  width: 0,
  height: 0,
  display: "flex",
  overflow: "hidden",
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
}, OptionList = /* @__PURE__ */ __name(function(_2, ref) {
  var _useBaseProps = useBaseProps(), prefixCls = _useBaseProps.prefixCls, multiple = _useBaseProps.multiple, searchValue = _useBaseProps.searchValue, toggleOpen = _useBaseProps.toggleOpen, open2 = _useBaseProps.open, notFoundContent = _useBaseProps.notFoundContent, _React$useContext = React.useContext(TreeSelectContext), virtual = _React$useContext.virtual, listHeight = _React$useContext.listHeight, listItemHeight = _React$useContext.listItemHeight, listItemScrollOffset = _React$useContext.listItemScrollOffset, treeData = _React$useContext.treeData, fieldNames = _React$useContext.fieldNames, onSelect = _React$useContext.onSelect, dropdownMatchSelectWidth = _React$useContext.dropdownMatchSelectWidth, treeExpandAction = _React$useContext.treeExpandAction, treeTitleRender = _React$useContext.treeTitleRender, onPopupScroll = _React$useContext.onPopupScroll, _React$useContext2 = React.useContext(LegacySelectContext), checkable = _React$useContext2.checkable, checkedKeys = _React$useContext2.checkedKeys, halfCheckedKeys = _React$useContext2.halfCheckedKeys, treeExpandedKeys = _React$useContext2.treeExpandedKeys, treeDefaultExpandAll = _React$useContext2.treeDefaultExpandAll, treeDefaultExpandedKeys = _React$useContext2.treeDefaultExpandedKeys, onTreeExpand = _React$useContext2.onTreeExpand, treeIcon = _React$useContext2.treeIcon, showTreeIcon = _React$useContext2.showTreeIcon, switcherIcon = _React$useContext2.switcherIcon, treeLine = _React$useContext2.treeLine, treeNodeFilterProp = _React$useContext2.treeNodeFilterProp, loadData = _React$useContext2.loadData, treeLoadedKeys = _React$useContext2.treeLoadedKeys, treeMotion = _React$useContext2.treeMotion, onTreeLoad = _React$useContext2.onTreeLoad, keyEntities = _React$useContext2.keyEntities, treeRef = React.useRef(), memoTreeData = useMemo$1(
    function() {
      return treeData;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [open2, treeData],
    function(prev, next) {
      return next[0] && prev[1] !== next[1];
    }
  ), mergedCheckedKeys = React.useMemo(function() {
    return checkable ? {
      checked: checkedKeys,
      halfChecked: halfCheckedKeys
    } : null;
  }, [checkable, checkedKeys, halfCheckedKeys]);
  React.useEffect(function() {
    if (open2 && !multiple && checkedKeys.length) {
      var _treeRef$current;
      (_treeRef$current = treeRef.current) === null || _treeRef$current === void 0 || _treeRef$current.scrollTo({
        key: checkedKeys[0]
      });
    }
  }, [open2]);
  var onListMouseDown = /* @__PURE__ */ __name(function(event) {
    event.preventDefault();
  }, "onListMouseDown"), onInternalSelect = /* @__PURE__ */ __name(function(__, info) {
    var node = info.node;
    checkable && isCheckDisabled(node) || (onSelect(node.key, {
      selected: !checkedKeys.includes(node.key)
    }), multiple || toggleOpen(!1));
  }, "onInternalSelect"), _React$useState = React.useState(treeDefaultExpandedKeys), _React$useState2 = _slicedToArray(_React$useState, 2), expandedKeys = _React$useState2[0], setExpandedKeys = _React$useState2[1], _React$useState3 = React.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), searchExpandedKeys = _React$useState4[0], setSearchExpandedKeys = _React$useState4[1], mergedExpandedKeys = React.useMemo(function() {
    return treeExpandedKeys ? _toConsumableArray(treeExpandedKeys) : searchValue ? searchExpandedKeys : expandedKeys;
  }, [expandedKeys, searchExpandedKeys, treeExpandedKeys, searchValue]), onInternalExpand = /* @__PURE__ */ __name(function(keys2) {
    setExpandedKeys(keys2), setSearchExpandedKeys(keys2), onTreeExpand && onTreeExpand(keys2);
  }, "onInternalExpand"), lowerSearchValue = String(searchValue).toLowerCase(), filterTreeNode = /* @__PURE__ */ __name(function(treeNode) {
    return lowerSearchValue ? String(treeNode[treeNodeFilterProp]).toLowerCase().includes(lowerSearchValue) : !1;
  }, "filterTreeNode");
  React.useEffect(function() {
    searchValue && setSearchExpandedKeys(getAllKeys(treeData, fieldNames));
  }, [searchValue]);
  var getFirstMatchingNode = /* @__PURE__ */ __name(function getFirstMatchingNode2(nodes) {
    var _iterator = _createForOfIteratorHelper(nodes), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var node = _step.value;
        if (!(node.disabled || node.selectable === !1)) {
          if (searchValue) {
            if (filterTreeNode(node))
              return node;
          } else
            return node;
          if (node[fieldNames.children]) {
            var matchInChildren = getFirstMatchingNode2(node[fieldNames.children]);
            if (matchInChildren)
              return matchInChildren;
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return null;
  }, "getFirstMatchingNode"), _React$useState5 = React.useState(null), _React$useState6 = _slicedToArray(_React$useState5, 2), activeKey = _React$useState6[0], setActiveKey = _React$useState6[1], activeEntity = keyEntities[activeKey];
  React.useEffect(function() {
    if (open2) {
      var nextActiveKey = null, getFirstNode = /* @__PURE__ */ __name(function() {
        var firstNode = getFirstMatchingNode(memoTreeData);
        return firstNode ? firstNode[fieldNames.value] : null;
      }, "getFirstNode");
      !multiple && checkedKeys.length && !searchValue ? nextActiveKey = checkedKeys[0] : nextActiveKey = getFirstNode(), setActiveKey(nextActiveKey);
    }
  }, [open2, searchValue]), React.useImperativeHandle(ref, function() {
    var _treeRef$current2;
    return {
      scrollTo: (_treeRef$current2 = treeRef.current) === null || _treeRef$current2 === void 0 ? void 0 : _treeRef$current2.scrollTo,
      onKeyDown: /* @__PURE__ */ __name(function(event) {
        var _treeRef$current3, which = event.which;
        switch (which) {
          case KeyCode.UP:
          case KeyCode.DOWN:
          case KeyCode.LEFT:
          case KeyCode.RIGHT:
            (_treeRef$current3 = treeRef.current) === null || _treeRef$current3 === void 0 || _treeRef$current3.onKeyDown(event);
            break;
          case KeyCode.ENTER: {
            if (activeEntity) {
              var _ref = (activeEntity == null ? void 0 : activeEntity.node) || {}, selectable = _ref.selectable, value = _ref.value, disabled = _ref.disabled;
              selectable !== !1 && !disabled && onInternalSelect(null, {
                node: {
                  key: activeKey
                },
                selected: !checkedKeys.includes(value)
              });
            }
            break;
          }
          case KeyCode.ESC:
            toggleOpen(!1);
        }
      }, "onKeyDown"),
      onKeyUp: /* @__PURE__ */ __name(function() {
      }, "onKeyUp")
    };
  });
  var hasLoadDataFn = useMemo$1(function() {
    return !searchValue;
  }, [searchValue, treeExpandedKeys || expandedKeys], function(_ref2, _ref3) {
    var _ref4 = _slicedToArray(_ref2, 1), preSearchValue = _ref4[0], _ref5 = _slicedToArray(_ref3, 2), nextSearchValue = _ref5[0], nextExcludeSearchExpandedKeys = _ref5[1];
    return preSearchValue !== nextSearchValue && !!(nextSearchValue || nextExcludeSearchExpandedKeys);
  }), syncLoadData = hasLoadDataFn ? loadData : null;
  if (memoTreeData.length === 0)
    return /* @__PURE__ */ React.createElement("div", {
      role: "listbox",
      className: "".concat(prefixCls, "-empty"),
      onMouseDown: onListMouseDown
    }, notFoundContent);
  var treeProps = {
    fieldNames
  };
  return treeLoadedKeys && (treeProps.loadedKeys = treeLoadedKeys), mergedExpandedKeys && (treeProps.expandedKeys = mergedExpandedKeys), /* @__PURE__ */ React.createElement("div", {
    onMouseDown: onListMouseDown
  }, activeEntity && open2 && /* @__PURE__ */ React.createElement("span", {
    style: HIDDEN_STYLE,
    "aria-live": "assertive"
  }, activeEntity.node.value), /* @__PURE__ */ React.createElement(Tree$1, _extends({
    ref: treeRef,
    focusable: !1,
    prefixCls: "".concat(prefixCls, "-tree"),
    treeData: memoTreeData,
    height: listHeight,
    itemHeight: listItemHeight,
    itemScrollOffset: listItemScrollOffset,
    virtual: virtual !== !1 && dropdownMatchSelectWidth !== !1,
    multiple,
    icon: treeIcon,
    showIcon: showTreeIcon,
    switcherIcon,
    showLine: treeLine,
    loadData: syncLoadData,
    motion: treeMotion,
    activeKey,
    checkable,
    checkStrictly: !0,
    checkedKeys: mergedCheckedKeys,
    selectedKeys: checkable ? [] : checkedKeys,
    defaultExpandAll: treeDefaultExpandAll,
    titleRender: treeTitleRender
  }, treeProps, {
    // Proxy event out
    onActiveChange: setActiveKey,
    onSelect: onInternalSelect,
    onCheck: onInternalSelect,
    onExpand: onInternalExpand,
    onLoad: onTreeLoad,
    filterTreeNode,
    expandAction: treeExpandAction,
    onScroll: onPopupScroll
  })));
}, "OptionList"), RefOptionList = /* @__PURE__ */ React.forwardRef(OptionList);
process.env.NODE_ENV !== "production" && (RefOptionList.displayName = "OptionList");
var SHOW_ALL = "SHOW_ALL", SHOW_PARENT = "SHOW_PARENT", SHOW_CHILD = "SHOW_CHILD";
function formatStrategyValues(values, strategy, keyEntities, fieldNames) {
  var valueSet = new Set(values);
  return strategy === SHOW_CHILD ? values.filter(function(key) {
    var entity = keyEntities[key];
    return !entity || !entity.children || !entity.children.some(function(_ref) {
      var node = _ref.node;
      return valueSet.has(node[fieldNames.value]);
    }) || !entity.children.every(function(_ref2) {
      var node = _ref2.node;
      return isCheckDisabled(node) || valueSet.has(node[fieldNames.value]);
    });
  }) : strategy === SHOW_PARENT ? values.filter(function(key) {
    var entity = keyEntities[key], parent2 = entity ? entity.parent : null;
    return !parent2 || isCheckDisabled(parent2.node) || !valueSet.has(parent2.key);
  }) : values;
}
__name(formatStrategyValues, "formatStrategyValues");
function warningProps(props) {
  var searchPlaceholder = props.searchPlaceholder, treeCheckStrictly = props.treeCheckStrictly, treeCheckable = props.treeCheckable, labelInValue = props.labelInValue, value = props.value, multiple = props.multiple;
  warningOnce(!searchPlaceholder, "`searchPlaceholder` has been removed."), treeCheckStrictly && labelInValue === !1 && warningOnce(!1, "`treeCheckStrictly` will force set `labelInValue` to `true`."), (labelInValue || treeCheckStrictly) && warningOnce(toArray(value).every(function(val) {
    return val && _typeof(val) === "object" && "value" in val;
  }), "Invalid prop `value` supplied to `TreeSelect`. You should use { label: string, value: string | number } or [{ label: string, value: string | number }] instead."), treeCheckStrictly || multiple || treeCheckable ? warningOnce(!value || Array.isArray(value), "`value` should be an array when `TreeSelect` is checkable or multiple.") : warningOnce(!Array.isArray(value), "`value` should not be array when `TreeSelect` is single mode.");
}
__name(warningProps, "warningProps");
var _excluded = ["id", "prefixCls", "value", "defaultValue", "onChange", "onSelect", "onDeselect", "searchValue", "inputValue", "onSearch", "autoClearSearchValue", "filterTreeNode", "treeNodeFilterProp", "showCheckedStrategy", "treeNodeLabelProp", "multiple", "treeCheckable", "treeCheckStrictly", "labelInValue", "fieldNames", "treeDataSimpleMode", "treeData", "children", "loadData", "treeLoadedKeys", "onTreeLoad", "treeDefaultExpandAll", "treeExpandedKeys", "treeDefaultExpandedKeys", "onTreeExpand", "treeExpandAction", "virtual", "listHeight", "listItemHeight", "listItemScrollOffset", "onDropdownVisibleChange", "dropdownMatchSelectWidth", "treeLine", "treeIcon", "showTreeIcon", "switcherIcon", "treeMotion", "treeTitleRender", "onPopupScroll"];
function isRawValue(value) {
  return !value || _typeof(value) !== "object";
}
__name(isRawValue, "isRawValue");
var TreeSelect$2 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var id = props.id, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-tree-select" : _props$prefixCls, value = props.value, defaultValue = props.defaultValue, onChange = props.onChange, onSelect = props.onSelect, onDeselect = props.onDeselect, searchValue = props.searchValue, inputValue = props.inputValue, onSearch = props.onSearch, _props$autoClearSearc = props.autoClearSearchValue, autoClearSearchValue = _props$autoClearSearc === void 0 ? !0 : _props$autoClearSearc, filterTreeNode = props.filterTreeNode, _props$treeNodeFilter = props.treeNodeFilterProp, treeNodeFilterProp = _props$treeNodeFilter === void 0 ? "value" : _props$treeNodeFilter, showCheckedStrategy = props.showCheckedStrategy, treeNodeLabelProp = props.treeNodeLabelProp, multiple = props.multiple, treeCheckable = props.treeCheckable, treeCheckStrictly = props.treeCheckStrictly, labelInValue = props.labelInValue, fieldNames = props.fieldNames, treeDataSimpleMode = props.treeDataSimpleMode, treeData = props.treeData, children = props.children, loadData = props.loadData, treeLoadedKeys = props.treeLoadedKeys, onTreeLoad = props.onTreeLoad, treeDefaultExpandAll = props.treeDefaultExpandAll, treeExpandedKeys = props.treeExpandedKeys, treeDefaultExpandedKeys = props.treeDefaultExpandedKeys, onTreeExpand = props.onTreeExpand, treeExpandAction = props.treeExpandAction, virtual = props.virtual, _props$listHeight = props.listHeight, listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight, _props$listItemHeight = props.listItemHeight, listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight, _props$listItemScroll = props.listItemScrollOffset, listItemScrollOffset = _props$listItemScroll === void 0 ? 0 : _props$listItemScroll, onDropdownVisibleChange = props.onDropdownVisibleChange, _props$dropdownMatchS = props.dropdownMatchSelectWidth, dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? !0 : _props$dropdownMatchS, treeLine = props.treeLine, treeIcon = props.treeIcon, showTreeIcon = props.showTreeIcon, switcherIcon = props.switcherIcon, treeMotion = props.treeMotion, treeTitleRender = props.treeTitleRender, onPopupScroll = props.onPopupScroll, restProps = _objectWithoutProperties(props, _excluded), mergedId = useId$1(id), treeConduction = treeCheckable && !treeCheckStrictly, mergedCheckable = treeCheckable || treeCheckStrictly, mergedLabelInValue = treeCheckStrictly || labelInValue, mergedMultiple = mergedCheckable || multiple, _useMergedState = useMergedState(defaultValue, {
    value
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), internalValue = _useMergedState2[0], setInternalValue = _useMergedState2[1], mergedShowCheckedStrategy = React.useMemo(function() {
    return treeCheckable ? showCheckedStrategy || SHOW_CHILD : SHOW_ALL;
  }, [showCheckedStrategy, treeCheckable]);
  process.env.NODE_ENV !== "production" && warningProps(props);
  var mergedFieldNames = React.useMemo(
    function() {
      return fillFieldNames(fieldNames);
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [JSON.stringify(fieldNames)]
    /* eslint-enable react-hooks/exhaustive-deps */
  ), _useMergedState3 = useMergedState("", {
    value: searchValue !== void 0 ? searchValue : inputValue,
    postState: /* @__PURE__ */ __name(function(search) {
      return search || "";
    }, "postState")
  }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), mergedSearchValue = _useMergedState4[0], setSearchValue = _useMergedState4[1], onInternalSearch = /* @__PURE__ */ __name(function(searchText) {
    setSearchValue(searchText), onSearch == null || onSearch(searchText);
  }, "onInternalSearch"), mergedTreeData = useTreeData(treeData, children, treeDataSimpleMode), _useDataEntities = useDataEntities(mergedTreeData, mergedFieldNames), keyEntities = _useDataEntities.keyEntities, valueEntities = _useDataEntities.valueEntities, splitRawValues = React.useCallback(function(newRawValues) {
    var missingRawValues = [], existRawValues = [];
    return newRawValues.forEach(function(val) {
      valueEntities.has(val) ? existRawValues.push(val) : missingRawValues.push(val);
    }), {
      missingRawValues,
      existRawValues
    };
  }, [valueEntities]), filteredTreeData = useFilterTreeData(mergedTreeData, mergedSearchValue, {
    fieldNames: mergedFieldNames,
    treeNodeFilterProp,
    filterTreeNode
  }), getLabel = React.useCallback(function(item) {
    if (item) {
      if (treeNodeLabelProp)
        return item[treeNodeLabelProp];
      for (var titleList = mergedFieldNames._title, i2 = 0; i2 < titleList.length; i2 += 1) {
        var title = item[titleList[i2]];
        if (title !== void 0)
          return title;
      }
    }
  }, [mergedFieldNames, treeNodeLabelProp]), toLabeledValues = React.useCallback(function(draftValues) {
    var values = toArray(draftValues);
    return values.map(function(val) {
      return isRawValue(val) ? {
        value: val
      } : val;
    });
  }, []), convert2LabelValues = React.useCallback(function(draftValues) {
    var values = toLabeledValues(draftValues);
    return values.map(function(item) {
      var rawLabel = item.label, rawValue = item.value, rawHalfChecked = item.halfChecked, rawDisabled, entity = valueEntities.get(rawValue);
      if (entity) {
        var _rawLabel;
        rawLabel = treeTitleRender ? treeTitleRender(entity.node) : (_rawLabel = rawLabel) !== null && _rawLabel !== void 0 ? _rawLabel : getLabel(entity.node), rawDisabled = entity.node.disabled;
      } else if (rawLabel === void 0) {
        var labelInValueItem = toLabeledValues(internalValue).find(function(labeledItem) {
          return labeledItem.value === rawValue;
        });
        rawLabel = labelInValueItem.label;
      }
      return {
        label: rawLabel,
        value: rawValue,
        halfChecked: rawHalfChecked,
        disabled: rawDisabled
      };
    });
  }, [valueEntities, getLabel, toLabeledValues, internalValue]), rawMixedLabeledValues = React.useMemo(function() {
    return toLabeledValues(internalValue === null ? [] : internalValue);
  }, [toLabeledValues, internalValue]), _React$useMemo = React.useMemo(function() {
    var fullCheckValues = [], halfCheckValues = [];
    return rawMixedLabeledValues.forEach(function(item) {
      item.halfChecked ? halfCheckValues.push(item) : fullCheckValues.push(item);
    }), [fullCheckValues, halfCheckValues];
  }, [rawMixedLabeledValues]), _React$useMemo2 = _slicedToArray(_React$useMemo, 2), rawLabeledValues = _React$useMemo2[0], rawHalfLabeledValues = _React$useMemo2[1], rawValues = React.useMemo(function() {
    return rawLabeledValues.map(function(item) {
      return item.value;
    });
  }, [rawLabeledValues]), _useCheckedKeys = useCheckedKeys(rawLabeledValues, rawHalfLabeledValues, treeConduction, keyEntities), _useCheckedKeys2 = _slicedToArray(_useCheckedKeys, 2), rawCheckedValues = _useCheckedKeys2[0], rawHalfCheckedValues = _useCheckedKeys2[1], displayValues = React.useMemo(function() {
    var displayKeys = formatStrategyValues(rawCheckedValues, mergedShowCheckedStrategy, keyEntities, mergedFieldNames), values = displayKeys.map(function(key) {
      var _keyEntities$key$node, _keyEntities$key;
      return (_keyEntities$key$node = (_keyEntities$key = keyEntities[key]) === null || _keyEntities$key === void 0 || (_keyEntities$key = _keyEntities$key.node) === null || _keyEntities$key === void 0 ? void 0 : _keyEntities$key[mergedFieldNames.value]) !== null && _keyEntities$key$node !== void 0 ? _keyEntities$key$node : key;
    }), labeledValues = values.map(function(val) {
      var targetItem = rawLabeledValues.find(function(item) {
        return item.value === val;
      }), label2 = labelInValue ? targetItem == null ? void 0 : targetItem.label : treeTitleRender == null ? void 0 : treeTitleRender(targetItem);
      return {
        value: val,
        label: label2
      };
    }), rawDisplayValues = convert2LabelValues(labeledValues), firstVal = rawDisplayValues[0];
    return !mergedMultiple && firstVal && isNil(firstVal.value) && isNil(firstVal.label) ? [] : rawDisplayValues.map(function(item) {
      var _item$label;
      return _objectSpread2(_objectSpread2({}, item), {}, {
        label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value
      });
    });
  }, [mergedFieldNames, mergedMultiple, rawCheckedValues, rawLabeledValues, convert2LabelValues, mergedShowCheckedStrategy, keyEntities]), _useCache = useCache(displayValues), _useCache2 = _slicedToArray(_useCache, 1), cachedDisplayValues = _useCache2[0], triggerChange = useRefFunc(function(newRawValues, extra, source) {
    var labeledValues = convert2LabelValues(newRawValues);
    if (setInternalValue(labeledValues), autoClearSearchValue && setSearchValue(""), onChange) {
      var eventValues = newRawValues;
      if (treeConduction) {
        var formattedKeyList = formatStrategyValues(newRawValues, mergedShowCheckedStrategy, keyEntities, mergedFieldNames);
        eventValues = formattedKeyList.map(function(key) {
          var entity = valueEntities.get(key);
          return entity ? entity.node[mergedFieldNames.value] : key;
        });
      }
      var _ref = extra || {
        triggerValue: void 0,
        selected: void 0
      }, triggerValue = _ref.triggerValue, selected = _ref.selected, returnRawValues = eventValues;
      if (treeCheckStrictly) {
        var halfValues = rawHalfLabeledValues.filter(function(item) {
          return !eventValues.includes(item.value);
        });
        returnRawValues = [].concat(_toConsumableArray(returnRawValues), _toConsumableArray(halfValues));
      }
      var returnLabeledValues = convert2LabelValues(returnRawValues), additionalInfo = {
        // [Legacy] Always return as array contains label & value
        preValue: rawLabeledValues,
        triggerValue
      }, showPosition = !0;
      (treeCheckStrictly || source === "selection" && !selected) && (showPosition = !1), fillAdditionalInfo(additionalInfo, triggerValue, newRawValues, mergedTreeData, showPosition, mergedFieldNames), mergedCheckable ? additionalInfo.checked = selected : additionalInfo.selected = selected;
      var returnValues = mergedLabelInValue ? returnLabeledValues : returnLabeledValues.map(function(item) {
        return item.value;
      });
      onChange(mergedMultiple ? returnValues : returnValues[0], mergedLabelInValue ? null : returnLabeledValues.map(function(item) {
        return item.label;
      }), additionalInfo);
    }
  }), onOptionSelect = React.useCallback(function(selectedKey, _ref2) {
    var _node$mergedFieldName, selected = _ref2.selected, source = _ref2.source, entity = keyEntities[selectedKey], node = entity == null ? void 0 : entity.node, selectedValue = (_node$mergedFieldName = node == null ? void 0 : node[mergedFieldNames.value]) !== null && _node$mergedFieldName !== void 0 ? _node$mergedFieldName : selectedKey;
    if (!mergedMultiple)
      triggerChange([selectedValue], {
        selected: !0,
        triggerValue: selectedValue
      }, "option");
    else {
      var newRawValues = selected ? [].concat(_toConsumableArray(rawValues), [selectedValue]) : rawCheckedValues.filter(function(v2) {
        return v2 !== selectedValue;
      });
      if (treeConduction) {
        var _splitRawValues = splitRawValues(newRawValues), missingRawValues = _splitRawValues.missingRawValues, existRawValues = _splitRawValues.existRawValues, keyList = existRawValues.map(function(val) {
          return valueEntities.get(val).key;
        }), checkedKeys;
        if (selected) {
          var _conductCheck = conductCheck(keyList, !0, keyEntities);
          checkedKeys = _conductCheck.checkedKeys;
        } else {
          var _conductCheck2 = conductCheck(keyList, {
            halfCheckedKeys: rawHalfCheckedValues
          }, keyEntities);
          checkedKeys = _conductCheck2.checkedKeys;
        }
        newRawValues = [].concat(_toConsumableArray(missingRawValues), _toConsumableArray(checkedKeys.map(function(key) {
          return keyEntities[key].node[mergedFieldNames.value];
        })));
      }
      triggerChange(newRawValues, {
        selected,
        triggerValue: selectedValue
      }, source || "option");
    }
    selected || !mergedMultiple ? onSelect == null || onSelect(selectedValue, fillLegacyProps(node)) : onDeselect == null || onDeselect(selectedValue, fillLegacyProps(node));
  }, [splitRawValues, valueEntities, keyEntities, mergedFieldNames, mergedMultiple, rawValues, triggerChange, treeConduction, onSelect, onDeselect, rawCheckedValues, rawHalfCheckedValues]), onInternalDropdownVisibleChange = React.useCallback(function(open2) {
    if (onDropdownVisibleChange) {
      var legacyParam = {};
      Object.defineProperty(legacyParam, "documentClickClose", {
        get: /* @__PURE__ */ __name(function() {
          return warningOnce(!1, "Second param of `onDropdownVisibleChange` has been removed."), !1;
        }, "get")
      }), onDropdownVisibleChange(open2, legacyParam);
    }
  }, [onDropdownVisibleChange]), onDisplayValuesChange = useRefFunc(function(newValues, info) {
    var newRawValues = newValues.map(function(item) {
      return item.value;
    });
    if (info.type === "clear") {
      triggerChange(newRawValues, {}, "selection");
      return;
    }
    info.values.length && onOptionSelect(info.values[0].value, {
      selected: !1,
      source: "selection"
    });
  }), treeSelectContext = React.useMemo(function() {
    return {
      virtual,
      dropdownMatchSelectWidth,
      listHeight,
      listItemHeight,
      listItemScrollOffset,
      treeData: filteredTreeData,
      fieldNames: mergedFieldNames,
      onSelect: onOptionSelect,
      treeExpandAction,
      treeTitleRender,
      onPopupScroll
    };
  }, [virtual, dropdownMatchSelectWidth, listHeight, listItemHeight, listItemScrollOffset, filteredTreeData, mergedFieldNames, onOptionSelect, treeExpandAction, treeTitleRender, onPopupScroll]), legacyContext = React.useMemo(function() {
    return {
      checkable: mergedCheckable,
      loadData,
      treeLoadedKeys,
      onTreeLoad,
      checkedKeys: rawCheckedValues,
      halfCheckedKeys: rawHalfCheckedValues,
      treeDefaultExpandAll,
      treeExpandedKeys,
      treeDefaultExpandedKeys,
      onTreeExpand,
      treeIcon,
      treeMotion,
      showTreeIcon,
      switcherIcon,
      treeLine,
      treeNodeFilterProp,
      keyEntities
    };
  }, [mergedCheckable, loadData, treeLoadedKeys, onTreeLoad, rawCheckedValues, rawHalfCheckedValues, treeDefaultExpandAll, treeExpandedKeys, treeDefaultExpandedKeys, onTreeExpand, treeIcon, treeMotion, showTreeIcon, switcherIcon, treeLine, treeNodeFilterProp, keyEntities]);
  return /* @__PURE__ */ React.createElement(TreeSelectContext.Provider, {
    value: treeSelectContext
  }, /* @__PURE__ */ React.createElement(LegacySelectContext.Provider, {
    value: legacyContext
  }, /* @__PURE__ */ React.createElement(BaseSelect, _extends({
    ref
  }, restProps, {
    // >>> MISC
    id: mergedId,
    prefixCls,
    mode: mergedMultiple ? "multiple" : void 0,
    displayValues: cachedDisplayValues,
    onDisplayValuesChange,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    OptionList: RefOptionList,
    emptyOptions: !mergedTreeData.length,
    onDropdownVisibleChange: onInternalDropdownVisibleChange,
    dropdownMatchSelectWidth
  }))));
});
process.env.NODE_ENV !== "production" && (TreeSelect$2.displayName = "TreeSelect");
var GenericTreeSelect = TreeSelect$2;
GenericTreeSelect.TreeNode = TreeNode;
GenericTreeSelect.SHOW_ALL = SHOW_ALL;
GenericTreeSelect.SHOW_PARENT = SHOW_PARENT;
GenericTreeSelect.SHOW_CHILD = SHOW_CHILD;
const genBaseStyle = /* @__PURE__ */ __name((token) => {
  const {
    componentCls,
    treePrefixCls,
    colorBgElevated
  } = token, treeCls = `.${treePrefixCls}`;
  return [
    // ======================================================
    // ==                     Dropdown                     ==
    // ======================================================
    {
      [`${componentCls}-dropdown`]: [
        {
          padding: `${unit(token.paddingXS)} ${unit(token.calc(token.paddingXS).div(2).equal())}`
        },
        // ====================== Tree ======================
        genTreeStyle(treePrefixCls, merge(token, {
          colorBgContainer: colorBgElevated
        })),
        {
          [treeCls]: {
            borderRadius: 0,
            [`${treeCls}-list-holder-inner`]: {
              alignItems: "stretch",
              [`${treeCls}-treenode`]: {
                [`${treeCls}-node-content-wrapper`]: {
                  flex: "auto"
                }
              }
            }
          }
        },
        // ==================== Checkbox ====================
        getStyle(`${treePrefixCls}-checkbox`, token),
        // ====================== RTL =======================
        {
          "&-rtl": {
            direction: "rtl",
            [`${treeCls}-switcher${treeCls}-switcher_close`]: {
              [`${treeCls}-switcher-icon svg`]: {
                transform: "rotate(90deg)"
              }
            }
          }
        }
      ]
    }
  ];
}, "genBaseStyle");
function useTreeSelectStyle(prefixCls, treePrefixCls, rootCls) {
  return genStyleHooks("TreeSelect", (token) => {
    const treeSelectToken = merge(token, {
      treePrefixCls
    });
    return [genBaseStyle(treeSelectToken)];
  }, initComponentToken)(prefixCls, rootCls);
}
__name(useTreeSelectStyle, "useTreeSelectStyle");
var __rest = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0 && (t2[p2] = s2[p2]);
  if (s2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++)
    e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]) && (t2[p2[i2]] = s2[p2[i2]]);
  return t2;
};
const InternalTreeSelect = /* @__PURE__ */ __name((props, ref) => {
  var _a;
  const {
    prefixCls: customizePrefixCls,
    size: customizeSize,
    disabled: customDisabled,
    bordered = !0,
    className,
    rootClassName,
    treeCheckable,
    multiple,
    listHeight = 256,
    listItemHeight: customListItemHeight,
    placement,
    notFoundContent,
    switcherIcon,
    treeLine,
    getPopupContainer,
    popupClassName,
    dropdownClassName,
    treeIcon = !1,
    transitionName,
    choiceTransitionName = "",
    status: customStatus,
    treeExpandAction,
    builtinPlacements,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    allowClear,
    variant: customVariant,
    dropdownStyle,
    tagRender
  } = props, restProps = __rest(props, ["prefixCls", "size", "disabled", "bordered", "className", "rootClassName", "treeCheckable", "multiple", "listHeight", "listItemHeight", "placement", "notFoundContent", "switcherIcon", "treeLine", "getPopupContainer", "popupClassName", "dropdownClassName", "treeIcon", "transitionName", "choiceTransitionName", "status", "treeExpandAction", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "allowClear", "variant", "dropdownStyle", "tagRender"]), {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    renderEmpty,
    direction,
    virtual,
    popupMatchSelectWidth: contextPopupMatchSelectWidth,
    popupOverflow
  } = React.useContext(ConfigContext), [, token] = useToken(), listItemHeight = customListItemHeight ?? (token == null ? void 0 : token.controlHeightSM) + (token == null ? void 0 : token.paddingXXS);
  if (process.env.NODE_ENV !== "production") {
    const warning2 = devUseWarning("TreeSelect");
    process.env.NODE_ENV !== "production" && warning2(multiple !== !1 || !treeCheckable, "usage", "`multiple` will always be `true` when `treeCheckable` is true"), warning2.deprecated(!dropdownClassName, "dropdownClassName", "popupClassName"), warning2.deprecated(dropdownMatchSelectWidth === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), process.env.NODE_ENV !== "production" && warning2(!("showArrow" in props), "deprecated", "`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null."), warning2.deprecated(!("bordered" in props), "bordered", "variant");
  }
  const rootPrefixCls = getPrefixCls(), prefixCls = getPrefixCls("select", customizePrefixCls), treePrefixCls = getPrefixCls("select-tree", customizePrefixCls), treeSelectPrefixCls = getPrefixCls("tree-select", customizePrefixCls), {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction), rootCls = useCSSVarCls(prefixCls), treeSelectRootCls = useCSSVarCls(treeSelectPrefixCls), [wrapCSSVar, hashId, cssVarCls] = useSelectStyle(prefixCls, rootCls), [treeSelectWrapCSSVar] = useTreeSelectStyle(treeSelectPrefixCls, treePrefixCls, treeSelectRootCls), [variant, enableVariantCls] = useVariant("treeSelect", customVariant, bordered), mergedDropdownClassName = cn(popupClassName || dropdownClassName, `${treeSelectPrefixCls}-dropdown`, {
    [`${treeSelectPrefixCls}-dropdown-rtl`]: direction === "rtl"
  }, rootClassName, cssVarCls, rootCls, treeSelectRootCls, hashId), isMultiple = !!(treeCheckable || multiple), showSuffixIcon = useShowArrow(props.suffixIcon, props.showArrow), mergedPopupMatchSelectWidth = (_a = popupMatchSelectWidth ?? dropdownMatchSelectWidth) !== null && _a !== void 0 ? _a : contextPopupMatchSelectWidth, {
    status: contextStatus,
    hasFeedback,
    isFormItemInput,
    feedbackIcon
  } = React.useContext(FormItemInputContext), mergedStatus = getMergedStatus(contextStatus, customStatus), {
    suffixIcon,
    removeIcon,
    clearIcon
  } = useIcons(Object.assign(Object.assign({}, restProps), {
    multiple: isMultiple,
    showSuffixIcon,
    hasFeedback,
    feedbackIcon,
    prefixCls,
    componentName: "TreeSelect"
  })), mergedAllowClear = allowClear === !0 ? {
    clearIcon
  } : allowClear;
  let mergedNotFound;
  notFoundContent !== void 0 ? mergedNotFound = notFoundContent : mergedNotFound = (renderEmpty == null ? void 0 : renderEmpty("Select")) || /* @__PURE__ */ React.createElement(DefaultRenderEmpty, {
    componentName: "Select"
  });
  const selectProps = omit(restProps, ["suffixIcon", "removeIcon", "clearIcon", "itemIcon", "switcherIcon"]), memoizedPlacement = React.useMemo(() => placement !== void 0 ? placement : direction === "rtl" ? "bottomRight" : "bottomLeft", [placement, direction]), mergedSize = useSize((ctx) => {
    var _a2;
    return (_a2 = customizeSize ?? compactSize) !== null && _a2 !== void 0 ? _a2 : ctx;
  }), disabled = React.useContext(DisabledContext), mergedDisabled = customDisabled ?? disabled, mergedClassName = cn(!customizePrefixCls && treeSelectPrefixCls, {
    [`${prefixCls}-lg`]: mergedSize === "large",
    [`${prefixCls}-sm`]: mergedSize === "small",
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-${variant}`]: enableVariantCls,
    [`${prefixCls}-in-form-item`]: isFormItemInput
  }, getStatusClassNames(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, className, rootClassName, cssVarCls, rootCls, treeSelectRootCls, hashId), renderSwitcherIcon = /* @__PURE__ */ __name((nodeProps) => /* @__PURE__ */ React.createElement(SwitcherIconCom, {
    prefixCls: treePrefixCls,
    switcherIcon,
    treeNodeProps: nodeProps,
    showLine: treeLine
  }), "renderSwitcherIcon"), [zIndex] = useZIndex("SelectLike", dropdownStyle == null ? void 0 : dropdownStyle.zIndex), returnNode = /* @__PURE__ */ React.createElement(GenericTreeSelect, Object.assign({
    virtual,
    disabled: mergedDisabled
  }, selectProps, {
    dropdownMatchSelectWidth: mergedPopupMatchSelectWidth,
    builtinPlacements: mergedBuiltinPlacements(builtinPlacements, popupOverflow),
    ref,
    prefixCls,
    className: mergedClassName,
    listHeight,
    listItemHeight,
    treeCheckable: treeCheckable && /* @__PURE__ */ React.createElement("span", {
      className: `${prefixCls}-tree-checkbox-inner`
    }),
    treeLine: !!treeLine,
    suffixIcon,
    multiple: isMultiple,
    placement: memoizedPlacement,
    removeIcon,
    allowClear: mergedAllowClear,
    switcherIcon: renderSwitcherIcon,
    showTreeIcon: treeIcon,
    notFoundContent: mergedNotFound,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    treeMotion: null,
    dropdownClassName: mergedDropdownClassName,
    dropdownStyle: Object.assign(Object.assign({}, dropdownStyle), {
      zIndex
    }),
    choiceTransitionName: getTransitionName(rootPrefixCls, "", choiceTransitionName),
    transitionName: getTransitionName(rootPrefixCls, "slide-up", transitionName),
    treeExpandAction,
    tagRender: isMultiple ? tagRender : void 0
  }));
  return wrapCSSVar(treeSelectWrapCSSVar(returnNode));
}, "InternalTreeSelect"), TreeSelectRef = /* @__PURE__ */ React.forwardRef(InternalTreeSelect), TreeSelect$1 = TreeSelectRef, PurePanel = genPurePanel(TreeSelect$1, void 0, void 0, (props) => omit(props, ["visible"]));
TreeSelect$1.TreeNode = TreeNode;
TreeSelect$1.SHOW_ALL = SHOW_ALL;
TreeSelect$1.SHOW_PARENT = SHOW_PARENT;
TreeSelect$1.SHOW_CHILD = SHOW_CHILD;
TreeSelect$1._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
process.env.NODE_ENV !== "production" && (TreeSelect$1.displayName = "TreeSelect");
const removeMargin = "_remove-margin_1b3c7_1", styles$i = {
  removeMargin
};
function useNotification(baseConfig = {}) {
  var _a, _b;
  const [api, contextHolder] = staticMethods.useNotification(), { theme } = useTheme(), closeIconSize = (_b = (_a = theme == null ? void 0 : theme.components) == null ? void 0 : _a.Notification) == null ? void 0 : _b.fontSize, baseNotificationConfig = useMemo(() => ({
    ...baseConfig
  }), [baseConfig]), getNotificationArgs = useCallback(
    (args, color) => {
      const { message, btn, showBtnTitleOnTheSameLine, closeIcon, icon: icon2, ...otherProps } = args;
      if (showBtnTitleOnTheSameLine) {
        const messageWithButton = /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center"
            },
            children: [
              message,
              btn ? cloneElement$1(btn, {
                style: {
                  height: 24
                }
              }) : null
            ]
          }
        );
        return {
          color,
          icon: icon2,
          ...baseNotificationConfig,
          ...otherProps,
          description: null,
          className: styles$i.removeMargin,
          message: messageWithButton
        };
      }
      return {
        color,
        icon: icon2,
        closeIcon: closeIcon ?? /* @__PURE__ */ jsxRuntimeExports.jsx(IconX, { width: closeIconSize, height: closeIconSize }),
        ...baseNotificationConfig,
        ...args
      };
    },
    [baseNotificationConfig, closeIconSize]
  );
  return [{
    open: /* @__PURE__ */ __name((args) => api.open(getNotificationArgs(args)), "open"),
    info: /* @__PURE__ */ __name((args) => {
      var _a2, _b2;
      return api.info({
        ...getNotificationArgs(args),
        icon: args.icon ?? /* @__PURE__ */ jsxRuntimeExports.jsx(IconInfoCircleFilled, { color: (_b2 = (_a2 = theme == null ? void 0 : theme.components) == null ? void 0 : _a2.Notification) == null ? void 0 : _b2.colorInfo })
      });
    }, "info"),
    success: /* @__PURE__ */ __name((args) => {
      var _a2, _b2;
      return api.success({
        ...getNotificationArgs(args),
        icon: args.icon ?? /* @__PURE__ */ jsxRuntimeExports.jsx(IconCircleCheckFilled, { color: (_b2 = (_a2 = theme == null ? void 0 : theme.components) == null ? void 0 : _a2.Notification) == null ? void 0 : _b2.colorSuccess })
      });
    }, "success"),
    warning: /* @__PURE__ */ __name((args) => {
      var _a2, _b2;
      return api.warning({
        ...getNotificationArgs(args),
        icon: args.icon ?? /* @__PURE__ */ jsxRuntimeExports.jsx(IconAlertCircleFilled, { color: (_b2 = (_a2 = theme == null ? void 0 : theme.components) == null ? void 0 : _a2.Notification) == null ? void 0 : _b2.colorWarning })
      });
    }, "warning"),
    error: /* @__PURE__ */ __name((args) => {
      var _a2, _b2;
      return api.error({
        ...getNotificationArgs(args),
        icon: args.icon ?? /* @__PURE__ */ jsxRuntimeExports.jsx(IconCircleXFilled, { color: (_b2 = (_a2 = theme == null ? void 0 : theme.components) == null ? void 0 : _a2.Notification) == null ? void 0 : _b2.colorError })
      });
    }, "error"),
    destroy: api.destroy
  }, contextHolder];
}
__name(useNotification, "useNotification");
function GlobalNotificationProvider({ children }) {
  const [notificationApi, notificationContext] = useNotification();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(GlobalNotificationContext.Provider, { value: { notificationApi }, children: [
    notificationContext,
    children
  ] });
}
__name(GlobalNotificationProvider, "GlobalNotificationProvider");
const chevron = "_chevron_jjlsl_1", styles$h = {
  chevron
}, CustomExpandIcon = /* @__PURE__ */ __name(({ isActive }) => {
  var _a, _b;
  const { theme } = useTheme(), iconSize = (_b = (_a = theme == null ? void 0 : theme.components) == null ? void 0 : _a.Collapse) == null ? void 0 : _b.fontSizeIcon;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: styles$h.chevron,
      style: {
        transform: isActive ? "rotate(90deg)" : "rotate(0deg)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { width: iconSize, height: iconSize, stroke: 1.5 })
    }
  );
}, "CustomExpandIcon"), DefaultExpandIcon = /* @__PURE__ */ __name(({ isActive }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CustomExpandIcon, { isActive }), "DefaultExpandIcon"), DefaultTreeExpandIcon = /* @__PURE__ */ __name(({ expanded }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CustomExpandIcon, { isActive: expanded }), "DefaultTreeExpandIcon"), Accordion = /* @__PURE__ */ __name(({
  isBordered,
  isGhost,
  shouldDestroyInactivePanel,
  expandIcon,
  ...rest
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Collapse$2,
  {
    ...rest,
    accordion: !0,
    bordered: isBordered,
    destroyInactivePanel: shouldDestroyInactivePanel,
    ghost: isGhost,
    expandIcon: expandIcon ?? DefaultExpandIcon
  }
), "Accordion"), outlinedCollapse = "_outlined-collapse_ch1o3_1", outlinedCollapsePanel = "_outlined-collapse-panel_ch1o3_11", header = "_header_ch1o3_19", styles$g = {
  outlinedCollapse,
  outlinedCollapsePanel,
  header
}, Collapse = /* @__PURE__ */ __name(({
  isOutline,
  isBordered,
  isGhost,
  shouldDestroyInactivePanel,
  expandIcon,
  items,
  ...props
}) => {
  const customItems = useMemo(
    () => (items == null ? void 0 : items.map(
      (item) => isOutline ? {
        ...item,
        className: cn(styles$g.outlinedCollapsePanel, item.className),
        headerClass: cn(styles$g.header, item.headerClass)
      } : item
    )) ?? [],
    [isOutline, items]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Collapse$2,
    {
      ...props,
      accordion: !1,
      destroyInactivePanel: shouldDestroyInactivePanel,
      bordered: isOutline ? !1 : isBordered,
      ghost: isGhost,
      className: cn(props.className, { [styles$g.outlinedCollapse]: isOutline }),
      items: customItems,
      expandIcon: expandIcon ?? DefaultExpandIcon
    }
  );
}, "Collapse"), Alert = /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(Alert$1, { ...props }), "Alert"), buttonsGroupContainer = "_buttons-group-container_168ai_13", styles$f = {
  buttonsGroupContainer
}, ButtonsGroup = /* @__PURE__ */ __name(({ buttonsConfig, className }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(styles$f.buttonsGroupContainer, className), children: buttonsConfig == null ? void 0 : buttonsConfig.map((button) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button$1, { ...button }, button == null ? void 0 : button.buttonKey)) }), "ButtonsGroup"), CodeBlock = /* @__PURE__ */ __name(({ code, language = "javascript" }) => (useEffect(() => {
  Prism.highlightAll();
}, [code]), /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "codeBlock", children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: `language-${language}`, children: code }) }) })), "CodeBlock"), Divider = /* @__PURE__ */ __name(({ isDashed, isPlain, ...rest }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Divider$1, { ...rest, dashed: isDashed, plain: isPlain }), "Divider"), dragger = "_dragger_1v77q_1", draggerTop = "_dragger-top_1v77q_15", draggerBottom = "_dragger-bottom_1v77q_25", resizer = "_resizer_1v77q_35", drawer = "_drawer_1v77q_53", drawerFooter = "_drawer-footer_1v77q_127", drawerBodyWithoutPadding = "_drawer-body-without-padding_1v77q_147", styles$e = {
  dragger,
  draggerTop,
  draggerBottom,
  resizer,
  drawer,
  drawerFooter,
  drawerBodyWithoutPadding
}, DrawerFooterDefault = /* @__PURE__ */ __name(({
  onClose,
  cancelBtnText = "Отменить",
  onCancel,
  acceptBtnText = "Применить",
  onAccept
}) => {
  const handleBtnCancelClick = /* @__PURE__ */ __name((e2) => {
    onCancel == null || onCancel(), onClose == null || onClose(e2);
  }, "handleBtnCancelClick");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$e.drawerFooter, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button$1, { type: "primary", onClick: onAccept, children: acceptBtnText }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button$1, { onClick: handleBtnCancelClick, children: cancelBtnText })
  ] });
}, "DrawerFooterDefault"), handleMouseDown = /* @__PURE__ */ __name((event, params) => {
  const { setInitialWidth, setInitialX, setInitialHeight, setInitialY, drawerWidth, drawerHeight } = params;
  setInitialWidth(drawerWidth), setInitialX(event.clientX), setInitialHeight(drawerHeight), setInitialY(event.clientY);
}, "handleMouseDown"), handleMouseMove = /* @__PURE__ */ __name((event, params) => {
  const {
    initialWidth,
    initialHeight,
    initialX,
    initialY,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    placement,
    setDrawerWidth,
    setDrawerHeight
  } = params, deltaX = event.clientX - initialX, deltaY = event.clientY - initialY;
  let newWidth = initialWidth, newHeight = initialHeight;
  (placement === "left" || placement === "right") && (newWidth = placement === "left" ? initialWidth + deltaX : initialWidth - deltaX, minWidth !== void 0 && maxWidth !== void 0 && newWidth >= +minWidth && newWidth <= +maxWidth && setDrawerWidth(newWidth)), (placement === "top" || placement === "bottom") && (newHeight = placement === "top" ? initialHeight + deltaY : initialHeight - deltaY, minHeight !== void 0 && maxHeight !== void 0 && newHeight >= +minHeight && newHeight <= +maxHeight && setDrawerHeight(newHeight));
}, "handleMouseMove"), handleSizeChange = /* @__PURE__ */ __name((propSize, handleChangeState, theme) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const defaultWidth = ((_b = (_a = theme == null ? void 0 : theme.components) == null ? void 0 : _a.Drawer) == null ? void 0 : _b.width) || 500, defaultHeight = ((_d = (_c = theme == null ? void 0 : theme.components) == null ? void 0 : _c.Drawer) == null ? void 0 : _d.height) || 300, largeWidth = ((_f = (_e = theme == null ? void 0 : theme.components) == null ? void 0 : _e.Drawer) == null ? void 0 : _f.widthLG) || 800, largeHeight = ((_h = (_g = theme == null ? void 0 : theme.components) == null ? void 0 : _g.Drawer) == null ? void 0 : _h.heightLG) || 600;
  propSize === "default" ? (handleChangeState({ drawerWidth: defaultWidth }), handleChangeState({ drawerHeight: defaultHeight })) : propSize === "large" && (handleChangeState({ drawerWidth: largeWidth }), handleChangeState({ drawerHeight: largeHeight }));
}, "handleSizeChange"), ResizableDragger = /* @__PURE__ */ __name(({
  onMouseDown,
  placement,
  theme,
  state,
  isOpen
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const computeResizer = {
    left: { left: state.drawerWidth },
    right: { right: state.drawerWidth },
    top: { top: state.drawerHeight },
    bottom: { bottom: state.drawerHeight }
  };
  return isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      role: "presentation",
      onMouseDown,
      className: `${styles$e.dragger} ${placement === "top" || placement === "bottom" ? styles$e.draggerTop : styles$e.draggerBottom}`,
      style: {
        ...computeResizer[placement],
        [placement === "left" || placement === "right" ? "height" : "width"]: "100%",
        [placement === "left" || placement === "right" ? "width" : "height"]: (_b = (_a = theme == null ? void 0 : theme.components) == null ? void 0 : _a.Drawer) == null ? void 0 : _b.resizerWidth,
        cursor: placement === "left" || placement === "right" ? "col-resize" : "ns-resize",
        backgroundColor: (_d = (_c = theme == null ? void 0 : theme.components) == null ? void 0 : _c.Drawer) == null ? void 0 : _d.resizerBg
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: styles$e.resizer,
          style: {
            width: placement === "top" || placement === "bottom" ? "28px" : (_f = (_e = theme == null ? void 0 : theme.components) == null ? void 0 : _e.Drawer) == null ? void 0 : _f.resizerGutterWidth,
            height: placement === "top" || placement === "bottom" ? "2px" : (_h = (_g = theme == null ? void 0 : theme.components) == null ? void 0 : _g.Drawer) == null ? void 0 : _h.resizerGutterHeight,
            backgroundColor: (_j = (_i = theme == null ? void 0 : theme.components) == null ? void 0 : _i.Drawer) == null ? void 0 : _j.resizerGutterBg,
            borderRadius: (_l = (_k = theme == null ? void 0 : theme.components) == null ? void 0 : _k.Drawer) == null ? void 0 : _l.resizerGutterBorderRadius
          }
        }
      )
    }
  ) : null;
}, "ResizableDragger");
function Drawer2({ withDefaultFooter, defaultFooterProps, customFooter, ...props }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  const { theme } = useTheme(), iconSize = (_b = (_a = theme == null ? void 0 : theme.components) == null ? void 0 : _a.Drawer) == null ? void 0 : _b.iconSize, [state, setState] = useState({
    drawerWidth: 500,
    initialWidth: 0,
    drawerHeight: 0,
    initialHeight: 0,
    initialX: 0,
    initialY: 0,
    isResizing: !1
  }), {
    minWidth = (_d = (_c = theme == null ? void 0 : theme.components) == null ? void 0 : _c.Drawer) == null ? void 0 : _d.minWidth,
    maxWidth = (_f = (_e = theme == null ? void 0 : theme.components) == null ? void 0 : _e.Drawer) == null ? void 0 : _f.maxWidth,
    minHeight = (_h = (_g = theme == null ? void 0 : theme.components) == null ? void 0 : _g.Drawer) == null ? void 0 : _h.minHeight,
    maxHeight = (_j = (_i = theme == null ? void 0 : theme.components) == null ? void 0 : _i.Drawer) == null ? void 0 : _j.maxHeight,
    isResizable = !1,
    placement,
    isOpen = !1,
    width = (_l = (_k = theme == null ? void 0 : theme.components) == null ? void 0 : _k.Drawer) == null ? void 0 : _l.width,
    height = (_n = (_m = theme == null ? void 0 : theme.components) == null ? void 0 : _m.Drawer) == null ? void 0 : _n.height,
    size: propSize = "default"
  } = props, handleChangeState = useCallback((object) => {
    setState((prevState) => ({
      ...prevState,
      ...object
    }));
  }, []);
  useEffect(() => {
    isOpen || (handleChangeState({ drawerWidth: Number(width) }), handleChangeState({ drawerHeight: Number(height) }));
  }, [isOpen, width, height, handleChangeState]);
  const onMouseDown = /* @__PURE__ */ __name((event) => {
    handleMouseDown(event, {
      setInitialWidth: /* @__PURE__ */ __name((value) => handleChangeState({ initialWidth: Number(value) }), "setInitialWidth"),
      setInitialX: /* @__PURE__ */ __name((value) => handleChangeState({ initialX: Number(value) }), "setInitialX"),
      setInitialHeight: /* @__PURE__ */ __name((value) => handleChangeState({ initialHeight: Number(value) }), "setInitialHeight"),
      setInitialY: /* @__PURE__ */ __name((value) => handleChangeState({ initialY: Number(value) }), "setInitialY"),
      drawerWidth: state.drawerWidth,
      drawerHeight: state.drawerHeight,
      initialWidth: state.initialWidth,
      initialHeight: state.initialHeight,
      initialX: state.initialX,
      initialY: state.initialY,
      ...props
    }), handleChangeState({ isResizing: !0 });
  }, "onMouseDown"), onMouseUp = useCallback(() => {
    handleChangeState({ isResizing: !1 });
  }, [handleChangeState]);
  return useEffect(() => {
    const onMouseMove = /* @__PURE__ */ __name((event) => {
      state.isResizing && handleMouseMove(event, {
        drawerWidth: state.drawerWidth,
        drawerHeight: state.drawerHeight,
        initialWidth: state.initialWidth,
        initialHeight: state.initialHeight,
        initialX: state.initialX,
        initialY: state.initialY,
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        placement,
        setDrawerWidth: /* @__PURE__ */ __name((value) => handleChangeState({ drawerWidth: Number(value) }), "setDrawerWidth"),
        setDrawerHeight: /* @__PURE__ */ __name((value) => handleChangeState({ drawerHeight: Number(value) }), "setDrawerHeight"),
        ...props
      });
    }, "onMouseMove");
    return document.addEventListener("mouseup", onMouseUp), document.addEventListener("mousemove", onMouseMove), () => {
      document.removeEventListener("mouseup", onMouseUp), document.removeEventListener("mousemove", onMouseMove);
    };
  }, [
    maxHeight,
    maxWidth,
    minWidth,
    minHeight,
    onMouseUp,
    placement,
    props,
    handleChangeState,
    state.isResizing,
    state.drawerWidth,
    state.drawerHeight,
    state.initialWidth,
    state.initialHeight,
    state.initialX,
    state.initialY
  ]), useEffect(() => {
    handleSizeChange(propSize, handleChangeState, theme);
  }, [propSize, handleChangeState, theme]), /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Drawer$1,
      {
        ...props,
        destroyOnClose: props.isDestroyOnClose,
        forceRender: props.isForceRender,
        keyboard: props.isKeyboard,
        mask: props.isMask,
        maskClosable: props.isMaskClosable,
        push: props.isPush,
        loading: props.isLoading,
        open: props.isOpen,
        className: cn(styles$e.drawer, { [styles$e.drawerBodyWithoutPadding]: props.withoutDrawerBodyPadding }),
        width: state.drawerWidth,
        height: state.drawerHeight,
        placement,
        closeIcon: props.closeIcon ?? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: iconSize, display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconX, { stroke: 1.5 }) }),
        footer: withDefaultFooter ? /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerFooterDefault, { onClose: props.onClose, ...defaultFooterProps }) : customFooter,
        children: props.children
      }
    ),
    createPortal(
      isResizable ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        ResizableDragger,
        {
          onMouseDown,
          placement,
          theme,
          state,
          isOpen
        }
      ) : null,
      document.body
    )
  ] });
}
__name(Drawer2, "Drawer");
function Col(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Col$1, { ...props });
}
__name(Col, "Col");
function Text(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Typography.Text,
    {
      ...props,
      editable: props == null ? void 0 : props.isEditable,
      copyable: props == null ? void 0 : props.isCopyable,
      disabled: props == null ? void 0 : props.isDisabled,
      ellipsis: props == null ? void 0 : props.isEllipsis,
      code: props == null ? void 0 : props.isCode,
      mark: props == null ? void 0 : props.isMark,
      delete: props == null ? void 0 : props.isDelete,
      strong: props == null ? void 0 : props.isStrong,
      underline: props == null ? void 0 : props.isUnderline,
      keyboard: props == null ? void 0 : props.isKeyboard,
      italic: props == null ? void 0 : props.isItalic,
      children: props.children
    }
  );
}
__name(Text, "Text");
function Paragraph(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Typography.Paragraph,
    {
      ...props,
      editable: props == null ? void 0 : props.isEditable,
      copyable: props == null ? void 0 : props.isCopyable,
      disabled: props == null ? void 0 : props.isDisabled,
      code: props == null ? void 0 : props.isCode,
      mark: props == null ? void 0 : props.isMark,
      delete: props == null ? void 0 : props.isDelete,
      strong: props == null ? void 0 : props.isStrong,
      underline: props == null ? void 0 : props.isUnderline,
      keyboard: props == null ? void 0 : props.isKeyboard,
      italic: props == null ? void 0 : props.isItalic,
      children: props.children
    }
  );
}
__name(Paragraph, "Paragraph");
function Link(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Typography.Link,
    {
      ...props,
      editable: props == null ? void 0 : props.isEditable,
      copyable: props == null ? void 0 : props.isCopyable,
      disabled: props == null ? void 0 : props.isDisabled,
      ellipsis: props == null ? void 0 : props.isEllipsis,
      code: props == null ? void 0 : props.isCode,
      mark: props == null ? void 0 : props.isMark,
      delete: props == null ? void 0 : props.isDelete,
      strong: props == null ? void 0 : props.isStrong,
      underline: props == null ? void 0 : props.isUnderline,
      keyboard: props == null ? void 0 : props.isKeyboard,
      italic: props == null ? void 0 : props.isItalic,
      children: props.children
    }
  );
}
__name(Link, "Link");
const filterContent = "_filter-content_1jsle_1", filters = "_filters_1jsle_13", filterTooltip = "_filter-tooltip_1jsle_21", invisibleItem = "_invisible-item_1jsle_31", invisibleItems = "_invisible-items_1jsle_39", styles$d = {
  filterContent,
  filters,
  filterTooltip,
  invisibleItem,
  invisibleItems
};
function Filter({ label: label2, items, controlMaxWidth, closeIcon, ...props }) {
  var _a, _b, _c, _d;
  const { theme } = useTheme(), containerRef = useRef(null), invisibleRef = useRef(null), [remainingCount, setRemainingCount] = useState(0), maxWidth = controlMaxWidth || ((_b = (_a = theme == null ? void 0 : theme.components) == null ? void 0 : _a.Filter) == null ? void 0 : _b.controlMaxWidth);
  useEffect(() => {
    (/* @__PURE__ */ __name(() => {
      var _a2, _b2;
      const container = containerRef.current, invisibleContainer = invisibleRef.current;
      if (!container) return;
      const children = Array.from(container.children), invisibleChildren = invisibleContainer != null && invisibleContainer.children ? Array.from(invisibleContainer.children) : [], childrenItems = [...children, ...invisibleChildren];
      let accumulatedWidth = ((_b2 = (_a2 = childrenItems[0]) == null ? void 0 : _a2.getBoundingClientRect()) == null ? void 0 : _b2.width) || 0, visibleItemsCount = 0;
      const totalCount = items.length;
      if (accumulatedWidth >= maxWidth) return setRemainingCount(totalCount);
      for (const [index, child] of childrenItems.entries()) {
        if (index === 0) continue;
        const childWidth = child == null ? void 0 : child.getBoundingClientRect().width;
        if (accumulatedWidth + childWidth <= maxWidth || index === 1)
          accumulatedWidth += childWidth, visibleItemsCount++;
        else
          break;
      }
      setRemainingCount(totalCount - visibleItemsCount);
    }, "calculateVisibleItems"))();
  }, [items, maxWidth]);
  const style = {
    maxWidth: controlMaxWidth || ((_d = (_c = theme == null ? void 0 : theme.components) == null ? void 0 : _c.Filter) == null ? void 0 : _d.controlMaxWidth),
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }, handleClick = /* @__PURE__ */ __name(() => {
    var _a2;
    return (_a2 = props.onLabelClick) == null ? void 0 : _a2.call(props, props.filterId);
  }, "handleClick");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tooltip$1,
    {
      title: items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$d.filterTooltip, children: items.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item }, `${item}-${index}`)) }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tag$1,
        {
          closeIcon: props.isClosable ? closeIcon ?? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconX, { size: 14 }) }) : null,
          ...props,
          closable: props.isClosable,
          bordered: props.isBordered,
          style: { display: props.isClosable ? "flex" : "", cursor: props.onLabelClick ? "pointer" : "", ...props.style },
          onClick: handleClick,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$d.filterContent, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style, ref: containerRef, className: styles$d.filters, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { isStrong: !0, children: [
                label2,
                ": "
              ] }),
              items.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: items.slice(0, items.length - remainingCount).map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { children: [
                item,
                index === items.length - remainingCount - 1 ? "" : ", "
              ] }, item)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: "Значение" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: invisibleRef, className: styles$d.invisibleItems, children: items.slice(items.length - remainingCount).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$d.invisibleItem, children: `, ${item}` }, item)) }),
            remainingCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              "+",
              remainingCount
            ] })
          ] })
        }
      )
    }
  );
}
__name(Filter, "Filter");
const Flex = /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(Flex$1, { ...props }), "Flex");
function Layout({ children, ...restProps }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout$1, { ...restProps, children });
}
__name(Layout, "Layout");
function Footer({ children, ...restProps }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout$1.Footer, { ...restProps, children });
}
__name(Footer, "Footer");
function Sider({ children, ...restProps }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout$1.Sider, { ...restProps, children });
}
__name(Sider, "Sider");
function Content({ children, ...restProps }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout$1.Content, { ...restProps, children });
}
__name(Content, "Content");
const SiderPanel = /* @__PURE__ */ __name((props) => {
  var _a, _b, _c, _d, _e, _f;
  const { title, className, children, isCollapsed } = props, { theme } = useTheme();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Sider,
    {
      className: cn(styles$j.siderPanel, {
        [styles$j.siderActive]: !isCollapsed
      }),
      collapsed: isCollapsed,
      collapsedWidth: 0,
      width: (_b = (_a = theme.components) == null ? void 0 : _a.Layout) == null ? void 0 : _b.panelWidth,
      style: {
        background: (_d = (_c = theme.components) == null ? void 0 : _c.Layout) == null ? void 0 : _d.bodyBg
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(styles$j.siderPanelContent, className), style: { width: (_f = (_e = theme.components) == null ? void 0 : _e.Layout) == null ? void 0 : _f.panelWidth }, children: [
        title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$j.siderTitle, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { level: 4, style: { margin: 0 }, children: title }) }),
        children
      ] })
    }
  );
}, "SiderPanel");
function List(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(List$1, { ...props });
}
__name(List, "List");
function Row(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Row$1, { ...props });
}
__name(Row, "Row");
const TAG_STATUS_COLORS = {
  success: {
    border: "statusSuccessBorder",
    bg: "statusSuccessBg",
    color: "statusSuccessText"
  },
  warning: {
    bg: "statusWarningBg",
    border: "statusWarningBorder",
    color: "statusWarningText"
  },
  processing: {
    bg: "statusProcessingBg",
    border: "statusProcessingBorder",
    color: "statusProcessingText"
  },
  error: {
    bg: "statusErrorBg",
    border: "statusErrorBorder",
    color: "statusErrorText"
  },
  default: {
    bg: "statusDefaultBg",
    border: "statusDefaultBorder",
    color: "statusDefaultText"
  }
}, TAG_COLORS = {
  magenta: {
    bg: "colorfulMagentaBg",
    border: "colorfulMagentaBorder",
    color: "colorfulMagentaText"
  },
  red: {
    bg: "colorfulRedBg",
    border: "colorfulRedBorder",
    color: "colorfulRedText"
  },
  volcano: {
    bg: "colorfulVolcanoBg",
    border: "colorfulVolcanoBorder",
    color: "colorfulVolcanoText"
  },
  orange: {
    bg: "colorfulOrangeBg",
    border: "colorfulOrangeBorder",
    color: "colorfulOrangeText"
  },
  gold: {
    bg: "colorfulGoldBg",
    border: "colorfulGoldBorder",
    color: "colorfulGoldText"
  },
  lime: {
    bg: "colorfulLimeBg",
    border: "colorfulLimeBorder",
    color: "colorfulLimeText"
  },
  green: {
    bg: "colorfulGreenBg",
    border: "colorfulGreenBorder",
    color: "colorfulGreenText"
  },
  cyan: {
    bg: "colorfulCyanBg",
    border: "colorfulCyanBorder",
    color: "colorfulCyanText"
  },
  blue: {
    bg: "colorfulBlueBg",
    border: "colorfulBlueBorder",
    color: "colorfulBlueText"
  },
  geekblue: {
    bg: "colorfulGeekblueBg",
    border: "colorfulGeekblueBorder",
    color: "colorfulGeekblueText"
  },
  purple: {
    bg: "colorfulPurpleBg",
    border: "colorfulPurpleBorder",
    color: "colorfulPurpleText"
  }
}, iconWrapper = "_icon-wrapper_12gkq_1", tagStyles = {
  iconWrapper
};
function Tag(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { theme } = useTheme(), { fontSizeIcon: suffixIconSize, fontSize: closedIconSize } = ((_a = theme == null ? void 0 : theme.components) == null ? void 0 : _a.Tag) || {}, clonedIcon = props.icon ? React__default.cloneElement(props.icon, {
    style: {
      marginRight: 8,
      width: suffixIconSize,
      height: suffixIconSize
    }
  }) : void 0, clonedCloseIcon = props.closeIcon ? React__default.cloneElement(props.closeIcon, {
    style: {
      width: closedIconSize,
      height: closedIconSize
    }
  }) : void 0;
  let styles2;
  switch (!0) {
    case props.isCheckable:
      styles2 = {
        backgroundColor: props.isChecked ? (_c = (_b = theme == null ? void 0 : theme.components) == null ? void 0 : _b.Tag) == null ? void 0 : _c.colorPrimary : "transparent",
        color: props.isChecked && ((_e = (_d = theme == null ? void 0 : theme.components) == null ? void 0 : _d.Tag) == null ? void 0 : _e.colorTextLightSolid),
        borderColor: "transparent",
        cursor: "pointer"
      };
      break;
    case (!!props.status || !!props.color):
      {
        let colorMap;
        props.status ? colorMap = TAG_STATUS_COLORS[props.status] : props.color && (colorMap = TAG_COLORS[props.color]), styles2 = colorMap ? {
          borderColor: props.isBordered && ((_g = (_f = theme == null ? void 0 : theme.components) == null ? void 0 : _f.Tag) == null ? void 0 : _g[colorMap.border]) || void 0,
          color: ((_i = (_h = theme == null ? void 0 : theme.components) == null ? void 0 : _h.Tag) == null ? void 0 : _i[colorMap.color]) || void 0,
          backgroundColor: ((_k = (_j = theme == null ? void 0 : theme.components) == null ? void 0 : _j.Tag) == null ? void 0 : _k[colorMap.bg]) || void 0
        } : void 0;
      }
      break;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag$1,
    {
      ...props,
      closable: props.isClosable,
      onClick: props.onCheck,
      bordered: props.isBordered,
      style: {
        display: "inline-flex",
        alignItems: "center",
        borderStyle: props.isDashed ? "dashed" : void 0,
        ...props.style,
        ...styles2
      },
      icon: clonedIcon,
      closeIcon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: tagStyles.iconWrapper, children: clonedCloseIcon ?? (props.isClosable && /* @__PURE__ */ jsxRuntimeExports.jsx(IconX, { width: closedIconSize, height: closedIconSize })) })
    }
  );
}
__name(Tag, "Tag");
const Dropdown = /* @__PURE__ */ __name(({
  countBadge,
  children,
  isArrow,
  isAutoAdjustOverflow,
  isDisabled,
  isOpen,
  shouldDestroyPopupOnHide,
  menu: menu2,
  ...rest
}) => {
  var _a, _b;
  const { theme } = useTheme(), iconSize = (_b = (_a = theme == null ? void 0 : theme.components) == null ? void 0 : _a.Dropdown) == null ? void 0 : _b.fontSizeIcon, menuItems = useMemo(() => {
    var _a2;
    return ((_a2 = menu2 == null ? void 0 : menu2.items) == null ? void 0 : _a2.map((item) => item && "children" in item ? {
      ...item,
      label: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconChevronRight,
          {
            stroke: 1,
            width: iconSize,
            height: iconSize,
            style: { position: "absolute", insetInlineEnd: "8px" }
          }
        )
      ] }),
      expandIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {})
    } : item)) ?? [];
  }, [iconSize, menu2 == null ? void 0 : menu2.items]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Dropdown$2,
    {
      ...rest,
      arrow: isArrow,
      autoAdjustOverflow: isAutoAdjustOverflow,
      destroyPopupOnHide: shouldDestroyPopupOnHide,
      disabled: isDisabled,
      open: isOpen,
      menu: {
        ...menu2,
        items: menuItems
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Space, { children: [
        children,
        countBadge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { type: "default", count: countBadge })
      ] })
    }
  );
}, "Dropdown"), DropdownButton = /* @__PURE__ */ __name(({
  children,
  countBadge,
  icon: icon2,
  iconBtn,
  isArrow,
  isAutoAdjustOverflow,
  isDanger,
  isDisabled,
  isLoading,
  isOpen,
  shouldDestroyPopupOnHide,
  size,
  ...rest
}) => {
  var _a;
  const { theme } = useTheme(), tokenButton = (_a = theme == null ? void 0 : theme.components) == null ? void 0 : _a.Button;
  let badgeType = "default", styleIcon = {
    width: tokenButton == null ? void 0 : tokenButton.iconSize,
    height: tokenButton == null ? void 0 : tokenButton.iconSize,
    fontSize: tokenButton == null ? void 0 : tokenButton.iconSize
  };
  return isDanger && (badgeType = "danger"), size === "small" && (styleIcon = {
    width: tokenButton == null ? void 0 : tokenButton.iconSizeSM,
    height: tokenButton == null ? void 0 : tokenButton.iconSizeSM,
    fontSize: tokenButton == null ? void 0 : tokenButton.iconSizeSM
  }), size === "large" && (styleIcon = {
    width: tokenButton == null ? void 0 : tokenButton.iconSizeLG,
    height: tokenButton == null ? void 0 : tokenButton.iconSizeLG,
    fontSize: tokenButton == null ? void 0 : tokenButton.iconSizeLG
  }), /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Dropdown$2.Button,
    {
      ...rest,
      arrow: isArrow,
      autoAdjustOverflow: isAutoAdjustOverflow,
      danger: isDanger,
      destroyPopupOnHide: shouldDestroyPopupOnHide,
      disabled: isDisabled,
      icon: icon2 ? cloneElement$1(icon2, { style: styleIcon }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { display: "flex" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconDots, { width: styleIcon.width, height: styleIcon.height, stroke: 1.5 }) }),
      loading: isLoading,
      open: isOpen,
      children: [
        iconBtn && cloneElement$1(iconBtn, { style: styleIcon }),
        children,
        countBadge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { type: badgeType, count: countBadge })
      ]
    }
  );
}, "DropdownButton"), AutoComplete = /* @__PURE__ */ __name(({ isDisabled, isDefaultOpen, isOpen, ...restProps }) => /* @__PURE__ */ jsxRuntimeExports.jsx(RefAutoComplete, { ...restProps, disabled: isDisabled, defaultOpen: isDefaultOpen, open: isOpen }), "AutoComplete"), getLabelStylesFromSize$1 = /* @__PURE__ */ __name((theme) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  return {
    inputFontSize: (_b = (_a = theme.components) == null ? void 0 : _a.Input) == null ? void 0 : _b.inputFontSize,
    placeholderHeight: ((_d = (_c = theme.components) == null ? void 0 : _c.Input) == null ? void 0 : _d.inputFontSize) * ((_f = (_e = theme.components) == null ? void 0 : _e.Input) == null ? void 0 : _f.lineHeight),
    left: (_h = (_g = theme.components) == null ? void 0 : _g.Input) == null ? void 0 : _h.paddingInline
  };
}, "getLabelStylesFromSize$1"), floatLabel$1 = "_float-label_1rkir_1", label$2 = "_label_1rkir_9", asLabel$1 = "_as-label_1rkir_21", styles$c = {
  floatLabel: floatLabel$1,
  label: label$2,
  asLabel: asLabel$1
}, FloatAutoComplete = /* @__PURE__ */ __name(({ placeholder, title, ...props }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const { theme } = useTheme(), [focus, setFocus] = useState(!1), [value, setValue] = useState(props.value), [search, setSearch] = useState(""), labelStyles = getLabelStylesFromSize$1(theme), labelHeight = labelStyles.placeholderHeight, isOccupied = !!(focus || value && ((_a = value.toString()) == null ? void 0 : _a.length) > 0 || search.length > 0), labelClass = isOccupied ? styles$c.asLabel : styles$c.asPlaceholder, onChange = /* @__PURE__ */ __name((_value) => {
    var _a2;
    (_a2 = props.onChange) == null || _a2.call(props, _value), setValue(_value);
  }, "onChange"), onSearch = /* @__PURE__ */ __name((_value) => {
    var _a2;
    (_a2 = props.onSearch) == null || _a2.call(props, _value), setSearch(_value);
  }, "onSearch");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onBlur: /* @__PURE__ */ __name(() => setFocus(!1), "onBlur"), onFocus: /* @__PURE__ */ __name(() => setFocus(!0), "onFocus"), className: styles$c.floatLabel, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AutoComplete, { ...props, onChange, onSearch, placeholder: "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "label",
      {
        style: {
          fontSize: isOccupied ? (_c = (_b = theme.components) == null ? void 0 : _b.Input) == null ? void 0 : _c.labelFontSize : labelStyles.inputFontSize,
          color: isOccupied ? (_e = (_d = theme.components) == null ? void 0 : _d.Input) == null ? void 0 : _e.labelColor : (_g = (_f = theme.components) == null ? void 0 : _f.Input) == null ? void 0 : _g.colorTextPlaceholder,
          fontFamily: (_h = theme.token) == null ? void 0 : _h.fontFamily,
          lineHeight: isOccupied ? 1 : (_j = (_i = theme.components) == null ? void 0 : _i.Input) == null ? void 0 : _j.lineHeight,
          top: isOccupied ? "calc(-7px)" : `calc(50% - ${labelHeight / 2}px)`,
          left: labelStyles.left
        },
        className: cn(styles$c.label, labelClass),
        children: !isOccupied && placeholder ? placeholder : title
      }
    )
  ] });
}, "FloatAutoComplete"), Label = /* @__PURE__ */ __name(({ isDisabled, isStrong, isUnderline, isItalic, ...restProps }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Typography.Text,
  {
    ...restProps,
    disabled: isDisabled,
    strong: isStrong,
    underline: isUnderline,
    italic: isItalic
  }
), "Label"), getLabelStylesFromSize = /* @__PURE__ */ __name((theme, size = "middle") => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
  return {
    small: {
      inputFontSize: (_b = (_a = theme.components) == null ? void 0 : _a.Input) == null ? void 0 : _b.inputFontSizeSM,
      labelFontSize: (_d = (_c = theme.components) == null ? void 0 : _c.Input) == null ? void 0 : _d.labelFontSize,
      placeholderHeight: ((_f = (_e = theme.components) == null ? void 0 : _e.Input) == null ? void 0 : _f.inputFontSizeSM) * ((_h = (_g = theme.components) == null ? void 0 : _g.Input) == null ? void 0 : _h.lineHeight),
      left: (_j = (_i = theme.components) == null ? void 0 : _i.Input) == null ? void 0 : _j.paddingInlineSM
    },
    middle: {
      inputFontSize: (_l = (_k = theme.components) == null ? void 0 : _k.Input) == null ? void 0 : _l.inputFontSize,
      labelFontSize: (_n = (_m = theme.components) == null ? void 0 : _m.Input) == null ? void 0 : _n.labelFontSize,
      placeholderHeight: ((_p = (_o = theme.components) == null ? void 0 : _o.Input) == null ? void 0 : _p.inputFontSize) * ((_r = (_q = theme.components) == null ? void 0 : _q.Input) == null ? void 0 : _r.lineHeight),
      left: (_t2 = (_s = theme.components) == null ? void 0 : _s.Input) == null ? void 0 : _t2.paddingInline
    },
    large: {
      inputFontSize: (_v = (_u = theme.components) == null ? void 0 : _u.Input) == null ? void 0 : _v.inputFontSizeLG,
      labelFontSize: (_x = (_w = theme.components) == null ? void 0 : _w.Input) == null ? void 0 : _x.labelFontSize,
      placeholderHeight: ((_z = (_y = theme.components) == null ? void 0 : _y.Input) == null ? void 0 : _z.inputFontSizeLG) * ((_B = (_A = theme.components) == null ? void 0 : _A.Input) == null ? void 0 : _B.lineHeight),
      left: (_D = (_C = theme.components) == null ? void 0 : _C.Input) == null ? void 0 : _D.paddingInlineLG
    }
  }[size];
}, "getLabelStylesFromSize"), floatLabel = "_float-label_ys7fd_1", label$1 = "_label_ys7fd_9", asLabel = "_as-label_ys7fd_31", styles$b = {
  floatLabel,
  label: label$1,
  asLabel
}, FloatSelect = /* @__PURE__ */ __name(({ placeholder, size, title, ...props }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const { theme } = useTheme(), [focus, setFocus] = useState(!1), [value, setValue] = useState(props.value), labelStyles = getLabelStylesFromSize(theme, size), labelHeight = labelStyles.placeholderHeight, isOccupied = !!(focus || value && ((_a = value.toString()) == null ? void 0 : _a.length) > 0), labelClass = isOccupied ? styles$b.asLabel : styles$b.asPlaceholder, onChange = /* @__PURE__ */ __name((_value, option) => {
    var _a2;
    (_a2 = props.onChange) == null || _a2.call(props, _value, option), setValue(_value);
  }, "onChange");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onBlur: /* @__PURE__ */ __name(() => setFocus(!1), "onBlur"), onFocus: /* @__PURE__ */ __name(() => setFocus(!0), "onFocus"), className: styles$b.floatLabel, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Select$1, { ...props, onChange, placeholder: "", size }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "label",
      {
        style: {
          fontSize: isOccupied ? (_c = (_b = theme.components) == null ? void 0 : _b.Input) == null ? void 0 : _c.labelFontSize : labelStyles.inputFontSize,
          color: isOccupied ? (_e = (_d = theme.components) == null ? void 0 : _d.Input) == null ? void 0 : _e.labelColor : (_g = (_f = theme.components) == null ? void 0 : _f.Input) == null ? void 0 : _g.colorTextPlaceholder,
          fontFamily: (_h = theme.token) == null ? void 0 : _h.fontFamily,
          lineHeight: isOccupied ? 1 : (_j = (_i = theme.components) == null ? void 0 : _i.Input) == null ? void 0 : _j.lineHeight,
          top: isOccupied ? "calc(-7px)" : `calc(50% - ${labelHeight / 2}px)`,
          left: labelStyles.left
        },
        className: cn(styles$b.label, labelClass),
        children: !isOccupied && placeholder ? placeholder : title
      }
    )
  ] });
}, "FloatSelect"), CheckboxGroup = /* @__PURE__ */ __name(({ isDisabled, ...restProps }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox.Group, { ...restProps, disabled: isDisabled }), "CheckboxGroup"), Radio = /* @__PURE__ */ __name(({ isChecked, isDisabled, shouldDefaultChecked, isRequired, ...restProps }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Radio$1,
  {
    ...restProps,
    checked: isChecked,
    disabled: isDisabled,
    defaultChecked: shouldDefaultChecked,
    required: isRequired
  }
), "Radio"), RadioButton = /* @__PURE__ */ __name(({
  isChecked,
  isDisabled,
  shouldDefaultChecked,
  isRequired,
  ...restProps
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Radio$1.Button,
  {
    ...restProps,
    checked: isChecked,
    disabled: isDisabled,
    defaultChecked: shouldDefaultChecked,
    required: isRequired
  }
), "RadioButton"), RadioGroup = /* @__PURE__ */ __name(({ isDisabled, ...restProps }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Radio$1.Group, { ...restProps, disabled: isDisabled }), "RadioGroup"), Switch = /* @__PURE__ */ __name(({ isChecked, isDisabled, isLoading, ...restProps }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Switch$1, { ...restProps, checked: isChecked, disabled: isDisabled, loading: isLoading }), "Switch"), image = "_image_1cxc2_1", mask = "_mask_1cxc2_21", styles$a = {
  image,
  mask
}, Image = /* @__PURE__ */ __name(({ preview, ...rest }) => {
  const isMaskTextHidden = typeof preview == "object" ? preview == null ? void 0 : preview.isMaskTextHidden : void 0, isMaskHidden = typeof preview == "object" ? preview == null ? void 0 : preview.isMaskHidden : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Image$1,
    {
      ...rest,
      preview: {
        mask: isMaskHidden ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$a.mask, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefIcon$e, {}),
          !isMaskTextHidden && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$a.text, children: "Предпросмотр" })
        ] })
      },
      wrapperClassName: styles$a.image
    }
  );
}, "Image"), PreviewGroup = /* @__PURE__ */ __name(({ ...rest }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Image$1.PreviewGroup, { ...rest }), "PreviewGroup"), PageSpinner = /* @__PURE__ */ __name(({ isFullscreen, isSpinning, ...rest }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Spin, { ...rest, spinning: isSpinning, fullscreen: isFullscreen }), "PageSpinner"), AvatarSkeleton = /* @__PURE__ */ __name(({ isActive, ...rest }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1.Avatar, { ...rest, active: isActive }), "AvatarSkeleton"), ButtonSkeleton = /* @__PURE__ */ __name(({ isActive, isBlock, ...rest }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1.Button, { ...rest, block: isBlock, active: isActive }), "ButtonSkeleton"), ImageSkeleton = /* @__PURE__ */ __name(({ isActive, ...rest }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1.Image, { ...rest, active: isActive }), "ImageSkeleton"), InputSkeleton = /* @__PURE__ */ __name(({ isActive, isBlock, ...rest }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1.Input, { ...rest, active: isActive, block: isBlock }), "InputSkeleton"), NodeSkeleton = /* @__PURE__ */ __name(({ isActive, isFullSize, ...rest }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1.Node, { ...rest, active: isActive, fullSize: isFullSize }), "NodeSkeleton"), Skeleton = /* @__PURE__ */ __name(({
  isActive,
  isAvatar,
  isLoading,
  isParagraph,
  isRound,
  isTitle,
  ...rest
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Skeleton$1,
  {
    ...rest,
    active: isActive,
    avatar: isAvatar,
    loading: isLoading,
    paragraph: isParagraph,
    round: isRound,
    title: isTitle
  }
), "Skeleton"), titleModal = "_title-modal_ps3hb_1", commonModal = "_common-modal_ps3hb_11", styles$9 = {
  titleModal,
  commonModal
}, getMapColorsIcon = /* @__PURE__ */ __name((theme) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  return {
    default: (_a = theme.token) == null ? void 0 : _a.colorPrimary,
    error: (_c = (_b = theme.components) == null ? void 0 : _b.Modal) == null ? void 0 : _c.iconErrorColor,
    info: (_e = (_d = theme.components) == null ? void 0 : _d.Modal) == null ? void 0 : _e.iconInfoColor,
    success: (_g = (_f = theme.components) == null ? void 0 : _f.Modal) == null ? void 0 : _g.iconSuccessColor,
    warning: (_i = (_h = theme.components) == null ? void 0 : _h.Modal) == null ? void 0 : _i.iconWarningColor
  };
}, "getMapColorsIcon");
function CommonModal({ okType = "primary", modalType = "default", ...props }) {
  var _a, _b, _c, _d, _e;
  const { theme } = useTheme(), iconSize = (_b = (_a = theme == null ? void 0 : theme.components) == null ? void 0 : _a.Modal) == null ? void 0 : _b.closeIconSize, renderFooter = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    props.cancelText && /* @__PURE__ */ createElement(Button$1, { ...props.cancelButtonProps, key: "close", onClick: props.onCancel }, props.cancelText),
    props.okText && /* @__PURE__ */ createElement(Button$1, { ...props.okButtonProps, key: "ok", type: okType, onClick: props.onOk, isLoading: props.isConfirmLoading }, props.okText)
  ] }), "renderFooter");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Modal$1,
    {
      ...props,
      className: cn(props.className, styles$9.commonModal),
      loading: props.isLoading,
      open: props.isOpen,
      closeIcon: props.closeIcon ?? /* @__PURE__ */ jsxRuntimeExports.jsx(IconX, { width: iconSize, height: iconSize, stroke: 1.5 }),
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$9.titleModal, children: [
        props.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Icon$1,
          {
            icon: props.icon,
            size: (_d = (_c = theme.components) == null ? void 0 : _c.Modal) == null ? void 0 : _d.iconSize,
            style: { marginRight: 8, color: (_e = getMapColorsIcon(theme)) == null ? void 0 : _e[modalType] }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: props.title })
      ] }),
      footer: props.footer ?? renderFooter,
      children: props.children
    }
  );
}
__name(CommonModal, "CommonModal");
function Modal({ closeIcon, ...rest }) {
  var _a, _b;
  const { theme } = useTheme(), closeIconSize = (_b = (_a = theme == null ? void 0 : theme.components) == null ? void 0 : _a.Modal) == null ? void 0 : _b.closeIconSize;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CommonModal,
    {
      ...rest,
      closeIcon: closeIcon ?? /* @__PURE__ */ jsxRuntimeExports.jsx(IconX, { width: closeIconSize, height: closeIconSize, stroke: 1.5 })
    }
  );
}
__name(Modal, "Modal");
function ModalButton(props) {
  const [isOpen, setIsOpen] = useState(!!props.initialIsOpen), { Button: Button2, buttonProps } = props, handleModalOpen = /* @__PURE__ */ __name((e2) => {
    setIsOpen(!0), buttonProps.onClick(e2);
  }, "handleModalOpen"), handleCancel = /* @__PURE__ */ __name((event) => {
    var _a;
    setIsOpen(!1), (_a = props.onCancel) == null || _a.call(props, event);
  }, "handleCancel"), handleOk = /* @__PURE__ */ __name((event) => {
    var _a;
    setIsOpen(!1), (_a = props.onOk) == null || _a.call(props, event);
  }, "handleOk");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button2, { ...buttonProps, onClick: handleModalOpen }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CommonModal, { ...props, isOpen, onCancel: handleCancel, onOk: handleOk })
  ] });
}
__name(ModalButton, "ModalButton");
const iconModalDocument = "_icon-modal-document_17k79_1", titleModalDocument = "_title-modal-document_17k79_11", descriptionModalDocument = "_description-modal-document_17k79_25", styles$8 = {
  iconModalDocument,
  titleModalDocument,
  descriptionModalDocument
};
function ModalDocument(props) {
  var _a, _b, _c, _d;
  const { theme } = useTheme(), { fileSettings, descriptionFileModal, titleFileModal, ...modalProps } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CommonModal, { ...modalProps, children: [
    modalProps.children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginBottom: (_b = (_a = theme.components) == null ? void 0 : _a.Modal) == null ? void 0 : _b.marginSM }, children: modalProps.children }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FileInput.Dragger, { className: styles$8.fileListError, ...fileSettings, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$8.iconModalDocument, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Icon$1,
        {
          icon: props.iconFileModal ?? /* @__PURE__ */ jsxRuntimeExports.jsx(RefIcon, {}),
          size: (((_d = (_c = theme.components) == null ? void 0 : _c.Modal) == null ? void 0 : _d.iconSize) || 24) * 2,
          style: { display: "inline-flex" },
          type: "primary"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$8.titleModalDocument, children: titleFileModal ?? "Выберите или перетащите файлы сюда" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$8.descriptionModalDocument, children: descriptionFileModal })
    ] })
  ] });
}
__name(ModalDocument, "ModalDocument");
const _ModalStateClass = class _ModalStateClass {
  constructor() {
    __publicField(this, "container");
    __publicField(this, "root");
    __publicField(this, "resolve");
    __publicField(this, "reject");
  }
  reset() {
    this.resolve = void 0, this.reject && (this.reject(), this.reject = void 0), this.root && (this.root.unmount(), this.root = void 0), this.container && this.container.remove();
  }
};
__name(_ModalStateClass, "ModalStateClass");
let ModalStateClass = _ModalStateClass;
const useModal = /* @__PURE__ */ __name(() => {
  const simpleModalCallback = React__default.useMemo(() => new ModalStateClass(), []), { theme } = useTheme();
  return React__default.useEffect(
    () => () => {
      simpleModalCallback.reset();
    },
    [simpleModalCallback]
  ), (args) => {
    simpleModalCallback.reset();
    const containerDiv = document.createElement("div");
    return document.body.appendChild(containerDiv), simpleModalCallback.container = containerDiv, simpleModalCallback.root = createRoot(containerDiv), simpleModalCallback.root.render(
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { theme, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CommonModal,
        {
          ...args,
          onOk: /* @__PURE__ */ __name((e2) => {
            var _a;
            simpleModalCallback.resolve && simpleModalCallback.resolve(!0), simpleModalCallback.reset(), (_a = args == null ? void 0 : args.onOk) == null || _a.call(args, e2);
          }, "onOk"),
          onCancel: /* @__PURE__ */ __name((e2) => {
            var _a;
            simpleModalCallback.resolve && simpleModalCallback.resolve(!0), simpleModalCallback.reset(), (_a = args == null ? void 0 : args.onCancel) == null || _a.call(args, e2);
          }, "onCancel"),
          zIndex: 1200,
          isOpen: !0
        }
      ) })
    ), new Promise((resolve, reject) => {
      simpleModalCallback.reject = reject, simpleModalCallback.resolve = resolve;
    });
  };
}, "useModal");
function Breadcrumbs({ items, isLastCrumbTitle, ...rest }) {
  var _a, _b;
  const { theme } = useTheme(), iconSize = (_b = (_a = theme == null ? void 0 : theme.components) == null ? void 0 : _a.Breadcrumb) == null ? void 0 : _b.fontSizeIcon, updatedItems = useMemo(() => (items == null ? void 0 : items.map((item, index) => {
    const isLastItem = index === items.length - 1, customTitle = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      item.icon && (item.icon ? React__default.cloneElement(item.icon, {
        style: {
          width: iconSize,
          height: iconSize
        }
      }) : null),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginLeft: 4 }, children: item.title })
    ] });
    return {
      ...item,
      title: isLastItem && isLastCrumbTitle ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: "bold" }, children: customTitle }) : customTitle
    };
  })) ?? [], [items, iconSize, isLastCrumbTitle]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { ...rest, items: updatedItems });
}
__name(Breadcrumbs, "Breadcrumbs");
const TabsLabelWrapper = /* @__PURE__ */ __name(({
  label: label2,
  hasBadge,
  badgeCount,
  badgeUsedType,
  extraNode,
  isActiveTab
}) => {
  const { element, onHover = !1 } = extraNode || {}, [shouldRender, setShouldRender] = useState(!!element && !onHover), uniqID = useRef(`extra-node-container${onHover ? "-hover" : ""}-${nanoid(3)}`), [labelWrapper, setLabelWrapper] = useState(null);
  return useEffect(() => {
    const element2 = document.getElementById(uniqID.current);
    setLabelWrapper(element2);
    const handleMouseOver = /* @__PURE__ */ __name(() => onHover && setShouldRender(!0), "handleMouseOver"), handleMouseLeave = /* @__PURE__ */ __name(() => onHover && setShouldRender(!1), "handleMouseLeave");
    return labelWrapper == null || labelWrapper.addEventListener("mouseover", handleMouseOver), labelWrapper == null || labelWrapper.addEventListener("mouseout", handleMouseLeave), () => {
      labelWrapper == null || labelWrapper.removeEventListener("mouseover", handleMouseOver), labelWrapper == null || labelWrapper.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [labelWrapper, onHover]), /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: uniqID.current,
      style: {
        display: "flex",
        alignItems: "center",
        position: "relative",
        fontWeight: isActiveTab ? "600" : "initial"
      },
      children: [
        label2,
        hasBadge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { count: badgeCount, style: { marginLeft: "8px" }, type: badgeUsedType }),
        shouldRender && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            style: {
              paddingLeft: "8px",
              position: onHover ? "absolute" : "relative",
              right: onHover ? 0 : "unset"
            },
            children: element
          }
        )
      ]
    }
  );
}, "TabsLabelWrapper"), getMapSizesIcon = /* @__PURE__ */ __name((theme) => {
  var _a, _b, _c, _d, _e, _f;
  return {
    small: (_b = (_a = theme == null ? void 0 : theme.components) == null ? void 0 : _a.Tabs) == null ? void 0 : _b.iconSizeSM,
    middle: (_d = (_c = theme == null ? void 0 : theme.components) == null ? void 0 : _c.Tabs) == null ? void 0 : _d.iconSize,
    large: (_f = (_e = theme == null ? void 0 : theme.components) == null ? void 0 : _e.Tabs) == null ? void 0 : _f.iconSizeLG
  };
}, "getMapSizesIcon"), customTabs = "_custom-tabs_nj4zq_1", styles$7 = {
  customTabs
}, Tabs = /* @__PURE__ */ __name((props) => {
  var _a;
  const [currentActiveKey, setCurrentActiveKey] = useState(props == null ? void 0 : props.defaultActiveKey), { theme } = useTheme();
  useEffect(() => {
    props != null && props.activeKey && setCurrentActiveKey(props == null ? void 0 : props.activeKey);
  }, [props == null ? void 0 : props.activeKey]);
  const handleTabChange = /* @__PURE__ */ __name((key) => {
    setCurrentActiveKey(key), props.onChange && props.onChange(key);
  }, "handleTabChange");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tabs$1,
    {
      ...props,
      className: cn(props.className, styles$7.customTabs),
      activeKey: currentActiveKey,
      onChange: handleTabChange,
      items: (_a = props.items) == null ? void 0 : _a.map((item) => {
        var _a2, _b;
        const { extraNode, hasBadge, badgeCount, label: label2, icon: icon2, key, ...restItem } = item, isActive = currentActiveKey === key, badgeUsedType = isActive ? "primary" : "default";
        return {
          ...restItem,
          key,
          icon: icon2 ? cloneElement$1(icon2, {
            style: {
              width: (_a2 = getMapSizesIcon(theme)) == null ? void 0 : _a2[props.size || "middle"],
              height: (_b = getMapSizesIcon(theme)) == null ? void 0 : _b[props.size || "middle"]
            }
          }) : null,
          label: /* @__PURE__ */ jsxRuntimeExports.jsx(
            TabsLabelWrapper,
            {
              label: label2,
              hasBadge,
              badgeCount,
              badgeUsedType,
              extraNode,
              isActiveTab: isActive
            }
          ),
          disabled: item.isDisabled,
          forceRender: item.shouldForceRender,
          closable: item.isClosable,
          animated: item.isAnimated,
          active: item.isActive,
          destroyInactiveTabPane: item.shouldDestroyInactiveTabPane
        };
      }),
      animated: props.isAnimated,
      destroyInactiveTabPane: props.shouldDestroyInactiveTabPane,
      hideAdd: props.shouldHideAdd,
      centered: props.isCentered,
      renderTabBar: props.renderTabBar
    }
  );
}, "Tabs"), menu = "_menu_1thp5_1", styles$6 = {
  menu
}, Menu = /* @__PURE__ */ __name(({
  isForceSubMenuRender,
  isInlineCollapsed,
  isMultiple,
  isSelectable,
  mode,
  ...rest
}) => {
  var _a, _b, _c;
  const { theme } = useTheme(), iconSize = (_b = (_a = theme == null ? void 0 : theme.components) == null ? void 0 : _a.Menu) == null ? void 0 : _b.iconSize, styleIcon = {
    width: iconSize,
    height: iconSize,
    fontSize: iconSize
  }, items = (_c = rest.items) == null ? void 0 : _c.map((item) => ({
    ...item,
    icon: item != null && item.icon ? cloneElement$1(item.icon, { style: styleIcon }) : null
  })), inlineCollapsed = mode === "inline" ? { inlineCollapsed: isInlineCollapsed } : {};
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Menu$1,
    {
      ...rest,
      forceSubMenuRender: isForceSubMenuRender,
      ...inlineCollapsed,
      multiple: isMultiple,
      selectable: isSelectable,
      items,
      className: styles$6.menu,
      mode
    }
  );
}, "Menu"), PAGINATION_SIZE_OPTIONS = [5, 10, 20, 50, 100], getPaginationSizeOptions = /* @__PURE__ */ __name((paginationSizeOptions = PAGINATION_SIZE_OPTIONS) => paginationSizeOptions == null ? void 0 : paginationSizeOptions.map((option) => ({
  label: option,
  value: option
})), "getPaginationSizeOptions"), pagination$1 = "_pagination_c9vxm_1", styles$5 = {
  pagination: pagination$1
};
function Pagination(props) {
  var _a, _b;
  const {
    current,
    defaultPageSize = 10,
    isDisabled,
    isPageSizeChanger,
    isSimple,
    onChange,
    pageSizeOptions,
    shouldShowSizeChanger,
    itemRender,
    total,
    pageSize,
    className,
    style
  } = props, { theme } = useTheme(), iconSize = (_b = (_a = theme == null ? void 0 : theme.components) == null ? void 0 : _a.Pagination) == null ? void 0 : _b.fontSizeSM, numberOfEntriesPerPage = "Записей на странице", customItem = {
    page: null,
    prev: /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronLeft, { width: iconSize, height: iconSize, color: isDisabled || current === 1 ? "gray" : "black" }),
    next: /* @__PURE__ */ jsxRuntimeExports.jsx(
      IconChevronRight,
      {
        width: iconSize,
        height: iconSize,
        color: isDisabled || current === Math.ceil(Number(total) / Number(pageSize || 10)) ? "gray" : "black"
      }
    ),
    "jump-prev": /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronsLeft, { width: iconSize, height: iconSize }),
    "jump-next": /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronsRight, { width: iconSize, height: iconSize })
  }, customItemRenderer = /* @__PURE__ */ __name((_2, type, element) => customItem[type] || element, "customItemRenderer"), handleSelect = /* @__PURE__ */ __name((pageSizeValue) => {
    if (onChange && current && total)
      if (current > 1) {
        const pageNumber = Math.ceil(total / pageSizeValue);
        onChange(current > pageNumber ? pageNumber : current, pageSizeValue);
      } else
        onChange(current, pageSizeValue);
  }, "handleSelect");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${styles$5.pagination} ${className}`, style, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { justify: "space-between", align: "middle", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Pagination$1,
      {
        ...props,
        disabled: isDisabled,
        simple: isSimple,
        showSizeChanger: isPageSizeChanger ? !1 : shouldShowSizeChanger,
        itemRender: itemRender ?? customItemRenderer
      }
    ) }),
    isPageSizeChanger && /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { margin: "0 8px" }, children: numberOfEntriesPerPage }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Select$1,
        {
          defaultValue: defaultPageSize,
          isFullContent: !1,
          options: getPaginationSizeOptions(pageSizeOptions),
          onSelect: handleSelect
        }
      )
    ] })
  ] }) });
}
__name(Pagination, "Pagination");
const useSegmentActions = /* @__PURE__ */ __name(({
  progressId,
  progressType,
  onSegmentSuccessClick,
  onSegmentFailureClick,
  onSegmentRestClick
}) => {
  useEffect(() => {
    if (onSegmentSuccessClick && progressType === "line") {
      const successEl = document.querySelector(`#${progressId} .ant-progress-success-bg`), handleSegementSuccessClick = /* @__PURE__ */ __name((e2) => {
        e2.stopPropagation(), onSegmentSuccessClick();
      }, "handleSegementSuccessClick");
      return successEl == null || successEl.addEventListener("click", handleSegementSuccessClick), () => {
        successEl == null || successEl.removeEventListener("click", handleSegementSuccessClick);
      };
    }
  }, [progressId, progressType, onSegmentSuccessClick]), useEffect(() => {
    if (onSegmentFailureClick && progressType === "line") {
      const failureEl = document.querySelector(`#${progressId} .ant-progress-bg-outer`), handleSegementFailureClick = /* @__PURE__ */ __name((e2) => {
        e2.stopPropagation(), onSegmentFailureClick();
      }, "handleSegementFailureClick");
      return failureEl == null || failureEl.addEventListener("click", handleSegementFailureClick), () => {
        failureEl == null || failureEl.removeEventListener("click", handleSegementFailureClick);
      };
    }
  }, [progressId, progressType, onSegmentFailureClick]), useEffect(() => {
    if (onSegmentRestClick) {
      const restEl = document.querySelector(`#${progressId} .ant-progress-inner`);
      return restEl == null || restEl.addEventListener("click", onSegmentRestClick), () => {
        restEl == null || restEl.removeEventListener("click", onSegmentRestClick);
      };
    }
  }, [progressId, progressType, onSegmentRestClick]);
}, "useSegmentActions"), useSegmentTooltips = /* @__PURE__ */ __name(({ progressId, progressType, segmentTooltips }) => {
  const [activeSegmentTooltipText, setActiveSegmentTooltipText] = useState("");
  return useEffect(() => {
    if (segmentTooltips && progressType === "line") {
      const successEl = document.querySelector(`#${progressId} .ant-progress-success-bg`), failureEl = document.querySelector(`#${progressId} .ant-progress-bg-outer`), restEl = document.querySelector(`#${progressId} .ant-progress-inner`), handleMouseEnterSuccess = /* @__PURE__ */ __name(() => setActiveSegmentTooltipText(segmentTooltips == null ? void 0 : segmentTooltips.success), "handleMouseEnterSuccess"), handleMouseEnterFailure = /* @__PURE__ */ __name(() => setActiveSegmentTooltipText(segmentTooltips == null ? void 0 : segmentTooltips.failure), "handleMouseEnterFailure"), handleMouseEnterRest = /* @__PURE__ */ __name(() => setActiveSegmentTooltipText(segmentTooltips == null ? void 0 : segmentTooltips.rest), "handleMouseEnterRest");
      return successEl == null || successEl.addEventListener("mouseenter", handleMouseEnterSuccess), failureEl == null || failureEl.addEventListener("mouseenter", handleMouseEnterFailure), restEl == null || restEl.addEventListener("mouseover", handleMouseEnterRest), () => {
        successEl == null || successEl.removeEventListener("mouseenter", handleMouseEnterSuccess), failureEl == null || failureEl.removeEventListener("mouseenter", handleMouseEnterFailure), restEl == null || restEl.removeEventListener("mouseover", handleMouseEnterRest);
      };
    }
  }, [progressId, progressType, segmentTooltips]), { activeSegmentTooltipText };
}, "useSegmentTooltips"), progressWrapper = "_progress-wrapper_1tzvo_1", progressCountInfo = "_progress-count-info_1tzvo_15", progressSuccessClickable = "_progress-success-clickable_1tzvo_29", progressFailureClickable = "_progress-failure-clickable_1tzvo_43", progressRestClickable = "_progress-rest-clickable_1tzvo_59", styles$4 = {
  progressWrapper,
  progressCountInfo,
  progressSuccessClickable,
  progressFailureClickable,
  progressRestClickable
}, calcProgress = /* @__PURE__ */ __name(({
  failureCount,
  failurePercent,
  successCount,
  successPercent,
  successStrokeColor,
  totalCount,
  withCounting
}) => {
  if (!withCounting)
    return {
      // Учитываем длинну success
      progressPercent: failurePercent + successPercent,
      progressSuccess: {
        percent: successPercent,
        strokeColor: successStrokeColor
      }
    };
  const enrichedFailureCount = failureCount + successCount;
  return {
    progressPercent: Math.round(enrichedFailureCount / totalCount * 100),
    progressSuccess: successCount ? {
      percent: Math.round(successCount / totalCount * 100),
      strokeColor: successStrokeColor
    } : void 0
  };
}, "calcProgress"), Progress = /* @__PURE__ */ __name(({
  failureCount = 1,
  failurePercent = 0,
  failureStrokeColor,
  isShowInfo,
  onSegmentFailureClick,
  onSegmentRestClick,
  onSegmentSuccessClick,
  segmentTooltips,
  successCount = 0,
  successPercent = 0,
  successStrokeColor,
  totalCount = 1,
  withCounting = !1,
  ...rest
}) => {
  const uuid2 = useMemo(() => `i${nanoid()}`, []), { progressPercent, progressSuccess } = calcProgress({
    failureCount,
    failurePercent,
    successCount,
    successPercent,
    successStrokeColor,
    totalCount,
    withCounting
  }), { activeSegmentTooltipText } = useSegmentTooltips({
    progressId: uuid2,
    progressType: rest.type,
    segmentTooltips
  });
  useSegmentActions({
    progressId: uuid2,
    progressType: rest.type,
    onSegmentSuccessClick,
    onSegmentFailureClick,
    onSegmentRestClick
  });
  const progressComponent = /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(styles$4.progressWrapper, {
        [styles$4.progressSuccessClickable]: onSegmentSuccessClick,
        [styles$4.progressFailureClickable]: onSegmentFailureClick,
        [styles$4.progressRestClickable]: onSegmentRestClick
      }),
      id: uuid2,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Progress$1,
          {
            ...rest,
            percent: progressPercent,
            showInfo: isShowInfo && !withCounting,
            strokeColor: failureStrokeColor,
            success: progressSuccess
          }
        ),
        withCounting && isShowInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$4.progressCountInfo, children: [
          failureCount + successCount,
          "/",
          totalCount
        ] })
      ]
    }
  );
  return segmentTooltips ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: activeSegmentTooltipText, children: progressComponent }) : progressComponent;
}, "Progress");
/*!
 * OverlayScrollbars
 * Version: 2.11.1
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */
const createCache = /* @__PURE__ */ __name((t2, n2) => {
  const { o: o2, i: s2, u: e2 } = t2;
  let c10 = o2, r2;
  const cacheUpdateContextual = /* @__PURE__ */ __name((t3, n3) => {
    const o3 = c10, l2 = t3, i2 = n3 || (s2 ? !s2(o3, l2) : o3 !== l2);
    return (i2 || e2) && (c10 = l2, r2 = o3), [c10, i2, r2];
  }, "cacheUpdateContextual");
  return [n2 ? /* @__PURE__ */ __name((t3) => cacheUpdateContextual(n2(c10, r2), t3), "cacheUpdateIsolated") : cacheUpdateContextual, /* @__PURE__ */ __name((t3) => [c10, !!t3, r2], "getCurrentCache")];
}, "createCache"), t = typeof window < "u" && typeof HTMLElement < "u" && !!window.document, n = t ? window : {}, o = Math.max, s = Math.min, e = Math.round, c = Math.abs, r = Math.sign, l = n.cancelAnimationFrame, i = n.requestAnimationFrame, a = n.setTimeout, u = n.clearTimeout, getApi = /* @__PURE__ */ __name((t2) => typeof n[t2] < "u" ? n[t2] : void 0, "getApi"), f = getApi("MutationObserver"), _ = getApi("IntersectionObserver"), d = getApi("ResizeObserver"), p = getApi("ScrollTimeline"), isUndefined = /* @__PURE__ */ __name((t2) => t2 === void 0, "isUndefined"), isNull = /* @__PURE__ */ __name((t2) => t2 === null, "isNull"), isNumber = /* @__PURE__ */ __name((t2) => typeof t2 == "number", "isNumber"), isString = /* @__PURE__ */ __name((t2) => typeof t2 == "string", "isString"), isBoolean = /* @__PURE__ */ __name((t2) => typeof t2 == "boolean", "isBoolean"), isFunction = /* @__PURE__ */ __name((t2) => typeof t2 == "function", "isFunction"), isArray = /* @__PURE__ */ __name((t2) => Array.isArray(t2), "isArray"), isObject = /* @__PURE__ */ __name((t2) => typeof t2 == "object" && !isArray(t2) && !isNull(t2), "isObject"), isArrayLike = /* @__PURE__ */ __name((t2) => {
  const n2 = !!t2 && t2.length, o2 = isNumber(n2) && n2 > -1 && n2 % 1 == 0;
  return isArray(t2) || !isFunction(t2) && o2 ? n2 > 0 && isObject(t2) ? n2 - 1 in t2 : !0 : !1;
}, "isArrayLike"), isPlainObject = /* @__PURE__ */ __name((t2) => !!t2 && t2.constructor === Object, "isPlainObject"), isHTMLElement = /* @__PURE__ */ __name((t2) => t2 instanceof HTMLElement, "isHTMLElement"), isElement = /* @__PURE__ */ __name((t2) => t2 instanceof Element, "isElement");
function each(t2, n2) {
  if (isArrayLike(t2))
    for (let o2 = 0; o2 < t2.length && n2(t2[o2], o2, t2) !== !1; o2++)
      ;
  else t2 && each(Object.keys(t2), (o2) => n2(t2[o2], o2, t2));
  return t2;
}
__name(each, "each");
const inArray = /* @__PURE__ */ __name((t2, n2) => t2.indexOf(n2) >= 0, "inArray"), concat = /* @__PURE__ */ __name((t2, n2) => t2.concat(n2), "concat"), push = /* @__PURE__ */ __name((t2, n2, o2) => (!isString(n2) && isArrayLike(n2) ? Array.prototype.push.apply(t2, n2) : t2.push(n2), t2), "push"), from = /* @__PURE__ */ __name((t2) => Array.from(t2 || []), "from"), createOrKeepArray = /* @__PURE__ */ __name((t2) => isArray(t2) ? t2 : !isString(t2) && isArrayLike(t2) ? from(t2) : [t2], "createOrKeepArray"), isEmptyArray = /* @__PURE__ */ __name((t2) => !!t2 && !t2.length, "isEmptyArray"), deduplicateArray = /* @__PURE__ */ __name((t2) => from(new Set(t2)), "deduplicateArray"), runEachAndClear = /* @__PURE__ */ __name((t2, n2, o2) => {
  each(t2, /* @__PURE__ */ __name((t3) => t3 ? t3.apply(void 0, n2 || []) : !0, "runFn")), o2 || (t2.length = 0);
}, "runEachAndClear"), v = "paddingTop", h = "paddingRight", g$1 = "paddingLeft", b = "paddingBottom", w = "marginLeft", y = "marginRight", S$1 = "marginBottom", m = "overflowX", O = "overflowY", $ = "width", C = "height", x = "visible", H = "hidden", E = "scroll", capitalizeFirstLetter = /* @__PURE__ */ __name((t2) => {
  const n2 = String(t2 || "");
  return n2 ? n2[0].toUpperCase() + n2.slice(1) : "";
}, "capitalizeFirstLetter"), equal = /* @__PURE__ */ __name((t2, n2, o2, s2) => {
  if (t2 && n2) {
    let s3 = !0;
    return each(o2, (o3) => {
      const e2 = t2[o3], c10 = n2[o3];
      e2 !== c10 && (s3 = !1);
    }), s3;
  }
  return !1;
}, "equal"), equalWH = /* @__PURE__ */ __name((t2, n2) => equal(t2, n2, ["w", "h"]), "equalWH"), equalXY = /* @__PURE__ */ __name((t2, n2) => equal(t2, n2, ["x", "y"]), "equalXY"), equalTRBL = /* @__PURE__ */ __name((t2, n2) => equal(t2, n2, ["t", "r", "b", "l"]), "equalTRBL"), noop = /* @__PURE__ */ __name(() => {
}, "noop"), bind = /* @__PURE__ */ __name((t2, ...n2) => t2.bind(0, ...n2), "bind"), selfClearTimeout = /* @__PURE__ */ __name((t2) => {
  let n2;
  const o2 = t2 ? a : i, s2 = t2 ? u : l;
  return [(e2) => {
    s2(n2), n2 = o2(() => e2(), isFunction(t2) ? t2() : t2);
  }, () => s2(n2)];
}, "selfClearTimeout"), debounce = /* @__PURE__ */ __name((t2, n2) => {
  const { _: o2, p: s2, v: e2, S: c10 } = n2 || {};
  let r2, f2, _2, d2, p2 = noop;
  const v2 = /* @__PURE__ */ __name(function(n3) {
    p2(), u(r2), d2 = r2 = f2 = void 0, p2 = noop, t2.apply(this, n3);
  }, "invokeFunctionToDebounce"), mergeParms = /* @__PURE__ */ __name((t3) => c10 && f2 ? c10(f2, t3) : t3, "mergeParms"), flush = /* @__PURE__ */ __name(() => {
    p2 !== noop && v2(mergeParms(_2) || _2);
  }, "flush"), h2 = /* @__PURE__ */ __name(function() {
    const t3 = from(arguments), n3 = isFunction(o2) ? o2() : o2;
    if (isNumber(n3) && n3 >= 0) {
      const o3 = isFunction(s2) ? s2() : s2, c12 = isNumber(o3) && o3 >= 0, h3 = n3 > 0 ? a : i, g2 = n3 > 0 ? u : l, w2 = mergeParms(t3) || t3, y2 = v2.bind(0, w2);
      let S2;
      p2(), e2 && !d2 ? (y2(), d2 = !0, S2 = h3(() => d2 = void 0, n3)) : (S2 = h3(y2, n3), c12 && !r2 && (r2 = a(flush, o3))), p2 = /* @__PURE__ */ __name(() => g2(S2), "p"), f2 = _2 = w2;
    } else
      v2(t3);
  }, "debouncedFn");
  return h2.m = flush, h2;
}, "debounce"), hasOwnProperty = /* @__PURE__ */ __name((t2, n2) => Object.prototype.hasOwnProperty.call(t2, n2), "hasOwnProperty"), keys = /* @__PURE__ */ __name((t2) => t2 ? Object.keys(t2) : [], "keys"), assignDeep = /* @__PURE__ */ __name((t2, n2, o2, s2, e2, c10, r2) => {
  const l2 = [n2, o2, s2, e2, c10, r2];
  return (typeof t2 != "object" || isNull(t2)) && !isFunction(t2) && (t2 = {}), each(l2, (n3) => {
    each(n3, (o3, s3) => {
      const e3 = n3[s3];
      if (t2 === e3)
        return !0;
      const c11 = isArray(e3);
      if (e3 && isPlainObject(e3)) {
        const n4 = t2[s3];
        let o4 = n4;
        c11 && !isArray(n4) ? o4 = [] : !c11 && !isPlainObject(n4) && (o4 = {}), t2[s3] = assignDeep(o4, e3);
      } else
        t2[s3] = c11 ? e3.slice() : e3;
    });
  }), t2;
}, "assignDeep"), removeUndefinedProperties = /* @__PURE__ */ __name((t2, n2) => each(assignDeep({}, t2), (t3, n3, o2) => {
  t3 === void 0 ? delete o2[n3] : t3 && isPlainObject(t3) && (o2[n3] = removeUndefinedProperties(t3));
}), "removeUndefinedProperties"), isEmptyObject = /* @__PURE__ */ __name((t2) => !keys(t2).length, "isEmptyObject"), capNumber = /* @__PURE__ */ __name((t2, n2, e2) => o(t2, s(n2, e2)), "capNumber"), getDomTokensArray = /* @__PURE__ */ __name((t2) => deduplicateArray((isArray(t2) ? t2 : (t2 || "").split(" ")).filter((t3) => t3)), "getDomTokensArray"), getAttr = /* @__PURE__ */ __name((t2, n2) => t2 && t2.getAttribute(n2), "getAttr"), hasAttr = /* @__PURE__ */ __name((t2, n2) => t2 && t2.hasAttribute(n2), "hasAttr"), setAttrs = /* @__PURE__ */ __name((t2, n2, o2) => {
  each(getDomTokensArray(n2), (n3) => {
    t2 && t2.setAttribute(n3, String(o2 || ""));
  });
}, "setAttrs"), removeAttrs = /* @__PURE__ */ __name((t2, n2) => {
  each(getDomTokensArray(n2), (n3) => t2 && t2.removeAttribute(n3));
}, "removeAttrs"), domTokenListAttr = /* @__PURE__ */ __name((t2, n2) => {
  const o2 = getDomTokensArray(getAttr(t2, n2)), s2 = bind(setAttrs, t2, n2), domTokenListOperation = /* @__PURE__ */ __name((t3, n3) => {
    const s3 = new Set(o2);
    return each(getDomTokensArray(t3), (t4) => {
      s3[n3](t4);
    }), from(s3).join(" ");
  }, "domTokenListOperation");
  return {
    O: /* @__PURE__ */ __name((t3) => s2(domTokenListOperation(t3, "delete")), "O"),
    $: /* @__PURE__ */ __name((t3) => s2(domTokenListOperation(t3, "add")), "$"),
    C: /* @__PURE__ */ __name((t3) => {
      const n3 = getDomTokensArray(t3);
      return n3.reduce((t4, n4) => t4 && o2.includes(n4), n3.length > 0);
    }, "C")
  };
}, "domTokenListAttr"), removeAttrClass = /* @__PURE__ */ __name((t2, n2, o2) => (domTokenListAttr(t2, n2).O(o2), bind(addAttrClass, t2, n2, o2)), "removeAttrClass"), addAttrClass = /* @__PURE__ */ __name((t2, n2, o2) => (domTokenListAttr(t2, n2).$(o2), bind(removeAttrClass, t2, n2, o2)), "addAttrClass"), addRemoveAttrClass = /* @__PURE__ */ __name((t2, n2, o2, s2) => (s2 ? addAttrClass : removeAttrClass)(t2, n2, o2), "addRemoveAttrClass"), hasAttrClass = /* @__PURE__ */ __name((t2, n2, o2) => domTokenListAttr(t2, n2).C(o2), "hasAttrClass"), createDomTokenListClass = /* @__PURE__ */ __name((t2) => domTokenListAttr(t2, "class"), "createDomTokenListClass"), removeClass = /* @__PURE__ */ __name((t2, n2) => {
  createDomTokenListClass(t2).O(n2);
}, "removeClass"), addClass = /* @__PURE__ */ __name((t2, n2) => (createDomTokenListClass(t2).$(n2), bind(removeClass, t2, n2)), "addClass"), find = /* @__PURE__ */ __name((t2, n2) => {
  const o2 = n2 ? isElement(n2) && n2 : document;
  return o2 ? from(o2.querySelectorAll(t2)) : [];
}, "find"), findFirst = /* @__PURE__ */ __name((t2, n2) => {
  const o2 = n2 ? isElement(n2) && n2 : document;
  return o2 && o2.querySelector(t2);
}, "findFirst"), is = /* @__PURE__ */ __name((t2, n2) => isElement(t2) && t2.matches(n2), "is"), isBodyElement = /* @__PURE__ */ __name((t2) => is(t2, "body"), "isBodyElement"), contents = /* @__PURE__ */ __name((t2) => t2 ? from(t2.childNodes) : [], "contents"), parent = /* @__PURE__ */ __name((t2) => t2 && t2.parentElement, "parent"), closest = /* @__PURE__ */ __name((t2, n2) => isElement(t2) && t2.closest(n2), "closest"), getFocusedElement = /* @__PURE__ */ __name((t2) => document.activeElement, "getFocusedElement"), liesBetween = /* @__PURE__ */ __name((t2, n2, o2) => {
  const s2 = closest(t2, n2), e2 = t2 && findFirst(o2, s2), c10 = closest(e2, n2) === s2;
  return s2 && e2 ? s2 === t2 || e2 === t2 || c10 && closest(closest(t2, o2), n2) !== s2 : !1;
}, "liesBetween"), removeElements = /* @__PURE__ */ __name((t2) => {
  each(createOrKeepArray(t2), (t3) => {
    const n2 = parent(t3);
    t3 && n2 && n2.removeChild(t3);
  });
}, "removeElements"), appendChildren = /* @__PURE__ */ __name((t2, n2) => bind(removeElements, t2 && n2 && each(createOrKeepArray(n2), (n3) => {
  n3 && t2.appendChild(n3);
})), "appendChildren");
let z;
const getTrustedTypePolicy = /* @__PURE__ */ __name(() => z, "getTrustedTypePolicy"), setTrustedTypePolicy = /* @__PURE__ */ __name((t2) => {
  z = t2;
}, "setTrustedTypePolicy"), createDiv = /* @__PURE__ */ __name((t2) => {
  const n2 = document.createElement("div");
  return setAttrs(n2, "class", t2), n2;
}, "createDiv"), createDOM = /* @__PURE__ */ __name((t2) => {
  const n2 = createDiv(), o2 = getTrustedTypePolicy(), s2 = t2.trim();
  return n2.innerHTML = o2 ? o2.createHTML(s2) : s2, each(contents(n2), (t3) => removeElements(t3));
}, "createDOM"), getCSSVal = /* @__PURE__ */ __name((t2, n2) => t2.getPropertyValue(n2) || t2[n2] || "", "getCSSVal"), validFiniteNumber = /* @__PURE__ */ __name((t2) => {
  const n2 = t2 || 0;
  return isFinite(n2) ? n2 : 0;
}, "validFiniteNumber"), parseToZeroOrNumber = /* @__PURE__ */ __name((t2) => validFiniteNumber(parseFloat(t2 || "")), "parseToZeroOrNumber"), roundCssNumber = /* @__PURE__ */ __name((t2) => Math.round(t2 * 1e4) / 1e4, "roundCssNumber"), numberToCssPx = /* @__PURE__ */ __name((t2) => `${roundCssNumber(validFiniteNumber(t2))}px`, "numberToCssPx");
function setStyles(t2, n2) {
  t2 && n2 && each(n2, (n3, o2) => {
    try {
      const s2 = t2.style, e2 = isNull(n3) || isBoolean(n3) ? "" : isNumber(n3) ? numberToCssPx(n3) : n3;
      o2.indexOf("--") === 0 ? s2.setProperty(o2, e2) : s2[o2] = e2;
    } catch {
    }
  });
}
__name(setStyles, "setStyles");
function getStyles(t2, o2, s2) {
  const e2 = isString(o2);
  let c10 = e2 ? "" : {};
  if (t2) {
    const r2 = n.getComputedStyle(t2, s2) || t2.style;
    c10 = e2 ? getCSSVal(r2, o2) : from(o2).reduce((t3, n2) => (t3[n2] = getCSSVal(r2, n2), t3), c10);
  }
  return c10;
}
__name(getStyles, "getStyles");
const topRightBottomLeft = /* @__PURE__ */ __name((t2, n2, o2) => {
  const s2 = n2 ? `${n2}-` : "", e2 = o2 ? `-${o2}` : "", c10 = `${s2}top${e2}`, r2 = `${s2}right${e2}`, l2 = `${s2}bottom${e2}`, i2 = `${s2}left${e2}`, a2 = getStyles(t2, [c10, r2, l2, i2]);
  return {
    t: parseToZeroOrNumber(a2[c10]),
    r: parseToZeroOrNumber(a2[r2]),
    b: parseToZeroOrNumber(a2[l2]),
    l: parseToZeroOrNumber(a2[i2])
  };
}, "topRightBottomLeft"), getTrasformTranslateValue = /* @__PURE__ */ __name((t2, n2) => `translate${isObject(t2) ? `(${t2.x},${t2.y})` : `${n2 ? "X" : "Y"}(${t2})`}`, "getTrasformTranslateValue"), elementHasDimensions = /* @__PURE__ */ __name((t2) => !!(t2.offsetWidth || t2.offsetHeight || t2.getClientRects().length), "elementHasDimensions"), I = {
  w: 0,
  h: 0
}, getElmWidthHeightProperty = /* @__PURE__ */ __name((t2, n2) => n2 ? {
  w: n2[`${t2}Width`],
  h: n2[`${t2}Height`]
} : I, "getElmWidthHeightProperty"), getWindowSize = /* @__PURE__ */ __name((t2) => getElmWidthHeightProperty("inner", t2 || n), "getWindowSize"), A = bind(getElmWidthHeightProperty, "offset"), D = bind(getElmWidthHeightProperty, "client"), M = bind(getElmWidthHeightProperty, "scroll"), getFractionalSize = /* @__PURE__ */ __name((t2) => {
  const n2 = parseFloat(getStyles(t2, $)) || 0, o2 = parseFloat(getStyles(t2, C)) || 0;
  return {
    w: n2 - e(n2),
    h: o2 - e(o2)
  };
}, "getFractionalSize"), getBoundingClientRect = /* @__PURE__ */ __name((t2) => t2.getBoundingClientRect(), "getBoundingClientRect"), hasDimensions = /* @__PURE__ */ __name((t2) => !!t2 && elementHasDimensions(t2), "hasDimensions"), domRectHasDimensions = /* @__PURE__ */ __name((t2) => !!(t2 && (t2[C] || t2[$])), "domRectHasDimensions"), domRectAppeared = /* @__PURE__ */ __name((t2, n2) => {
  const o2 = domRectHasDimensions(t2);
  return !domRectHasDimensions(n2) && o2;
}, "domRectAppeared"), removeEventListener = /* @__PURE__ */ __name((t2, n2, o2, s2) => {
  each(getDomTokensArray(n2), (n3) => {
    t2 && t2.removeEventListener(n3, o2, s2);
  });
}, "removeEventListener"), addEventListener = /* @__PURE__ */ __name((t2, n2, o2, s2) => {
  var e2;
  const c10 = (e2 = s2 && s2.H) != null ? e2 : !0, r2 = s2 && s2.I || !1, l2 = s2 && s2.A || !1, i2 = {
    passive: c10,
    capture: r2
  };
  return bind(runEachAndClear, getDomTokensArray(n2).map((n3) => {
    const s3 = l2 ? (e3) => {
      removeEventListener(t2, n3, s3, r2), o2 && o2(e3);
    } : o2;
    return t2 && t2.addEventListener(n3, s3, i2), bind(removeEventListener, t2, n3, s3, r2);
  }));
}, "addEventListener"), stopPropagation = /* @__PURE__ */ __name((t2) => t2.stopPropagation(), "stopPropagation"), preventDefault = /* @__PURE__ */ __name((t2) => t2.preventDefault(), "preventDefault"), stopAndPrevent = /* @__PURE__ */ __name((t2) => stopPropagation(t2) || preventDefault(t2), "stopAndPrevent"), scrollElementTo = /* @__PURE__ */ __name((t2, n2) => {
  const { x: o2, y: s2 } = isNumber(n2) ? {
    x: n2,
    y: n2
  } : n2 || {};
  isNumber(o2) && (t2.scrollLeft = o2), isNumber(s2) && (t2.scrollTop = s2);
}, "scrollElementTo"), getElementScroll = /* @__PURE__ */ __name((t2) => ({
  x: t2.scrollLeft,
  y: t2.scrollTop
}), "getElementScroll"), getZeroScrollCoordinates = /* @__PURE__ */ __name(() => ({
  D: {
    x: 0,
    y: 0
  },
  M: {
    x: 0,
    y: 0
  }
}), "getZeroScrollCoordinates"), sanitizeScrollCoordinates = /* @__PURE__ */ __name((t2, n2) => {
  const { D: o2, M: s2 } = t2, { w: e2, h: l2 } = n2, sanitizeAxis = /* @__PURE__ */ __name((t3, n3, o3) => {
    let s3 = r(t3) * o3, e3 = r(n3) * o3;
    if (s3 === e3) {
      const o4 = c(t3), r2 = c(n3);
      e3 = o4 > r2 ? 0 : e3, s3 = o4 < r2 ? 0 : s3;
    }
    return s3 = s3 === e3 ? 0 : s3, [s3 + 0, e3 + 0];
  }, "sanitizeAxis"), [i2, a2] = sanitizeAxis(o2.x, s2.x, e2), [u2, f2] = sanitizeAxis(o2.y, s2.y, l2);
  return {
    D: {
      x: i2,
      y: u2
    },
    M: {
      x: a2,
      y: f2
    }
  };
}, "sanitizeScrollCoordinates"), isDefaultDirectionScrollCoordinates = /* @__PURE__ */ __name(({ D: t2, M: n2 }) => {
  const getAxis = /* @__PURE__ */ __name((t3, n3) => t3 === 0 && t3 <= n3, "getAxis");
  return {
    x: getAxis(t2.x, n2.x),
    y: getAxis(t2.y, n2.y)
  };
}, "isDefaultDirectionScrollCoordinates"), getScrollCoordinatesPercent = /* @__PURE__ */ __name(({ D: t2, M: n2 }, o2) => {
  const getAxis = /* @__PURE__ */ __name((t3, n3, o3) => capNumber(0, 1, (t3 - o3) / (t3 - n3) || 0), "getAxis");
  return {
    x: getAxis(t2.x, n2.x, o2.x),
    y: getAxis(t2.y, n2.y, o2.y)
  };
}, "getScrollCoordinatesPercent"), focusElement = /* @__PURE__ */ __name((t2) => {
  t2 && t2.focus && t2.focus({
    preventScroll: !0
  });
}, "focusElement"), manageListener = /* @__PURE__ */ __name((t2, n2) => {
  each(createOrKeepArray(n2), t2);
}, "manageListener"), createEventListenerHub = /* @__PURE__ */ __name((t2) => {
  const n2 = /* @__PURE__ */ new Map(), removeEvent = /* @__PURE__ */ __name((t3, o2) => {
    if (t3) {
      const s2 = n2.get(t3);
      manageListener((t4) => {
        s2 && s2[t4 ? "delete" : "clear"](t4);
      }, o2);
    } else
      n2.forEach((t4) => {
        t4.clear();
      }), n2.clear();
  }, "removeEvent"), addEvent = /* @__PURE__ */ __name((t3, o2) => {
    if (isString(t3)) {
      const s3 = n2.get(t3) || /* @__PURE__ */ new Set();
      return n2.set(t3, s3), manageListener((t4) => {
        isFunction(t4) && s3.add(t4);
      }, o2), bind(removeEvent, t3, o2);
    }
    isBoolean(o2) && o2 && removeEvent();
    const s2 = keys(t3), e2 = [];
    return each(s2, (n3) => {
      const o3 = t3[n3];
      o3 && push(e2, addEvent(n3, o3));
    }), bind(runEachAndClear, e2);
  }, "addEvent"), triggerEvent = /* @__PURE__ */ __name((t3, o2) => {
    each(from(n2.get(t3)), (t4) => {
      o2 && !isEmptyArray(o2) ? t4.apply(0, o2) : t4();
    });
  }, "triggerEvent");
  return addEvent(t2 || {}), [addEvent, removeEvent, triggerEvent];
}, "createEventListenerHub"), T = {}, k = {}, addPlugins = /* @__PURE__ */ __name((t2) => {
  each(t2, (t3) => each(t3, (n2, o2) => {
    T[o2] = t3[o2];
  }));
}, "addPlugins"), registerPluginModuleInstances = /* @__PURE__ */ __name((t2, n2, o2) => keys(t2).map((s2) => {
  const { static: e2, instance: c10 } = t2[s2], [r2, l2, i2] = o2 || [], a2 = o2 ? c10 : e2;
  if (a2) {
    const t3 = o2 ? a2(r2, l2, n2) : a2(n2);
    return (i2 || k)[s2] = t3;
  }
}), "registerPluginModuleInstances"), getStaticPluginModuleInstance = /* @__PURE__ */ __name((t2) => k[t2], "getStaticPluginModuleInstance"), R = "__osOptionsValidationPlugin", V = "data-overlayscrollbars", L = "os-environment", U = `${L}-scrollbar-hidden`, P = `${V}-initialize`, N = "noClipping", q$1 = `${V}-body`, B = V, F$1 = "host", j = `${V}-viewport`, X = m, Y = O, W = "arrange", J = "measuring", G = "scrolling", K = "scrollbarHidden", Q = "noContent", Z = `${V}-padding`, tt = `${V}-content`, nt = "os-size-observer", ot = `${nt}-appear`, st = `${nt}-listener`, lt = "os-trinsic-observer", it = "os-theme-none", at = "os-scrollbar", ut = `${at}-rtl`, ft = `${at}-horizontal`, _t = `${at}-vertical`, dt = `${at}-track`, pt = `${at}-handle`, vt = `${at}-visible`, ht = `${at}-cornerless`, gt = `${at}-interaction`, bt = `${at}-unusable`, wt = `${at}-auto-hide`, yt = `${wt}-hidden`, St = `${at}-wheel`, mt = `${dt}-interactive`, Ot = `${pt}-interactive`, $t = "__osSizeObserverPlugin", getShowNativeOverlaidScrollbars = /* @__PURE__ */ __name((t2, n2) => {
  const { T: o2 } = n2, [s2, e2] = t2("showNativeOverlaidScrollbars");
  return [s2 && o2.x && o2.y, e2];
}, "getShowNativeOverlaidScrollbars"), overflowIsVisible = /* @__PURE__ */ __name((t2) => t2.indexOf(x) === 0, "overflowIsVisible"), createViewportOverflowState = /* @__PURE__ */ __name((t2, n2) => {
  const getAxisOverflowStyle = /* @__PURE__ */ __name((t3, n3, o3, s2) => {
    const e2 = t3 === x ? H : t3.replace(`${x}-`, ""), c10 = overflowIsVisible(t3), r2 = overflowIsVisible(o3);
    return !n3 && !s2 ? H : c10 && r2 ? x : c10 ? n3 && s2 ? e2 : n3 ? x : H : n3 ? e2 : r2 && s2 ? x : H;
  }, "getAxisOverflowStyle"), o2 = {
    x: getAxisOverflowStyle(n2.x, t2.x, n2.y, t2.y),
    y: getAxisOverflowStyle(n2.y, t2.y, n2.x, t2.x)
  };
  return {
    k: o2,
    R: {
      x: o2.x === E,
      y: o2.y === E
    }
  };
}, "createViewportOverflowState"), xt = "__osScrollbarsHidingPlugin", Et = "__osClickScrollPlugin", opsStringify = /* @__PURE__ */ __name((t2) => JSON.stringify(t2, (t3, n2) => {
  if (isFunction(n2))
    throw 0;
  return n2;
}), "opsStringify"), getPropByPath = /* @__PURE__ */ __name((t2, n2) => t2 ? `${n2}`.split(".").reduce((t3, n3) => t3 && hasOwnProperty(t3, n3) ? t3[n3] : void 0, t2) : void 0, "getPropByPath"), It = {
  paddingAbsolute: !1,
  showNativeOverlaidScrollbars: !1,
  update: {
    elementEvents: [["img", "load"]],
    debounce: [0, 33],
    attributes: null,
    ignoreMutation: null
  },
  overflow: {
    x: "scroll",
    y: "scroll"
  },
  scrollbars: {
    theme: "os-theme-dark",
    visibility: "auto",
    autoHide: "never",
    autoHideDelay: 1300,
    autoHideSuspend: !1,
    dragScroll: !0,
    clickScroll: !1,
    pointers: ["mouse", "touch", "pen"]
  }
}, getOptionsDiff = /* @__PURE__ */ __name((t2, n2) => {
  const o2 = {}, s2 = concat(keys(n2), keys(t2));
  return each(s2, (s3) => {
    const e2 = t2[s3], c10 = n2[s3];
    if (isObject(e2) && isObject(c10))
      assignDeep(o2[s3] = {}, getOptionsDiff(e2, c10)), isEmptyObject(o2[s3]) && delete o2[s3];
    else if (hasOwnProperty(n2, s3) && c10 !== e2) {
      let t3 = !0;
      if (isArray(e2) || isArray(c10))
        try {
          opsStringify(e2) === opsStringify(c10) && (t3 = !1);
        } catch {
        }
      t3 && (o2[s3] = c10);
    }
  }), o2;
}, "getOptionsDiff"), createOptionCheck = /* @__PURE__ */ __name((t2, n2, o2) => (s2) => [getPropByPath(t2, s2), o2 || getPropByPath(n2, s2) !== void 0], "createOptionCheck");
let At;
const getNonce = /* @__PURE__ */ __name(() => At, "getNonce"), setNonce = /* @__PURE__ */ __name((t2) => {
  At = t2;
}, "setNonce");
let Dt;
const createEnvironment = /* @__PURE__ */ __name(() => {
  const getNativeScrollbarSize = /* @__PURE__ */ __name((t3, n2, o3) => {
    appendChildren(document.body, t3), appendChildren(document.body, t3);
    const s3 = D(t3), e3 = A(t3), c11 = getFractionalSize(n2);
    return o3 && removeElements(t3), {
      x: e3.h - s3.h + c11.h,
      y: e3.w - s3.w + c11.w
    };
  }, "getNativeScrollbarSize"), getNativeScrollbarsHiding = /* @__PURE__ */ __name((t3) => {
    let n2 = !1;
    const o3 = addClass(t3, U);
    try {
      n2 = getStyles(t3, "scrollbar-width") === "none" || getStyles(t3, "display", "::-webkit-scrollbar") === "none";
    } catch {
    }
    return o3(), n2;
  }, "getNativeScrollbarsHiding"), t2 = `.${L}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${L} div{width:200%;height:200%;margin:10px 0}.${U}{scrollbar-width:none!important}.${U}::-webkit-scrollbar,.${U}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`, s2 = createDOM(`<div class="${L}"><div></div><style>${t2}</style></div>`)[0], e2 = s2.firstChild, c10 = s2.lastChild, r2 = getNonce();
  r2 && (c10.nonce = r2);
  const [l2, , i2] = createEventListenerHub(), [a2, u2] = createCache({
    o: getNativeScrollbarSize(s2, e2),
    i: equalXY
  }, bind(getNativeScrollbarSize, s2, e2, !0)), [f2] = u2(), _2 = getNativeScrollbarsHiding(s2), d2 = {
    x: f2.x === 0,
    y: f2.y === 0
  }, v2 = {
    elements: {
      host: null,
      padding: !_2,
      viewport: /* @__PURE__ */ __name((t3) => _2 && isBodyElement(t3) && t3, "viewport"),
      content: !1
    },
    scrollbars: {
      slot: !0
    },
    cancel: {
      nativeScrollbarsOverlaid: !1,
      body: null
    }
  }, h2 = assignDeep({}, It), g2 = bind(assignDeep, {}, h2), b2 = bind(assignDeep, {}, v2), w2 = {
    N: f2,
    T: d2,
    P: _2,
    G: !!p,
    K: bind(l2, "r"),
    Z: b2,
    tt: /* @__PURE__ */ __name((t3) => assignDeep(v2, t3) && b2(), "tt"),
    nt: g2,
    ot: /* @__PURE__ */ __name((t3) => assignDeep(h2, t3) && g2(), "ot"),
    st: assignDeep({}, v2),
    et: assignDeep({}, h2)
  };
  if (removeAttrs(s2, "style"), removeElements(s2), addEventListener(n, "resize", () => {
    i2("r", []);
  }), isFunction(n.matchMedia) && !_2 && (!d2.x || !d2.y)) {
    const addZoomListener = /* @__PURE__ */ __name((t3) => {
      const o3 = n.matchMedia(`(resolution: ${n.devicePixelRatio}dppx)`);
      addEventListener(o3, "change", () => {
        t3(), addZoomListener(t3);
      }, {
        A: !0
      });
    }, "addZoomListener");
    addZoomListener(() => {
      const [t3, n2] = a2();
      assignDeep(w2.N, t3), i2("r", [n2]);
    });
  }
  return w2;
}, "createEnvironment"), getEnvironment = /* @__PURE__ */ __name(() => (Dt || (Dt = createEnvironment()), Dt), "getEnvironment"), createEventContentChange = /* @__PURE__ */ __name((t2, n2, o2) => {
  let s2 = !1;
  const e2 = o2 ? /* @__PURE__ */ new WeakMap() : !1, destroy2 = /* @__PURE__ */ __name(() => {
    s2 = !0;
  }, "destroy"), updateElements = /* @__PURE__ */ __name((c10) => {
    if (e2 && o2) {
      const r2 = o2.map((n3) => {
        const [o3, s3] = n3 || [];
        return [s3 && o3 ? (c10 || find)(o3, t2) : [], s3];
      });
      each(r2, (o3) => each(o3[0], (c11) => {
        const r3 = o3[1], l2 = e2.get(c11) || [];
        if (t2.contains(c11) && r3) {
          const t3 = addEventListener(c11, r3, (o4) => {
            s2 ? (t3(), e2.delete(c11)) : n2(o4);
          });
          e2.set(c11, push(l2, t3));
        } else
          runEachAndClear(l2), e2.delete(c11);
      }));
    }
  }, "updateElements");
  return updateElements(), [destroy2, updateElements];
}, "createEventContentChange"), createDOMObserver = /* @__PURE__ */ __name((t2, n2, o2, s2) => {
  let e2 = !1;
  const { ct: c10, rt: r2, lt: l2, it: i2, ut: a2, ft: u2 } = s2 || {}, _2 = debounce(() => e2 && o2(!0), {
    _: 33,
    p: 99
  }), [d2, p2] = createEventContentChange(t2, _2, l2), v2 = c10 || [], h2 = r2 || [], g2 = concat(v2, h2), observerCallback = /* @__PURE__ */ __name((e3, c11) => {
    if (!isEmptyArray(c11)) {
      const r3 = a2 || noop, l3 = u2 || noop, f2 = [], _3 = [];
      let d3 = !1, v3 = !1;
      if (each(c11, (o3) => {
        const { attributeName: e4, target: c12, type: a3, oldValue: u3, addedNodes: p3, removedNodes: g3 } = o3, b3 = a3 === "attributes", w2 = a3 === "childList", y2 = t2 === c12, S2 = b3 && e4, m2 = S2 && getAttr(c12, e4 || ""), O2 = isString(m2) ? m2 : null, $2 = S2 && u3 !== O2, C2 = inArray(h2, e4) && $2;
        if (n2 && (w2 || !y2)) {
          const n3 = b3 && $2, a4 = n3 && i2 && is(c12, i2), d4 = (a4 ? !r3(c12, e4, u3, O2) : !b3 || n3) && !l3(o3, !!a4, t2, s2);
          each(p3, (t3) => push(f2, t3)), each(g3, (t3) => push(f2, t3)), v3 = v3 || d4;
        }
        !n2 && y2 && $2 && !r3(c12, e4, u3, O2) && (push(_3, e4), d3 = d3 || C2);
      }), p2((t3) => deduplicateArray(f2).reduce((n3, o3) => (push(n3, find(t3, o3)), is(o3, t3) ? push(n3, o3) : n3), [])), n2)
        return !e3 && v3 && o2(!1), [!1];
      if (!isEmptyArray(_3) || d3) {
        const t3 = [deduplicateArray(_3), d3];
        return e3 || o2.apply(0, t3), t3;
      }
    }
  }, "observerCallback"), b2 = new f(bind(observerCallback, !1));
  return [() => (b2.observe(t2, {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: g2,
    subtree: n2,
    childList: n2,
    characterData: n2
  }), e2 = !0, () => {
    e2 && (d2(), b2.disconnect(), e2 = !1);
  }), () => {
    if (e2)
      return _2.m(), observerCallback(!0, b2.takeRecords());
  }];
}, "createDOMObserver");
let Mt = null;
const createSizeObserver = /* @__PURE__ */ __name((t2, n2, o2) => {
  const { _t: s2 } = o2 || {}, e2 = getStaticPluginModuleInstance($t), [c10] = createCache({
    o: !1,
    u: !0
  });
  return () => {
    const o3 = [], l2 = createDOM(`<div class="${nt}"><div class="${st}"></div></div>`)[0], i2 = l2.firstChild, onSizeChangedCallbackProxy = /* @__PURE__ */ __name((t3) => {
      const o4 = t3 instanceof ResizeObserverEntry;
      let s3 = !1, e3 = !1;
      if (o4) {
        const [n3, , o5] = c10(t3.contentRect), r3 = domRectHasDimensions(n3);
        e3 = domRectAppeared(n3, o5), s3 = !e3 && !r3;
      } else
        e3 = t3 === !0;
      s3 || n2({
        dt: !0,
        _t: e3
      });
    }, "onSizeChangedCallbackProxy");
    if (d) {
      if (!isBoolean(Mt)) {
        const n4 = new d(noop);
        n4.observe(t2, {
          get box() {
            Mt = !0;
          }
        }), Mt = Mt || !1, n4.disconnect();
      }
      const n3 = debounce(onSizeChangedCallbackProxy, {
        _: 0,
        p: 0
      }), resizeObserverCallback = /* @__PURE__ */ __name((t3) => n3(t3.pop()), "resizeObserverCallback"), s3 = new d(resizeObserverCallback);
      if (s3.observe(Mt ? t2 : i2), push(o3, [() => s3.disconnect(), !Mt && appendChildren(t2, l2)]), Mt) {
        const n4 = new d(resizeObserverCallback);
        n4.observe(t2, {
          box: "border-box"
        }), push(o3, () => n4.disconnect());
      }
    } else if (e2) {
      const [n3, c11] = e2(i2, onSizeChangedCallbackProxy, s2);
      push(o3, concat([addClass(l2, ot), addEventListener(l2, "animationstart", n3), appendChildren(t2, l2)], c11));
    } else
      return noop;
    return bind(runEachAndClear, o3);
  };
}, "createSizeObserver"), createTrinsicObserver = /* @__PURE__ */ __name((t2, n2) => {
  let o2;
  const isHeightIntrinsic = /* @__PURE__ */ __name((t3) => t3.h === 0 || t3.isIntersecting || t3.intersectionRatio > 0, "isHeightIntrinsic"), s2 = createDiv(lt), [e2] = createCache({
    o: !1
  }), triggerOnTrinsicChangedCallback = /* @__PURE__ */ __name((t3, o3) => {
    if (t3) {
      const s3 = e2(isHeightIntrinsic(t3)), [, c10] = s3;
      return c10 && !o3 && n2(s3) && [s3];
    }
  }, "triggerOnTrinsicChangedCallback"), intersectionObserverCallback = /* @__PURE__ */ __name((t3, n3) => triggerOnTrinsicChangedCallback(n3.pop(), t3), "intersectionObserverCallback");
  return [() => {
    const n3 = [];
    if (_)
      o2 = new _(bind(intersectionObserverCallback, !1), {
        root: t2
      }), o2.observe(s2), push(n3, () => {
        o2.disconnect();
      });
    else {
      const onSizeChanged = /* @__PURE__ */ __name(() => {
        const t3 = A(s2);
        triggerOnTrinsicChangedCallback(t3);
      }, "onSizeChanged");
      push(n3, createSizeObserver(s2, onSizeChanged)()), onSizeChanged();
    }
    return bind(runEachAndClear, push(n3, appendChildren(t2, s2)));
  }, () => o2 && intersectionObserverCallback(!0, o2.takeRecords())];
}, "createTrinsicObserver"), createObserversSetup = /* @__PURE__ */ __name((t2, n2, o2, s2) => {
  let e2, c10, r2, l2, i2, a2;
  const u2 = `[${B}]`, f2 = `[${j}]`, _2 = ["id", "class", "style", "open", "wrap", "cols", "rows"], { vt: p2, ht: v2, U: h2, gt: g2, bt: b2, L: w2, wt: y2, yt: S2, St: m2, Ot: O2 } = t2, getDirectionIsRTL = /* @__PURE__ */ __name((t3) => getStyles(t3, "direction") === "rtl", "getDirectionIsRTL"), $2 = {
    $t: !1,
    F: getDirectionIsRTL(p2)
  }, C2 = getEnvironment(), x2 = getStaticPluginModuleInstance(xt), [H2] = createCache({
    i: equalWH,
    o: {
      w: 0,
      h: 0
    }
  }, () => {
    const s3 = x2 && x2.V(t2, n2, $2, C2, o2).W, c11 = !(y2 && w2) && hasAttrClass(v2, B, N), r3 = !w2 && S2(W), l3 = r3 && getElementScroll(g2), i3 = l3 && O2(), a3 = m2(J, c11), u3 = r3 && s3 && s3()[0], f3 = M(h2), _3 = getFractionalSize(h2);
    return u3 && u3(), scrollElementTo(g2, l3), i3 && i3(), c11 && a3(), {
      w: f3.w + _3.w,
      h: f3.h + _3.h
    };
  }), E2 = debounce(s2, {
    _: /* @__PURE__ */ __name(() => e2, "_"),
    p: /* @__PURE__ */ __name(() => c10, "p"),
    S(t3, n3) {
      const [o3] = t3, [s3] = n3;
      return [concat(keys(o3), keys(s3)).reduce((t4, n4) => (t4[n4] = o3[n4] || s3[n4], t4), {})];
    }
  }), setDirection = /* @__PURE__ */ __name((t3) => {
    const n3 = getDirectionIsRTL(p2);
    assignDeep(t3, {
      Ct: a2 !== n3
    }), assignDeep($2, {
      F: n3
    }), a2 = n3;
  }, "setDirection"), onTrinsicChanged = /* @__PURE__ */ __name((t3, n3) => {
    const [o3, e3] = t3, c11 = {
      xt: e3
    };
    return assignDeep($2, {
      $t: o3
    }), n3 || s2(c11), c11;
  }, "onTrinsicChanged"), onSizeChanged = /* @__PURE__ */ __name(({ dt: t3, _t: n3 }) => {
    const e3 = !(t3 && !n3) && C2.P ? E2 : s2, c11 = {
      dt: t3 || n3,
      _t: n3
    };
    setDirection(c11), e3(c11);
  }, "onSizeChanged"), onContentMutation = /* @__PURE__ */ __name((t3, n3) => {
    const [, o3] = H2(), e3 = {
      Ht: o3
    };
    return setDirection(e3), o3 && !n3 && (t3 ? s2 : E2)(e3), e3;
  }, "onContentMutation"), onHostMutation = /* @__PURE__ */ __name((t3, n3, o3) => {
    const s3 = {
      Et: n3
    };
    return setDirection(s3), n3 && !o3 && E2(s3), s3;
  }, "onHostMutation"), [z2, I2] = b2 ? createTrinsicObserver(v2, onTrinsicChanged) : [], A2 = !w2 && createSizeObserver(v2, onSizeChanged, {
    _t: !0
  }), [D2, T2] = createDOMObserver(v2, !1, onHostMutation, {
    rt: _2,
    ct: _2
  }), k2 = w2 && d && new d((t3) => {
    const n3 = t3[t3.length - 1].contentRect;
    onSizeChanged({
      dt: !0,
      _t: domRectAppeared(n3, i2)
    }), i2 = n3;
  }), R2 = debounce(() => {
    const [, t3] = H2();
    s2({
      Ht: t3
    });
  }, {
    _: 222,
    v: !0
  });
  return [() => {
    k2 && k2.observe(v2);
    const t3 = A2 && A2(), n3 = z2 && z2(), o3 = D2(), s3 = C2.K((t4) => {
      t4 ? E2({
        zt: t4
      }) : R2();
    });
    return () => {
      k2 && k2.disconnect(), t3 && t3(), n3 && n3(), l2 && l2(), o3(), s3();
    };
  }, ({ It: t3, At: n3, Dt: o3 }) => {
    const s3 = {}, [i3] = t3("update.ignoreMutation"), [a3, d2] = t3("update.attributes"), [p3, v3] = t3("update.elementEvents"), [g3, y3] = t3("update.debounce"), S3 = v3 || d2, m3 = n3 || o3, ignoreMutationFromOptions = /* @__PURE__ */ __name((t4) => isFunction(i3) && i3(t4), "ignoreMutationFromOptions");
    if (S3) {
      r2 && r2(), l2 && l2();
      const [t4, n4] = createDOMObserver(b2 || h2, !0, onContentMutation, {
        ct: concat(_2, a3 || []),
        lt: p3,
        it: u2,
        ft: /* @__PURE__ */ __name((t5, n5) => {
          const { target: o4, attributeName: s4 } = t5;
          return (!n5 && s4 && !w2 ? liesBetween(o4, u2, f2) : !1) || !!closest(o4, `.${at}`) || !!ignoreMutationFromOptions(t5);
        }, "ft")
      });
      l2 = t4(), r2 = n4;
    }
    if (y3)
      if (E2.m(), isArray(g3)) {
        const t4 = g3[0], n4 = g3[1];
        e2 = isNumber(t4) && t4, c10 = isNumber(n4) && n4;
      } else isNumber(g3) ? (e2 = g3, c10 = !1) : (e2 = !1, c10 = !1);
    if (m3) {
      const t4 = T2(), n4 = I2 && I2(), o4 = r2 && r2();
      t4 && assignDeep(s3, onHostMutation(t4[0], t4[1], m3)), n4 && assignDeep(s3, onTrinsicChanged(n4[0], m3)), o4 && assignDeep(s3, onContentMutation(o4[0], m3));
    }
    return setDirection(s3), s3;
  }, $2];
}, "createObserversSetup"), resolveInitialization = /* @__PURE__ */ __name((t2, n2) => isFunction(n2) ? n2.apply(0, t2) : n2, "resolveInitialization"), staticInitializationElement = /* @__PURE__ */ __name((t2, n2, o2, s2) => {
  const e2 = isUndefined(s2) ? o2 : s2;
  return resolveInitialization(t2, e2) || n2.apply(0, t2);
}, "staticInitializationElement"), dynamicInitializationElement = /* @__PURE__ */ __name((t2, n2, o2, s2) => {
  const e2 = isUndefined(s2) ? o2 : s2, c10 = resolveInitialization(t2, e2);
  return !!c10 && (isHTMLElement(c10) ? c10 : n2.apply(0, t2));
}, "dynamicInitializationElement"), cancelInitialization = /* @__PURE__ */ __name((t2, n2) => {
  const { nativeScrollbarsOverlaid: o2, body: s2 } = n2 || {}, { T: e2, P: c10, Z: r2 } = getEnvironment(), { nativeScrollbarsOverlaid: l2, body: i2 } = r2().cancel, a2 = o2 ?? l2, u2 = isUndefined(s2) ? i2 : s2, f2 = (e2.x || e2.y) && a2, _2 = t2 && (isNull(u2) ? !c10 : u2);
  return !!f2 || !!_2;
}, "cancelInitialization"), createScrollbarsSetupElements = /* @__PURE__ */ __name((t2, n2, o2, s2) => {
  const e2 = "--os-viewport-percent", c10 = "--os-scroll-percent", r2 = "--os-scroll-direction", { Z: l2 } = getEnvironment(), { scrollbars: i2 } = l2(), { slot: a2 } = i2, { vt: u2, ht: f2, U: _2, Mt: d2, gt: v2, wt: h2, L: g2 } = n2, { scrollbars: b2 } = d2 ? {} : t2, { slot: w2 } = b2 || {}, y2 = [], S2 = [], m2 = [], O2 = dynamicInitializationElement([u2, f2, _2], () => g2 && h2 ? u2 : f2, a2, w2), initScrollTimeline = /* @__PURE__ */ __name((t3) => {
    if (p) {
      let n3 = null, s3 = [];
      const e3 = new p({
        source: v2,
        axis: t3
      }), cancelAnimation = /* @__PURE__ */ __name(() => {
        n3 && n3.cancel(), n3 = null;
      }, "cancelAnimation");
      return {
        Rt: /* @__PURE__ */ __name((c11) => {
          const { Tt: r3 } = o2, l3 = isDefaultDirectionScrollCoordinates(r3)[t3], i3 = t3 === "x", a3 = [getTrasformTranslateValue(0, i3), getTrasformTranslateValue(`calc(100cq${i3 ? "w" : "h"} + -100%)`, i3)], u3 = l3 ? a3 : a3.reverse();
          return s3[0] === u3[0] && s3[1] === u3[1] || (cancelAnimation(), s3 = u3, n3 = c11.kt.animate({
            clear: ["left"],
            transform: u3
          }, {
            timeline: e3
          })), cancelAnimation;
        }, "_setScrollPercentAnimation")
      };
    }
  }, "initScrollTimeline"), $2 = {
    x: initScrollTimeline("x"),
    y: initScrollTimeline("y")
  }, getViewportPercent = /* @__PURE__ */ __name(() => {
    const { Vt: t3, Lt: n3 } = o2, getAxisValue = /* @__PURE__ */ __name((t4, n4) => capNumber(0, 1, t4 / (t4 + n4) || 0), "getAxisValue");
    return {
      x: getAxisValue(n3.x, t3.x),
      y: getAxisValue(n3.y, t3.y)
    };
  }, "getViewportPercent"), scrollbarStructureAddRemoveClass = /* @__PURE__ */ __name((t3, n3, o3) => {
    const s3 = o3 ? addClass : removeClass;
    each(t3, (t4) => {
      s3(t4.Ut, n3);
    });
  }, "scrollbarStructureAddRemoveClass"), scrollbarStyle = /* @__PURE__ */ __name((t3, n3) => {
    each(t3, (t4) => {
      const [o3, s3] = n3(t4);
      setStyles(o3, s3);
    });
  }, "scrollbarStyle"), scrollbarsAddRemoveClass = /* @__PURE__ */ __name((t3, n3, o3) => {
    const s3 = isBoolean(o3), e3 = s3 ? o3 : !0, c11 = s3 ? !o3 : !0;
    e3 && scrollbarStructureAddRemoveClass(S2, t3, n3), c11 && scrollbarStructureAddRemoveClass(m2, t3, n3);
  }, "scrollbarsAddRemoveClass"), refreshScrollbarsHandleLength = /* @__PURE__ */ __name(() => {
    const t3 = getViewportPercent(), createScrollbarStyleFn = /* @__PURE__ */ __name((t4) => (n3) => [n3.Ut, {
      [e2]: roundCssNumber(t4) + ""
    }], "createScrollbarStyleFn");
    scrollbarStyle(S2, createScrollbarStyleFn(t3.x)), scrollbarStyle(m2, createScrollbarStyleFn(t3.y));
  }, "refreshScrollbarsHandleLength"), refreshScrollbarsHandleOffset = /* @__PURE__ */ __name(() => {
    if (!p) {
      const { Tt: t3 } = o2, n3 = getScrollCoordinatesPercent(t3, getElementScroll(v2)), createScrollbarStyleFn = /* @__PURE__ */ __name((t4) => (n4) => [n4.Ut, {
        [c10]: roundCssNumber(t4) + ""
      }], "createScrollbarStyleFn");
      scrollbarStyle(S2, createScrollbarStyleFn(n3.x)), scrollbarStyle(m2, createScrollbarStyleFn(n3.y));
    }
  }, "refreshScrollbarsHandleOffset"), refreshScrollbarsScrollCoordinates = /* @__PURE__ */ __name(() => {
    const { Tt: t3 } = o2, n3 = isDefaultDirectionScrollCoordinates(t3), createScrollbarStyleFn = /* @__PURE__ */ __name((t4) => (n4) => [n4.Ut, {
      [r2]: t4 ? "0" : "1"
    }], "createScrollbarStyleFn");
    scrollbarStyle(S2, createScrollbarStyleFn(n3.x)), scrollbarStyle(m2, createScrollbarStyleFn(n3.y)), p && (S2.forEach($2.x.Rt), m2.forEach($2.y.Rt));
  }, "refreshScrollbarsScrollCoordinates"), refreshScrollbarsScrollbarOffset = /* @__PURE__ */ __name(() => {
    if (g2 && !h2) {
      const { Vt: t3, Tt: n3 } = o2, s3 = isDefaultDirectionScrollCoordinates(n3), e3 = getScrollCoordinatesPercent(n3, getElementScroll(v2)), styleScrollbarPosition = /* @__PURE__ */ __name((n4) => {
        const { Ut: o3 } = n4, c11 = parent(o3) === _2 && o3, getTranslateValue = /* @__PURE__ */ __name((t4, n5, o4) => {
          const s4 = n5 * t4;
          return numberToCssPx(o4 ? s4 : -s4);
        }, "getTranslateValue");
        return [c11, c11 && {
          transform: getTrasformTranslateValue({
            x: getTranslateValue(e3.x, t3.x, s3.x),
            y: getTranslateValue(e3.y, t3.y, s3.y)
          })
        }];
      }, "styleScrollbarPosition");
      scrollbarStyle(S2, styleScrollbarPosition), scrollbarStyle(m2, styleScrollbarPosition);
    }
  }, "refreshScrollbarsScrollbarOffset"), generateScrollbarDOM = /* @__PURE__ */ __name((t3) => {
    const n3 = t3 ? "x" : "y", e3 = createDiv(`${at} ${t3 ? ft : _t}`), c11 = createDiv(dt), r3 = createDiv(pt), l3 = {
      Ut: e3,
      Pt: c11,
      kt: r3
    }, i3 = $2[n3];
    return push(t3 ? S2 : m2, l3), push(y2, [appendChildren(e3, c11), appendChildren(c11, r3), bind(removeElements, e3), i3 && i3.Rt(l3), s2(l3, scrollbarsAddRemoveClass, t3)]), l3;
  }, "generateScrollbarDOM"), C2 = bind(generateScrollbarDOM, !0), x2 = bind(generateScrollbarDOM, !1), appendElements = /* @__PURE__ */ __name(() => (appendChildren(O2, S2[0].Ut), appendChildren(O2, m2[0].Ut), bind(runEachAndClear, y2)), "appendElements");
  return C2(), x2(), [{
    Nt: refreshScrollbarsHandleLength,
    qt: refreshScrollbarsHandleOffset,
    Bt: refreshScrollbarsScrollCoordinates,
    Ft: refreshScrollbarsScrollbarOffset,
    jt: scrollbarsAddRemoveClass,
    Xt: {
      Yt: S2,
      Wt: C2,
      Jt: bind(scrollbarStyle, S2)
    },
    Gt: {
      Yt: m2,
      Wt: x2,
      Jt: bind(scrollbarStyle, m2)
    }
  }, appendElements];
}, "createScrollbarsSetupElements"), createScrollbarsSetupEvents = /* @__PURE__ */ __name((t2, n2, o2, s2) => (r2, l2, i2) => {
  const { ht: u2, U: f2, L: _2, gt: d2, Kt: p2, Ot: v2 } = n2, { Ut: h2, Pt: g2, kt: b2 } = r2, [w2, y2] = selfClearTimeout(333), [S2, m2] = selfClearTimeout(444), scrollOffsetElementScrollBy = /* @__PURE__ */ __name((t3) => {
    isFunction(d2.scrollBy) && d2.scrollBy({
      behavior: "smooth",
      left: t3.x,
      top: t3.y
    });
  }, "scrollOffsetElementScrollBy"), createInteractiveScrollEvents = /* @__PURE__ */ __name(() => {
    const n3 = "pointerup pointercancel lostpointercapture", s3 = `client${i2 ? "X" : "Y"}`, r3 = i2 ? $ : C, l3 = i2 ? "left" : "top", a2 = i2 ? "w" : "h", u3 = i2 ? "x" : "y", createRelativeHandleMove = /* @__PURE__ */ __name((t3, n4) => (s4) => {
      const { Vt: e2 } = o2, c10 = A(g2)[a2] - A(b2)[a2], l4 = n4 * s4 / c10 * e2[u3];
      scrollElementTo(d2, {
        [u3]: t3 + l4
      });
    }, "createRelativeHandleMove"), f3 = [];
    return addEventListener(g2, "pointerdown", (o3) => {
      const i3 = closest(o3.target, `.${pt}`) === b2, _3 = i3 ? b2 : g2, h3 = t2.scrollbars, w3 = h3[i3 ? "dragScroll" : "clickScroll"], { button: y3, isPrimary: O3, pointerType: $2 } = o3, { pointers: C2 } = h3;
      if (y3 === 0 && O3 && w3 && (C2 || []).includes($2)) {
        runEachAndClear(f3), m2();
        const t3 = !i3 && (o3.shiftKey || w3 === "instant"), h4 = bind(getBoundingClientRect, b2), y4 = bind(getBoundingClientRect, g2), getHandleOffset = /* @__PURE__ */ __name((t4, n4) => (t4 || h4())[l3] - (n4 || y4())[l3], "getHandleOffset"), O4 = e(getBoundingClientRect(d2)[r3]) / A(d2)[a2] || 1, $3 = createRelativeHandleMove(getElementScroll(d2)[u3], 1 / O4), C3 = o3[s3], x3 = h4(), H2 = y4(), E2 = x3[r3], z2 = getHandleOffset(x3, H2) + E2 / 2, I2 = C3 - H2[l3], D2 = i3 ? 0 : I2 - z2, releasePointerCapture = /* @__PURE__ */ __name((t4) => {
          runEachAndClear(k2), _3.releasePointerCapture(t4.pointerId);
        }, "releasePointerCapture"), M2 = i3 || t3, T2 = v2(), k2 = [addEventListener(p2, n3, releasePointerCapture), addEventListener(p2, "selectstart", (t4) => preventDefault(t4), {
          H: !1
        }), addEventListener(g2, n3, releasePointerCapture), M2 && addEventListener(g2, "pointermove", (t4) => $3(D2 + (t4[s3] - C3))), M2 && (() => {
          const t4 = getElementScroll(d2);
          T2();
          const n4 = getElementScroll(d2), o4 = {
            x: n4.x - t4.x,
            y: n4.y - t4.y
          };
          (c(o4.x) > 3 || c(o4.y) > 3) && (v2(), scrollElementTo(d2, t4), scrollOffsetElementScrollBy(o4), S2(T2));
        })];
        if (_3.setPointerCapture(o3.pointerId), t3)
          $3(D2);
        else if (!i3) {
          const t4 = getStaticPluginModuleInstance(Et);
          if (t4) {
            const n4 = t4($3, D2, E2, (t5) => {
              t5 ? T2() : push(k2, T2);
            });
            push(k2, n4), push(f3, bind(n4, !0));
          }
        }
      }
    });
  }, "createInteractiveScrollEvents");
  let O2 = !0;
  return bind(runEachAndClear, [addEventListener(b2, "pointermove pointerleave", s2), addEventListener(h2, "pointerenter", () => {
    l2(gt, !0);
  }), addEventListener(h2, "pointerleave pointercancel", () => {
    l2(gt, !1);
  }), !_2 && addEventListener(h2, "mousedown", () => {
    const t3 = getFocusedElement();
    (hasAttr(t3, j) || hasAttr(t3, B) || t3 === document.body) && a(bind(focusElement, f2), 25);
  }), addEventListener(h2, "wheel", (t3) => {
    const { deltaX: n3, deltaY: o3, deltaMode: s3 } = t3;
    O2 && s3 === 0 && parent(h2) === u2 && scrollOffsetElementScrollBy({
      x: n3,
      y: o3
    }), O2 = !1, l2(St, !0), w2(() => {
      O2 = !0, l2(St);
    }), preventDefault(t3);
  }, {
    H: !1,
    I: !0
  }), addEventListener(h2, "pointerdown", bind(addEventListener, p2, "click", stopAndPrevent, {
    A: !0,
    I: !0,
    H: !1
  }), {
    I: !0
  }), createInteractiveScrollEvents(), y2, m2]);
}, "createScrollbarsSetupEvents"), createScrollbarsSetup = /* @__PURE__ */ __name((t2, n2, o2, s2, e2, c10) => {
  let r2, l2, i2, a2, u2, f2 = noop, _2 = 0;
  const d2 = ["mouse", "pen"], isHoverablePointerType = /* @__PURE__ */ __name((t3) => d2.includes(t3.pointerType), "isHoverablePointerType"), [p2, v2] = selfClearTimeout(), [h2, g2] = selfClearTimeout(100), [b2, w2] = selfClearTimeout(100), [y2, S2] = selfClearTimeout(() => _2), [m2, O2] = createScrollbarsSetupElements(t2, e2, s2, createScrollbarsSetupEvents(n2, e2, s2, (t3) => isHoverablePointerType(t3) && manageScrollbarsAutoHideInstantInteraction())), { ht: $2, Qt: C2, wt: H2 } = e2, { jt: z2, Nt: I2, qt: A2, Bt: D2, Ft: M2 } = m2, manageScrollbarsAutoHide = /* @__PURE__ */ __name((t3, n3) => {
    if (S2(), t3)
      z2(yt);
    else {
      const t4 = bind(z2, yt, !0);
      _2 > 0 && !n3 ? y2(t4) : t4();
    }
  }, "manageScrollbarsAutoHide"), manageScrollbarsAutoHideInstantInteraction = /* @__PURE__ */ __name(() => {
    (i2 ? !r2 : !a2) && (manageScrollbarsAutoHide(!0), h2(() => {
      manageScrollbarsAutoHide(!1);
    }));
  }, "manageScrollbarsAutoHideInstantInteraction"), manageAutoHideSuspension = /* @__PURE__ */ __name((t3) => {
    z2(wt, t3, !0), z2(wt, t3, !1);
  }, "manageAutoHideSuspension"), onHostMouseEnter = /* @__PURE__ */ __name((t3) => {
    isHoverablePointerType(t3) && (r2 = i2, i2 && manageScrollbarsAutoHide(!0));
  }, "onHostMouseEnter"), T2 = [S2, g2, w2, v2, () => f2(), addEventListener($2, "pointerover", onHostMouseEnter, {
    A: !0
  }), addEventListener($2, "pointerenter", onHostMouseEnter), addEventListener($2, "pointerleave", (t3) => {
    isHoverablePointerType(t3) && (r2 = !1, i2 && manageScrollbarsAutoHide(!1));
  }), addEventListener($2, "pointermove", (t3) => {
    isHoverablePointerType(t3) && l2 && manageScrollbarsAutoHideInstantInteraction();
  }), addEventListener(C2, "scroll", (t3) => {
    p2(() => {
      A2(), manageScrollbarsAutoHideInstantInteraction();
    }), c10(t3), M2();
  })];
  return [() => bind(runEachAndClear, push(T2, O2())), ({ It: t3, Dt: n3, Zt: e3, tn: c11 }) => {
    const { nn: r3, sn: d3, en: p3, cn: v3 } = c11 || {}, { Ct: h3, _t: g3 } = e3 || {}, { F: w3 } = o2, { T: y3 } = getEnvironment(), { k: S3, rn: m3 } = s2, [O3, $3] = t3("showNativeOverlaidScrollbars"), [T3, k2] = t3("scrollbars.theme"), [R2, V2] = t3("scrollbars.visibility"), [L2, U2] = t3("scrollbars.autoHide"), [P2, N2] = t3("scrollbars.autoHideSuspend"), [q2] = t3("scrollbars.autoHideDelay"), [B2, F2] = t3("scrollbars.dragScroll"), [j2, X2] = t3("scrollbars.clickScroll"), [Y2, W2] = t3("overflow"), J2 = g3 && !n3, G2 = m3.x || m3.y, K2 = r3 || d3 || v3 || h3 || n3, Q2 = p3 || V2 || W2, Z2 = O3 && y3.x && y3.y, setScrollbarVisibility = /* @__PURE__ */ __name((t4, n4, o3) => {
      const s3 = t4.includes(E) && (R2 === x || R2 === "auto" && n4 === E);
      return z2(vt, s3, o3), s3;
    }, "setScrollbarVisibility");
    if (_2 = q2, J2 && (P2 && G2 ? (manageAutoHideSuspension(!1), f2(), b2(() => {
      f2 = addEventListener(C2, "scroll", bind(manageAutoHideSuspension, !0), {
        A: !0
      });
    })) : manageAutoHideSuspension(!0)), $3 && z2(it, Z2), k2 && (z2(u2), z2(T3, !0), u2 = T3), N2 && !P2 && manageAutoHideSuspension(!0), U2 && (l2 = L2 === "move", i2 = L2 === "leave", a2 = L2 === "never", manageScrollbarsAutoHide(a2, !0)), F2 && z2(Ot, B2), X2 && z2(mt, !!j2), Q2) {
      const t4 = setScrollbarVisibility(Y2.x, S3.x, !0), n4 = setScrollbarVisibility(Y2.y, S3.y, !1);
      z2(ht, !(t4 && n4));
    }
    K2 && (A2(), I2(), M2(), v3 && D2(), z2(bt, !m3.x, !0), z2(bt, !m3.y, !1), z2(ut, w3 && !H2));
  }, {}, m2];
}, "createScrollbarsSetup"), createStructureSetupElements = /* @__PURE__ */ __name((t2) => {
  const o2 = getEnvironment(), { Z: s2, P: e2 } = o2, { elements: c10 } = s2(), { padding: r2, viewport: l2, content: i2 } = c10, a2 = isHTMLElement(t2), u2 = a2 ? {} : t2, { elements: f2 } = u2, { padding: _2, viewport: d2, content: p2 } = f2 || {}, v2 = a2 ? t2 : u2.target, h2 = isBodyElement(v2), g2 = v2.ownerDocument, b2 = g2.documentElement, getDocumentWindow = /* @__PURE__ */ __name(() => g2.defaultView || n, "getDocumentWindow"), w2 = bind(staticInitializationElement, [v2]), y2 = bind(dynamicInitializationElement, [v2]), S2 = bind(createDiv, ""), $2 = bind(w2, S2, l2), C2 = bind(y2, S2, i2), elementHasOverflow = /* @__PURE__ */ __name((t3) => {
    const n2 = A(t3), o3 = M(t3), s3 = getStyles(t3, m), e3 = getStyles(t3, O);
    return o3.w - n2.w > 0 && !overflowIsVisible(s3) || o3.h - n2.h > 0 && !overflowIsVisible(e3);
  }, "elementHasOverflow"), x2 = $2(d2), H2 = x2 === v2, E2 = H2 && h2, z2 = !H2 && C2(p2), I2 = !H2 && x2 === z2, D2 = E2 ? b2 : x2, T2 = E2 ? D2 : v2, k2 = !H2 && y2(S2, r2, _2), R2 = !I2 && z2, V2 = [R2, D2, k2, T2].map((t3) => isHTMLElement(t3) && !parent(t3) && t3), elementIsGenerated = /* @__PURE__ */ __name((t3) => t3 && inArray(V2, t3), "elementIsGenerated"), L2 = !elementIsGenerated(D2) && elementHasOverflow(D2) ? D2 : v2, U2 = E2 ? b2 : D2, X2 = {
    vt: v2,
    ht: T2,
    U: D2,
    ln: k2,
    bt: R2,
    gt: U2,
    Qt: E2 ? g2 : D2,
    an: h2 ? b2 : L2,
    Kt: g2,
    wt: h2,
    Mt: a2,
    L: H2,
    un: getDocumentWindow,
    yt: /* @__PURE__ */ __name((t3) => hasAttrClass(D2, j, t3), "yt"),
    St: /* @__PURE__ */ __name((t3, n2) => addRemoveAttrClass(D2, j, t3, n2), "St"),
    Ot: /* @__PURE__ */ __name(() => addRemoveAttrClass(U2, j, G, !0), "Ot")
  }, { vt: Y2, ht: W2, ln: J2, U: Q2, bt: nt2 } = X2, ot2 = [() => {
    removeAttrs(W2, [B, P]), removeAttrs(Y2, P), h2 && removeAttrs(b2, [P, B]);
  }];
  let st2 = contents([nt2, Q2, J2, W2, Y2].find((t3) => t3 && !elementIsGenerated(t3)));
  const et = E2 ? Y2 : nt2 || Q2, ct = bind(runEachAndClear, ot2);
  return [X2, /* @__PURE__ */ __name(() => {
    const t3 = getDocumentWindow(), n2 = getFocusedElement(), unwrap = /* @__PURE__ */ __name((t4) => {
      appendChildren(parent(t4), contents(t4)), removeElements(t4);
    }, "unwrap"), prepareWrapUnwrapFocus = /* @__PURE__ */ __name((t4) => addEventListener(t4, "focusin focusout focus blur", stopAndPrevent, {
      I: !0,
      H: !1
    }), "prepareWrapUnwrapFocus"), o3 = "tabindex", s3 = getAttr(Q2, o3), c11 = prepareWrapUnwrapFocus(n2);
    return setAttrs(W2, B, H2 ? "" : F$1), setAttrs(J2, Z, ""), setAttrs(Q2, j, ""), setAttrs(nt2, tt, ""), H2 || (setAttrs(Q2, o3, s3 || "-1"), h2 && setAttrs(b2, q$1, "")), appendChildren(et, st2), appendChildren(W2, J2), appendChildren(J2 || W2, !H2 && Q2), appendChildren(Q2, nt2), push(ot2, [c11, () => {
      const t4 = getFocusedElement(), n3 = elementIsGenerated(Q2), e3 = n3 && t4 === Q2 ? Y2 : t4, c12 = prepareWrapUnwrapFocus(e3);
      removeAttrs(J2, Z), removeAttrs(nt2, tt), removeAttrs(Q2, j), h2 && removeAttrs(b2, q$1), s3 ? setAttrs(Q2, o3, s3) : removeAttrs(Q2, o3), elementIsGenerated(nt2) && unwrap(nt2), n3 && unwrap(Q2), elementIsGenerated(J2) && unwrap(J2), focusElement(e3), c12();
    }]), e2 && !H2 && (addAttrClass(Q2, j, K), push(ot2, bind(removeAttrs, Q2, j))), focusElement(!H2 && h2 && n2 === Y2 && t3.top === t3 ? Q2 : n2), c11(), st2 = 0, ct;
  }, "appendElements"), ct];
}, "createStructureSetupElements"), createTrinsicUpdateSegment = /* @__PURE__ */ __name(({ bt: t2 }) => ({ Zt: n2, fn: o2, Dt: s2 }) => {
  const { xt: e2 } = n2 || {}, { $t: c10 } = o2;
  t2 && (e2 || s2) && setStyles(t2, {
    [C]: c10 && "100%"
  });
}, "createTrinsicUpdateSegment"), createPaddingUpdateSegment = /* @__PURE__ */ __name(({ ht: t2, ln: n2, U: o2, L: s2 }, e2) => {
  const [c10, r2] = createCache({
    i: equalTRBL,
    o: topRightBottomLeft()
  }, bind(topRightBottomLeft, t2, "padding", ""));
  return ({ It: t3, Zt: l2, fn: i2, Dt: a2 }) => {
    let [u2, f2] = r2(a2);
    const { P: _2 } = getEnvironment(), { dt: d2, Ht: p2, Ct: m2 } = l2 || {}, { F: O2 } = i2, [C2, x2] = t3("paddingAbsolute");
    (d2 || f2 || (a2 || p2)) && ([u2, f2] = c10(a2));
    const E2 = !s2 && (x2 || m2 || f2);
    if (E2) {
      const t4 = !C2 || !n2 && !_2, s3 = u2.r + u2.l, c11 = u2.t + u2.b, r3 = {
        [y]: t4 && !O2 ? -s3 : 0,
        [S$1]: t4 ? -c11 : 0,
        [w]: t4 && O2 ? -s3 : 0,
        top: t4 ? -u2.t : 0,
        right: t4 ? O2 ? -u2.r : "auto" : 0,
        left: t4 ? O2 ? "auto" : -u2.l : 0,
        [$]: t4 && `calc(100% + ${s3}px)`
      }, l3 = {
        [v]: t4 ? u2.t : 0,
        [h]: t4 ? u2.r : 0,
        [b]: t4 ? u2.b : 0,
        [g$1]: t4 ? u2.l : 0
      };
      setStyles(n2 || o2, r3), setStyles(o2, l3), assignDeep(e2, {
        ln: u2,
        _n: !t4,
        j: n2 ? l3 : assignDeep({}, r3, l3)
      });
    }
    return {
      dn: E2
    };
  };
}, "createPaddingUpdateSegment"), createOverflowUpdateSegment = /* @__PURE__ */ __name((t2, s2) => {
  const e2 = getEnvironment(), { ht: c10, ln: r2, U: l2, L: a2, Qt: u2, gt: f2, wt: _2, St: d2, un: p2 } = t2, { P: v2 } = e2, h2 = _2 && a2, g2 = bind(o, 0), b2 = {
    display: /* @__PURE__ */ __name(() => !1, "display"),
    direction: /* @__PURE__ */ __name((t3) => t3 !== "ltr", "direction"),
    flexDirection: /* @__PURE__ */ __name((t3) => t3.endsWith("-reverse"), "flexDirection"),
    writingMode: /* @__PURE__ */ __name((t3) => t3 !== "horizontal-tb", "writingMode")
  }, w2 = keys(b2), y2 = {
    i: equalWH,
    o: {
      w: 0,
      h: 0
    }
  }, S2 = {
    i: equalXY,
    o: {}
  }, setMeasuringMode = /* @__PURE__ */ __name((t3) => {
    d2(J, !h2 && t3);
  }, "setMeasuringMode"), getMeasuredScrollCoordinates = /* @__PURE__ */ __name((t3) => {
    if (!w2.some((n3) => {
      const o3 = t3[n3];
      return o3 && b2[n3](o3);
    }))
      return {
        D: {
          x: 0,
          y: 0
        },
        M: {
          x: 1,
          y: 1
        }
      };
    setMeasuringMode(!0);
    const o2 = getElementScroll(f2), s3 = d2(Q, !0), e3 = addEventListener(u2, E, (t4) => {
      const n3 = getElementScroll(f2);
      t4.isTrusted && n3.x === o2.x && n3.y === o2.y && stopPropagation(t4);
    }, {
      I: !0,
      A: !0
    });
    scrollElementTo(f2, {
      x: 0,
      y: 0
    }), s3();
    const c11 = getElementScroll(f2), r3 = M(f2);
    scrollElementTo(f2, {
      x: r3.w,
      y: r3.h
    });
    const l3 = getElementScroll(f2);
    scrollElementTo(f2, {
      x: l3.x - c11.x < 1 && -r3.w,
      y: l3.y - c11.y < 1 && -r3.h
    });
    const a3 = getElementScroll(f2);
    return scrollElementTo(f2, o2), i(() => e3()), {
      D: c11,
      M: a3
    };
  }, "getMeasuredScrollCoordinates"), getOverflowAmount = /* @__PURE__ */ __name((t3, o2) => {
    const s3 = n.devicePixelRatio % 1 !== 0 ? 1 : 0, e3 = {
      w: g2(t3.w - o2.w),
      h: g2(t3.h - o2.h)
    };
    return {
      w: e3.w > s3 ? e3.w : 0,
      h: e3.h > s3 ? e3.h : 0
    };
  }, "getOverflowAmount"), [m2, O2] = createCache(y2, bind(getFractionalSize, l2)), [$2, C2] = createCache(y2, bind(M, l2)), [z2, I2] = createCache(y2), [A2] = createCache(S2), [T2, k2] = createCache(y2), [R2] = createCache(S2), [V2] = createCache({
    i: /* @__PURE__ */ __name((t3, n2) => equal(t3, n2, w2), "i"),
    o: {}
  }, () => hasDimensions(l2) ? getStyles(l2, w2) : {}), [L2, U2] = createCache({
    i: /* @__PURE__ */ __name((t3, n2) => equalXY(t3.D, n2.D) && equalXY(t3.M, n2.M), "i"),
    o: getZeroScrollCoordinates()
  }), P2 = getStaticPluginModuleInstance(xt), createViewportOverflowStyleClassName = /* @__PURE__ */ __name((t3, n2) => `${n2 ? X : Y}${capitalizeFirstLetter(t3)}`, "createViewportOverflowStyleClassName"), setViewportOverflowStyle = /* @__PURE__ */ __name((t3) => {
    const createAllOverflowStyleClassNames = /* @__PURE__ */ __name((t4) => [x, H, E].map((n3) => createViewportOverflowStyleClassName(n3, t4)), "createAllOverflowStyleClassNames"), n2 = createAllOverflowStyleClassNames(!0).concat(createAllOverflowStyleClassNames()).join(" ");
    d2(n2), d2(keys(t3).map((n3) => createViewportOverflowStyleClassName(t3[n3], n3 === "x")).join(" "), !0);
  }, "setViewportOverflowStyle");
  return ({ It: n2, Zt: o2, fn: i2, Dt: a3 }, { dn: u3 }) => {
    const { dt: f3, Ht: _3, Ct: b3, _t: w3, zt: y3 } = o2 || {}, S3 = P2 && P2.V(t2, s2, i2, e2, n2), { Y: x2, W: H2, J: E2 } = S3 || {}, [M2, q2] = getShowNativeOverlaidScrollbars(n2, e2), [F2, j2] = n2("overflow"), X2 = overflowIsVisible(F2.x), Y2 = overflowIsVisible(F2.y), W2 = f3 || u3 || _3 || b3 || y3 || q2;
    let J2 = O2(a3), G2 = C2(a3), Q2 = I2(a3), tt2 = k2(a3);
    if (q2 && v2 && d2(K, !M2), W2) {
      hasAttrClass(c10, B, N) && setMeasuringMode(!0);
      const [t3] = H2 ? H2() : [], [n3] = J2 = m2(a3), [o3] = G2 = $2(a3), s3 = D(l2), e3 = h2 && getWindowSize(p2()), r3 = {
        w: g2(o3.w + n3.w),
        h: g2(o3.h + n3.h)
      }, i3 = {
        w: g2((e3 ? e3.w : s3.w + g2(s3.w - o3.w)) + n3.w),
        h: g2((e3 ? e3.h : s3.h + g2(s3.h - o3.h)) + n3.h)
      };
      t3 && t3(), tt2 = T2(i3), Q2 = z2(getOverflowAmount(r3, i3), a3);
    }
    const [nt2, ot2] = tt2, [st2, et] = Q2, [ct, rt] = G2, [lt2, it2] = J2, [at2, ut2] = A2({
      x: st2.w > 0,
      y: st2.h > 0
    }), ft2 = X2 && Y2 && (at2.x || at2.y) || X2 && at2.x && !at2.y || Y2 && at2.y && !at2.x, _t2 = u3 || b3 || y3 || it2 || rt || ot2 || et || j2 || q2 || W2, dt2 = createViewportOverflowState(at2, F2), [pt2, vt2] = R2(dt2.k), [ht2, gt2] = V2(a3), bt2 = b3 || w3 || gt2 || ut2 || a3, [wt2, yt2] = bt2 ? L2(getMeasuredScrollCoordinates(ht2), a3) : U2();
    return _t2 && (vt2 && setViewportOverflowStyle(dt2.k), E2 && x2 && setStyles(l2, E2(dt2, i2, x2(dt2, ct, lt2)))), setMeasuringMode(!1), addRemoveAttrClass(c10, B, N, ft2), addRemoveAttrClass(r2, Z, N, ft2), assignDeep(s2, {
      k: pt2,
      Lt: {
        x: nt2.w,
        y: nt2.h
      },
      Vt: {
        x: st2.w,
        y: st2.h
      },
      rn: at2,
      Tt: sanitizeScrollCoordinates(wt2, st2)
    }), {
      en: vt2,
      nn: ot2,
      sn: et,
      cn: yt2 || et,
      pn: bt2
    };
  };
}, "createOverflowUpdateSegment"), createStructureSetup = /* @__PURE__ */ __name((t2) => {
  const [n2, o2, s2] = createStructureSetupElements(t2), e2 = {
    ln: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    _n: !1,
    j: {
      [y]: 0,
      [S$1]: 0,
      [w]: 0,
      [v]: 0,
      [h]: 0,
      [b]: 0,
      [g$1]: 0
    },
    Lt: {
      x: 0,
      y: 0
    },
    Vt: {
      x: 0,
      y: 0
    },
    k: {
      x: H,
      y: H
    },
    rn: {
      x: !1,
      y: !1
    },
    Tt: getZeroScrollCoordinates()
  }, { vt: c10, gt: r2, L: l2, Ot: i2 } = n2, { P: a2, T: u2 } = getEnvironment(), f2 = !a2 && (u2.x || u2.y), _2 = [createTrinsicUpdateSegment(n2), createPaddingUpdateSegment(n2, e2), createOverflowUpdateSegment(n2, e2)];
  return [o2, (t3) => {
    const n3 = {}, s3 = f2 && getElementScroll(r2), e3 = s3 && i2();
    return each(_2, (o4) => {
      assignDeep(n3, o4(t3, n3) || {});
    }), scrollElementTo(r2, s3), e3 && e3(), l2 || scrollElementTo(c10, 0), n3;
  }, e2, n2, s2];
}, "createStructureSetup"), createSetups = /* @__PURE__ */ __name((t2, n2, o2, s2, e2) => {
  let c10 = !1;
  const r2 = createOptionCheck(n2, {}), [l2, i2, a2, u2, f2] = createStructureSetup(t2), [_2, d2, p2] = createObserversSetup(u2, a2, r2, (t3) => {
    update({}, t3);
  }), [v2, h2, , g2] = createScrollbarsSetup(t2, n2, p2, a2, u2, e2), updateHintsAreTruthy = /* @__PURE__ */ __name((t3) => keys(t3).some((n3) => !!t3[n3]), "updateHintsAreTruthy"), update = /* @__PURE__ */ __name((t3, e3) => {
    if (o2())
      return !1;
    const { vn: r3, Dt: l3, At: a3, hn: u3 } = t3, f3 = r3 || {}, _3 = !!l3 || !c10, v3 = {
      It: createOptionCheck(n2, f3, _3),
      vn: f3,
      Dt: _3
    };
    if (u3)
      return h2(v3), !1;
    const g3 = e3 || d2(assignDeep({}, v3, {
      At: a3
    })), b2 = i2(assignDeep({}, v3, {
      fn: p2,
      Zt: g3
    }));
    h2(assignDeep({}, v3, {
      Zt: g3,
      tn: b2
    }));
    const w2 = updateHintsAreTruthy(g3), y2 = updateHintsAreTruthy(b2), S2 = w2 || y2 || !isEmptyObject(f3) || _3;
    return c10 = !0, S2 && s2(t3, {
      Zt: g3,
      tn: b2
    }), S2;
  }, "update");
  return [() => {
    const { an: t3, gt: n3, Ot: o3 } = u2, s3 = getElementScroll(t3), e3 = [_2(), l2(), v2()], c11 = o3();
    return scrollElementTo(n3, s3), c11(), bind(runEachAndClear, e3);
  }, update, () => ({
    gn: p2,
    bn: a2
  }), {
    wn: u2,
    yn: g2
  }, f2];
}, "createSetups"), Tt = /* @__PURE__ */ new WeakMap(), addInstance = /* @__PURE__ */ __name((t2, n2) => {
  Tt.set(t2, n2);
}, "addInstance"), removeInstance = /* @__PURE__ */ __name((t2) => {
  Tt.delete(t2);
}, "removeInstance"), getInstance = /* @__PURE__ */ __name((t2) => Tt.get(t2), "getInstance"), OverlayScrollbars = /* @__PURE__ */ __name((t2, n2, o2) => {
  const { nt: s2 } = getEnvironment(), e2 = isHTMLElement(t2), c10 = e2 ? t2 : t2.target, r2 = getInstance(c10);
  if (n2 && !r2) {
    let r3 = !1;
    const l2 = [], i2 = {}, validateOptions = /* @__PURE__ */ __name((t3) => {
      const n3 = removeUndefinedProperties(t3), o3 = getStaticPluginModuleInstance(R);
      return o3 ? o3(n3, !0) : n3;
    }, "validateOptions"), a2 = assignDeep({}, s2(), validateOptions(n2)), [u2, f2, _2] = createEventListenerHub(), [d2, p2, v2] = createEventListenerHub(o2), triggerEvent = /* @__PURE__ */ __name((t3, n3) => {
      v2(t3, n3), _2(t3, n3);
    }, "triggerEvent"), [h2, g2, b2, w2, y2] = createSetups(t2, a2, () => r3, ({ vn: t3, Dt: n3 }, { Zt: o3, tn: s3 }) => {
      const { dt: e3, Ct: c11, xt: r4, Ht: l3, Et: i3, _t: a3 } = o3, { nn: u3, sn: f3, en: _3, cn: d3 } = s3;
      triggerEvent("updated", [S2, {
        updateHints: {
          sizeChanged: !!e3,
          directionChanged: !!c11,
          heightIntrinsicChanged: !!r4,
          overflowEdgeChanged: !!u3,
          overflowAmountChanged: !!f3,
          overflowStyleChanged: !!_3,
          scrollCoordinatesChanged: !!d3,
          contentMutation: !!l3,
          hostMutation: !!i3,
          appear: !!a3
        },
        changedOptions: t3 || {},
        force: !!n3
      }]);
    }, (t3) => triggerEvent("scroll", [S2, t3])), destroy2 = /* @__PURE__ */ __name((t3) => {
      removeInstance(c10), runEachAndClear(l2), r3 = !0, triggerEvent("destroyed", [S2, t3]), f2(), p2();
    }, "destroy"), S2 = {
      options(t3, n3) {
        if (t3) {
          const o3 = n3 ? s2() : {}, e3 = getOptionsDiff(a2, assignDeep(o3, validateOptions(t3)));
          isEmptyObject(e3) || (assignDeep(a2, e3), g2({
            vn: e3
          }));
        }
        return assignDeep({}, a2);
      },
      on: d2,
      off: /* @__PURE__ */ __name((t3, n3) => {
        t3 && n3 && p2(t3, n3);
      }, "off"),
      state() {
        const { gn: t3, bn: n3 } = b2(), { F: o3 } = t3, { Lt: s3, Vt: e3, k: c11, rn: l3, ln: i3, _n: a3, Tt: u3 } = n3;
        return assignDeep({}, {
          overflowEdge: s3,
          overflowAmount: e3,
          overflowStyle: c11,
          hasOverflow: l3,
          scrollCoordinates: {
            start: u3.D,
            end: u3.M
          },
          padding: i3,
          paddingAbsolute: a3,
          directionRTL: o3,
          destroyed: r3
        });
      },
      elements() {
        const { vt: t3, ht: n3, ln: o3, U: s3, bt: e3, gt: c11, Qt: r4 } = w2.wn, { Xt: l3, Gt: i3 } = w2.yn, translateScrollbarStructure = /* @__PURE__ */ __name((t4) => {
          const { kt: n4, Pt: o4, Ut: s4 } = t4;
          return {
            scrollbar: s4,
            track: o4,
            handle: n4
          };
        }, "translateScrollbarStructure"), translateScrollbarsSetupElement = /* @__PURE__ */ __name((t4) => {
          const { Yt: n4, Wt: o4 } = t4, s4 = translateScrollbarStructure(n4[0]);
          return assignDeep({}, s4, {
            clone: /* @__PURE__ */ __name(() => {
              const t5 = translateScrollbarStructure(o4());
              return g2({
                hn: !0
              }), t5;
            }, "clone")
          });
        }, "translateScrollbarsSetupElement");
        return assignDeep({}, {
          target: t3,
          host: n3,
          padding: o3 || s3,
          viewport: s3,
          content: e3 || s3,
          scrollOffsetElement: c11,
          scrollEventElement: r4,
          scrollbarHorizontal: translateScrollbarsSetupElement(l3),
          scrollbarVertical: translateScrollbarsSetupElement(i3)
        });
      },
      update: /* @__PURE__ */ __name((t3) => g2({
        Dt: t3,
        At: !0
      }), "update"),
      destroy: bind(destroy2, !1),
      plugin: /* @__PURE__ */ __name((t3) => i2[keys(t3)[0]], "plugin")
    };
    return push(l2, [y2]), addInstance(c10, S2), registerPluginModuleInstances(T, OverlayScrollbars, [S2, u2, i2]), cancelInitialization(w2.wn.wt, !e2 && t2.cancel) ? (destroy2(!0), S2) : (push(l2, h2()), triggerEvent("initialized", [S2]), S2.update(), S2);
  }
  return r2;
}, "OverlayScrollbars");
OverlayScrollbars.plugin = (t2) => {
  const n2 = isArray(t2), o2 = n2 ? t2 : [t2], s2 = o2.map((t3) => registerPluginModuleInstances(t3, OverlayScrollbars)[0]);
  return addPlugins(o2), n2 ? s2 : s2[0];
};
OverlayScrollbars.valid = (t2) => {
  const n2 = t2 && t2.elements, o2 = isFunction(n2) && n2();
  return isPlainObject(o2) && !!getInstance(o2.target);
};
OverlayScrollbars.env = () => {
  const { N: t2, T: n2, P: o2, G: s2, st: e2, et: c10, Z: r2, tt: l2, nt: i2, ot: a2 } = getEnvironment();
  return assignDeep({}, {
    scrollbarsSize: t2,
    scrollbarsOverlaid: n2,
    scrollbarsHiding: o2,
    scrollTimeline: s2,
    staticDefaultInitialization: e2,
    staticDefaultOptions: c10,
    getDefaultInitialization: r2,
    setDefaultInitialization: l2,
    getDefaultOptions: i2,
    setDefaultOptions: a2
  });
};
OverlayScrollbars.nonce = setNonce;
OverlayScrollbars.trustedTypePolicy = setTrustedTypePolicy;
const S = /* @__PURE__ */ __name(() => {
  if (typeof window > "u") {
    const n2 = /* @__PURE__ */ __name(() => {
    }, "n");
    return [n2, n2];
  }
  let l2, o2;
  const t2 = window, c10 = typeof t2.requestIdleCallback == "function", a2 = t2.requestAnimationFrame, i2 = t2.cancelAnimationFrame, r2 = c10 ? t2.requestIdleCallback : a2, u2 = c10 ? t2.cancelIdleCallback : i2, s2 = /* @__PURE__ */ __name(() => {
    u2(l2), i2(o2);
  }, "s");
  return [
    (n2, e2) => {
      s2(), l2 = r2(
        c10 ? () => {
          s2(), o2 = a2(n2);
        } : n2,
        typeof e2 == "object" ? e2 : { timeout: 2233 }
      );
    },
    s2
  ];
}, "S"), F = /* @__PURE__ */ __name((l2) => {
  const { options: o2, events: t2, defer: c10 } = l2 || {}, [a2, i2] = useMemo(S, []), r2 = useRef(null), u2 = useRef(c10), s2 = useRef(o2), n2 = useRef(t2);
  return useEffect(() => {
    u2.current = c10;
  }, [c10]), useEffect(() => {
    const { current: e2 } = r2;
    s2.current = o2, OverlayScrollbars.valid(e2) && e2.options(o2 || {}, !0);
  }, [o2]), useEffect(() => {
    const { current: e2 } = r2;
    n2.current = t2, OverlayScrollbars.valid(e2) && e2.on(t2 || {}, !0);
  }, [t2]), useEffect(
    () => () => {
      var e2;
      i2(), (e2 = r2.current) == null || e2.destroy();
    },
    []
  ), useMemo(
    () => [
      (e2) => {
        const v2 = r2.current;
        if (OverlayScrollbars.valid(v2))
          return;
        const f2 = u2.current, y2 = s2.current || {}, b2 = n2.current || {}, m2 = /* @__PURE__ */ __name(() => r2.current = OverlayScrollbars(e2, y2, b2), "m");
        f2 ? a2(m2, f2) : m2();
      },
      () => r2.current
    ],
    []
  );
}, "F"), q = /* @__PURE__ */ __name((l2, o2) => {
  const { element: t2 = "div", options: c10, events: a2, defer: i2, children: r2, ...u2 } = l2, s2 = t2, n2 = useRef(null), e2 = useRef(null), [v2, f2] = F({ options: c10, events: a2, defer: i2 });
  return useEffect(() => {
    const { current: y2 } = n2, { current: b2 } = e2;
    if (!y2)
      return;
    const m2 = y2;
    return v2(
      t2 === "body" ? {
        target: m2,
        cancel: {
          body: null
        }
      } : {
        target: m2,
        elements: {
          viewport: b2,
          content: b2
        }
      }
    ), () => {
      var R2;
      return (R2 = f2()) == null ? void 0 : R2.destroy();
    };
  }, [v2, t2]), useImperativeHandle(
    o2,
    () => ({
      osInstance: f2,
      getElement: /* @__PURE__ */ __name(() => n2.current, "getElement")
    }),
    []
  ), // @ts-ignore
  /* @__PURE__ */ React__default.createElement(s2, { "data-overlayscrollbars-initialize": "", ref: n2, ...u2 }, t2 === "body" ? r2 : /* @__PURE__ */ React__default.createElement("div", { "data-overlayscrollbars-contents": "", ref: e2 }, r2));
}, "q"), g = forwardRef(q), custom = "_custom_6g3xw_1", styles$3 = {
  custom
}, BASE_SCROLLBAR_CLASS_NAME = "os-theme-light", ScrollArea = /* @__PURE__ */ __name(({ children, className, orientation, ...restProps }) => (
  // Оборачивается в Space для активации стилей из токенов
  /* @__PURE__ */ jsxRuntimeExports.jsx(Space, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    g,
    {
      options: {
        scrollbars: {
          theme: cn(styles$3.custom, BASE_SCROLLBAR_CLASS_NAME),
          visibility: "auto",
          autoHide: "leave",
          autoHideDelay: 0
        },
        overflow: {
          x: orientation === "vertical" ? "hidden" : "scroll",
          y: orientation === "horizontal" ? "hidden" : "scroll"
        }
      },
      className,
      ...restProps,
      children
    }
  ) })
), "ScrollArea");
function Steps(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Steps$1, { ...props });
}
__name(Steps, "Steps");
const useTableState = /* @__PURE__ */ __name((initialPagination, dataLength) => {
  const [tableState, setTableState] = useState(() => initialPagination || {
    pageSize: initialPagination === !1 ? dataLength : 10,
    current: 1,
    total: dataLength
  });
  return useEffect(() => {
    setTableState(initialPagination || {
      pageSize: initialPagination === !1 ? dataLength : 10,
      current: 1,
      total: dataLength
    });
  }, [initialPagination, dataLength]), { tableState, setTableState };
}, "useTableState"), useGroupedData = /* @__PURE__ */ __name((data, groupedKey, tableState) => {
  const [groupedData, setGroupedData] = useState({}), model = useMemo(() => _$1.sortBy(data, groupedKey), [data, groupedKey]), updateGroupedData = useCallback(
    (pageSize, currentPage, modelData) => {
      const currPageData = _$1.chunk(modelData, pageSize)[currentPage - 1];
      return _$1.groupBy(currPageData, (value) => value[groupedKey[0]]);
    },
    [groupedKey]
  );
  return useEffect(() => {
    if (!tableState.pageSize || !tableState.current) return;
    const updatedData = updateGroupedData(tableState.pageSize, tableState.current, model);
    setGroupedData(updatedData);
  }, [model, tableState, updateGroupedData]), groupedData;
}, "useGroupedData"), useExpandedKeys = /* @__PURE__ */ __name((groupedData, isExpandedByDefault) => {
  const [expandedKeys, setExpandedKeys] = useState([]);
  return useEffect(() => {
    isExpandedByDefault && setExpandedKeys(Object.keys(groupedData));
  }, [isExpandedByDefault, groupedData]), { expandedKeys, handleExpand: /* @__PURE__ */ __name((groupKey) => {
    setExpandedKeys(
      (prevKeys) => prevKeys.includes(groupKey) ? prevKeys.filter((key) => key !== groupKey) : [...prevKeys, groupKey]
    );
  }, "handleExpand") };
}, "useExpandedKeys"), expand = "_expand_1n6u7_1", groupText = "_groupText_1n6u7_17", pagination = "_pagination_1n6u7_29", table = "_table_1n6u7_37", styles$2 = {
  expand,
  groupText,
  pagination,
  table
}, TableColumns = /* @__PURE__ */ __name(({
  columns,
  expandedKeys,
  handleExpand
}) => {
  if (!columns || columns.length === 0) return [];
  const [firstColumn, ...otherColumns] = columns, updatedFirstColumn = {
    ...firstColumn,
    render: /* @__PURE__ */ __name((text, record, index) => record.isGrouped ? {
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name(() => handleExpand(record.groupKey), "onClick"), className: styles$2.expand, children: [
        expandedKeys.includes(record.groupKey) ? /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronDown, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: styles$2.groupText, children: record.text })
      ] }),
      props: {
        colSpan: columns == null ? void 0 : columns.length,
        style: { padding: "0 16px" }
      }
    } : firstColumn.render ? firstColumn.render(text, record, index) : text, "render")
  }, updatedOtherColumns = otherColumns.map((col) => ({
    ...col,
    render: /* @__PURE__ */ __name((text, record, index) => record.isGrouped ? { children: null, props: { colSpan: 0 } } : col.render ? col.render(text, record, index) : text, "render")
  }));
  return [updatedFirstColumn, ...updatedOtherColumns];
}, "TableColumns");
function MultiExpandTable({ data, isExpandedByDefault, rowKey, ...props }) {
  const { tableState, setTableState } = useTableState(props.pagination, data == null ? void 0 : data.length), groupedData = useGroupedData(data, props.groupedKey, tableState), { expandedKeys, handleExpand } = useExpandedKeys(groupedData, isExpandedByDefault), tableData = Object.keys(groupedData).reduce((acc, curr) => [
    ...acc,
    {
      isGrouped: !0,
      isExpandedByDefault: expandedKeys.includes(curr),
      groupKey: curr,
      id: `group-${curr}`,
      key: `group-${curr}`,
      text: curr,
      parentKey: null
    },
    ...expandedKeys.includes(curr) ? groupedData[curr].map((record) => ({
      ...record,
      parentKey: `group-${curr}`
    })) : []
  ], []), tableColumns = useMemo(() => TableColumns({ columns: props.columns, expandedKeys, handleExpand }), [props.columns, expandedKeys, handleExpand]), handleTableChange = /* @__PURE__ */ __name((pagination2) => {
    !pagination2.pageSize || !pagination2.current || setTableState({ pageSize: pagination2.pageSize, current: pagination2.current });
  }, "handleTableChange");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2.table, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Table,
      {
        ...props,
        columns: tableColumns,
        data: tableData,
        rowKey,
        onChange: handleTableChange,
        pagination: !1
      }
    ),
    props.pagination !== !1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Pagination,
      {
        className: styles$2.pagination,
        pageSize: tableState.pageSize,
        current: tableState.current,
        total: tableState.total,
        onChange: /* @__PURE__ */ __name((value) => {
          setTableState((prevState) => ({
            ...prevState,
            current: value
          }));
        }, "onChange")
      }
    )
  ] });
}
__name(MultiExpandTable, "MultiExpandTable");
const useTablerIcons = /* @__PURE__ */ __name((wrapperRef) => {
  useEffect(() => {
    if (wrapperRef.current) {
      const spanRightIcon = wrapperRef.current.querySelector(".ant-transfer-operation span.anticon-right");
      spanRightIcon && (spanRightIcon.innerHTML = "", spanRightIcon.parentElement && (spanRightIcon.parentElement.style.marginLeft = "1px"), client.createRoot(spanRightIcon).render(/* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { width: 16, height: 16 })));
      const spanLeftIcon = wrapperRef.current.querySelector(".ant-transfer-operation span.anticon-left");
      spanLeftIcon && (spanLeftIcon.innerHTML = "", spanLeftIcon.parentElement && (spanLeftIcon.parentElement.style.marginRight = "1px"), client.createRoot(spanLeftIcon).render(/* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronLeft, { width: 16, height: 16 })));
    }
  }, [wrapperRef]);
}, "useTablerIcons"), hidden = "_hidden_1e486_1", titles = "_titles_1e486_13", transferWrapper = "_transfer-wrapper_1e486_25", transferNoSelectionActions = "_transfer-no-selection-actions_1e486_43", styles$1 = {
  hidden,
  titles,
  transferWrapper,
  transferNoSelectionActions
}, Transfer = /* @__PURE__ */ __name(({
  isDisabled,
  isOneWay,
  isShowSearch,
  isShowSelectAll,
  isFilterOption,
  children,
  listsWidths,
  customNotFoundText,
  locale,
  withDefaultSelectionActions = !1,
  withSearchButton,
  ...restProps
}) => {
  var _a, _b;
  const { theme } = useTheme(), hiddenAntDefaultSearchesRefs = useRef([]);
  useEffect(() => {
    var _a2, _b2, _c, _d, _e, _f;
    if (transferWrapperRef.current) {
      transferWrapperRef.current.querySelectorAll(".ant-transfer-list-header").forEach((header2) => {
        var _a3, _b3;
        header2.style.background = (_b3 = (_a3 = theme.components) == null ? void 0 : _a3.Transfer) == null ? void 0 : _b3.headerBg;
      }), transferWrapperRef.current.querySelectorAll(".ant-transfer-list-body-search-wrapper").forEach((searchEl) => {
        searchEl.classList.add(styles$1.hidden);
        const defaultTransferInput = searchEl.querySelector(".ant-input");
        defaultTransferInput && hiddenAntDefaultSearchesRefs.current.push(defaultTransferInput);
      });
      const transferLists = transferWrapperRef.current.querySelectorAll(".ant-transfer-list"), panelsWidths = listsWidths != null && listsWidths.length ? listsWidths.length === 1 ? [listsWidths[0], (_b2 = (_a2 = theme.components) == null ? void 0 : _a2.Transfer) == null ? void 0 : _b2.panelRightMaxWidth] : listsWidths : [(_d = (_c = theme.components) == null ? void 0 : _c.Transfer) == null ? void 0 : _d.panelLeftMaxWidth, (_f = (_e = theme.components) == null ? void 0 : _e.Transfer) == null ? void 0 : _f.panelRightMaxWidth];
      transferLists.length && transferLists.forEach((el, i2) => {
        const panelWidth = panelsWidths[i2], element = el;
        typeof panelWidth == "number" ? element.style.width = `${panelWidth}px` : typeof panelWidth == "string" && (element.style.width = panelWidth);
      });
    }
  }, []);
  const handleSearch = /* @__PURE__ */ __name((e2) => {
    const searchPosition = e2.target.id === "left" ? 0 : 1;
    hiddenAntDefaultSearchesRefs.current[searchPosition].setAttribute("value", e2.target.value);
    const event = new Event("input", { bubbles: !0 });
    hiddenAntDefaultSearchesRefs.current[searchPosition].dispatchEvent(event);
  }, "handleSearch"), handleSearchByClick = /* @__PURE__ */ __name((value, position) => {
    const searchPosition = position === "left" ? 0 : 1;
    hiddenAntDefaultSearchesRefs.current[searchPosition].setAttribute("value", value);
    const event = new Event("input", { bubbles: !0 });
    hiddenAntDefaultSearchesRefs.current[searchPosition].dispatchEvent(event);
  }, "handleSearchByClick"), renderSearch = /* @__PURE__ */ __name((position) => withSearchButton ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    InputSearch,
    {
      placeholder: "Поиск",
      id: position,
      onSearch: /* @__PURE__ */ __name((value) => {
        handleSearchByClick(value, position);
      }, "onSearch")
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Input$1, { placeholder: "Поиск", id: position, onChange: handleSearch }), "renderSearch"), transferWrapperRef = useRef(null);
  return useTablerIcons(transferWrapperRef), /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: transferWrapperRef,
      className: cn(styles$1.transferWrapper, { [styles$1.transferNoSelectionActions]: !withDefaultSelectionActions }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Transfer$1,
        {
          ...restProps,
          listStyle: { maxHeight: (_b = (_a = theme.components) == null ? void 0 : _a.Transfer) == null ? void 0 : _b.maxHeight, ...restProps.listStyle },
          disabled: isDisabled,
          oneWay: isOneWay,
          showSearch: isShowSearch,
          showSelectAll: isShowSelectAll,
          filterOption: isFilterOption,
          selectionsIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronDown, { width: 16, height: 16 }),
          titles: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.titles, children: [
              isShowSearch && renderSearch("left"),
              restProps.titles && restProps.titles[0]
            ] }, "first-list"),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.titles, children: [
              isShowSearch && renderSearch("right"),
              restProps.titles && restProps.titles[1]
            ] }, "second-list")
          ],
          locale: {
            ...locale,
            notFoundContent: customNotFoundText ? /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { image: Empty.PRESENTED_IMAGE_SIMPLE, description: customNotFoundText }) : void 0
          },
          children
        }
      )
    }
  );
}, "Transfer"), recursiveWrap = /* @__PURE__ */ __name((node) => {
  if (!node) return;
  const updatedNode = {
    ...node,
    icon: typeof node.icon == "function" ? (props) => node.icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { role: "img", children: node.icon(props) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { role: "img", children: node.icon })
  };
  return node.children && (updatedNode.children = node.children.map((child) => recursiveWrap(child))), updatedNode;
}, "recursiveWrap"), Tree = /* @__PURE__ */ __name(({
  isCheckable,
  isCheckStrictly,
  isDisabled,
  isDraggable,
  shouldAllowDrop,
  isAutoExpandedParent,
  isBlockNode,
  isDefaultExpandAll,
  isFilterTreeNode,
  isMultiple,
  isSelectable,
  isShowIcon,
  isShowLine,
  isVirtual,
  switcherIcon,
  treeData,
  ...rest
}) => {
  const applyIconWrapper = useMemo(() => treeData && treeData.map(recursiveWrap), [treeData]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tree$2,
    {
      checkable: isCheckable,
      checkStrictly: isCheckStrictly,
      disabled: isDisabled,
      draggable: isDraggable,
      allowDrop: shouldAllowDrop,
      autoExpandParent: isAutoExpandedParent,
      blockNode: isBlockNode,
      defaultExpandAll: isDefaultExpandAll,
      filterAntTreeNode: isFilterTreeNode,
      multiple: isMultiple,
      selectable: isSelectable,
      showIcon: isShowIcon,
      showLine: isShowLine,
      virtual: isVirtual,
      treeData: applyIconWrapper,
      ...rest,
      switcherIcon: switcherIcon || ((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultTreeExpandIcon, { expanded: props.expanded }))
    }
  );
}, "Tree"), treeSubtext = "_tree-subtext_14cbz_1", selectPosition = "_select-position_14cbz_11", selectScrollSm = "_select-scroll-sm_14cbz_23", selectScroll = "_select-scroll_14cbz_23", selectScrollLg = "_select-scroll-lg_14cbz_43", selectMultipleItm = "_select-multiple-itm_14cbz_69", popupSub = "_popup-sub_14cbz_81", compactAfter = "_compact-after_14cbz_111", label = "_label_14cbz_131", icon = "_icon_14cbz_143", labelContent = "_label-content_14cbz_153", iconLabel = "_icon-label_14cbz_163", styles = {
  treeSubtext,
  selectPosition,
  selectScrollSm,
  selectScroll,
  selectScrollLg,
  selectMultipleItm,
  popupSub,
  compactAfter,
  label,
  icon,
  labelContent,
  iconLabel
}, TreeSelect = /* @__PURE__ */ __name(({
  compactAddonAfter,
  isAllowClear,
  isAutoClearSearchValue,
  isDebounceSearch,
  isDisabled,
  isFullContent = !0,
  isLabelInValue,
  isLimitInputHeight,
  isLoading,
  isMultiple,
  isOpen,
  isPopupMatchSelectWidth,
  isShowSearch,
  isSubTitle,
  isTopContent,
  isTreeCheckStrictly,
  isTreeCheckable,
  isTreeDefaultExpandAll,
  isTreeIcon,
  isVirtual,
  maxLengthSearch,
  onSearch,
  onSearchFormat,
  optionsPage,
  placeholder = "Выберите значение",
  removeIcon,
  suffixIcon,
  treeData,
  treeNodeLabelProp,
  switcherIcon,
  minWidth = "50px",
  ...props
}) => {
  var _a, _b, _c, _d, _e;
  const { theme } = useTheme(), [isLoadingScroll, setIsLoadingScroll] = useState(!1), [searchValue, setSearchValue] = useState(""), [isMaxTag, setIsMaxTag] = useState(!1), [dropdownVisible, setDropdownVisible] = useState();
  let maxTagCount = props.maxTagCount, maxTagTextLength = props.maxTagTextLength;
  isTopContent && !isMaxTag && (maxTagCount = "responsive", props.maxTagTextLength || (maxTagTextLength = 10));
  const selectElement = (_a = document.querySelector(".ant-select-focused")) == null ? void 0 : _a.classList;
  useEffect(() => {
    !dropdownVisible && dropdownVisible !== void 0 ? selectElement == null || selectElement.remove("ant-select-focused") : isTopContent && setIsMaxTag(!0);
  }, [selectElement, dropdownVisible, isTopContent]);
  const iconSize = (_c = (_b = theme == null ? void 0 : theme.components) == null ? void 0 : _b.TreeSelect) == null ? void 0 : _c.iconSize, customClearIcon = typeof isAllowClear != "boolean" ? { clearIcon: isAllowClear == null ? void 0 : isAllowClear.clearIcon } : {}, selectStyle = {
    ...isFullContent ? { flex: 1, minWidth } : {},
    ...props == null ? void 0 : props.style
  }, getTreeData = /* @__PURE__ */ __name((tree = []) => tree == null ? void 0 : tree.map((tree2) => {
    var _a2;
    const childrenData = tree2 != null && tree2.children && ((_a2 = tree2 == null ? void 0 : tree2.children) == null ? void 0 : _a2.length) > 0 ? {
      children: getTreeData(tree2 == null ? void 0 : tree2.children)
    } : {};
    return {
      ...tree2,
      title: /* @__PURE__ */ __name((data) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.labelContent, children: [
        (tree2 == null ? void 0 : tree2.iconLabel) && React__default.cloneElement(tree2 == null ? void 0 : tree2.iconLabel, {
          className: styles.iconLabel
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: (tree2 == null ? void 0 : tree2.label) || (typeof (tree2 == null ? void 0 : tree2.title) == "function" ? tree2 == null ? void 0 : tree2.title(data) : tree2 == null ? void 0 : tree2.title) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.treeSubtext, children: (tree2 == null ? void 0 : tree2.subLabel) || (tree2 == null ? void 0 : tree2.value) })
        ] })
      ] }), "title"),
      label: /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip$1, { placement: "topLeft", title: tree2 == null ? void 0 : tree2.titlePopup, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.labelContent, children: [
        (tree2 == null ? void 0 : tree2.iconLabel) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.icon, children: React__default.cloneElement(tree2 == null ? void 0 : tree2.iconLabel, {
          className: styles.iconLabel
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.label, title: typeof (tree2 == null ? void 0 : tree2.label) == "string" ? tree2 == null ? void 0 : tree2.label : void 0, children: tree2 == null ? void 0 : tree2.label })
      ] }) }),
      ...childrenData
    };
  }), "getTreeData"), newTreeData = isSubTitle ? getTreeData(treeData) : treeData, handleScroll = /* @__PURE__ */ __name((e2) => {
    var _a2, _b2, _c2;
    ((_a2 = e2 == null ? void 0 : e2.currentTarget) == null ? void 0 : _a2.scrollHeight) - (((_b2 = e2 == null ? void 0 : e2.currentTarget) == null ? void 0 : _b2.scrollTop) + ((_c2 = e2 == null ? void 0 : e2.currentTarget) == null ? void 0 : _c2.clientHeight)) < 1 && optionsPage && (optionsPage == null ? void 0 : optionsPage.numberOfPages) >= (optionsPage == null ? void 0 : optionsPage.pageNumber) + 1 && (setIsLoadingScroll(!0), onSearch && onSearch(searchValue, (optionsPage == null ? void 0 : optionsPage.pageNumber) + 1));
  }, "handleScroll"), handleSearch = useCallback(
    (value, pageNumber) => {
      let newValueSearch = value;
      setIsLoadingScroll(!1), onSearchFormat && (newValueSearch = onSearchFormat(value)), maxLengthSearch && newValueSearch && (newValueSearch = newValueSearch == null ? void 0 : newValueSearch.slice(0, maxLengthSearch)), setSearchValue(newValueSearch), onSearch && onSearch(newValueSearch, pageNumber);
    },
    [onSearchFormat, maxLengthSearch, onSearch]
  ), debounceFetcher = useMemo(() => {
    const loadOptions = /* @__PURE__ */ __name((value) => {
      handleSearch(value);
    }, "loadOptions");
    return lodashExports.debounce(loadOptions, 800);
  }, [handleSearch]), handleDebounceSearch = /* @__PURE__ */ __name((value) => {
    const newValueSearch = onSearchFormat ? onSearchFormat(value) : value;
    setSearchValue(newValueSearch), debounceFetcher(newValueSearch);
  }, "handleDebounceSearch"), handleFocus = /* @__PURE__ */ __name((e2) => {
    e2.preventDefault(), isTopContent && setIsMaxTag(!0), props.onFocus && props.onFocus(e2);
  }, "handleFocus"), handleBlur = /* @__PURE__ */ __name((e2) => {
    e2.preventDefault(), isTopContent && setIsMaxTag(!1), props.onBlur && props.onBlur(e2);
  }, "handleBlur");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Space.Compact, { style: isFullContent ? { maxWidth: "100%", display: "flex" } : {}, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TreeSelect$1,
      {
        ...props,
        allowClear: isAllowClear && {
          clearIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconX, { width: iconSize, height: iconSize, stroke: 1.5 }),
          ...customClearIcon
        },
        className: cn(props.className, {
          [styles.selectMultipleItm]: isMultiple,
          [styles.selectPosition]: isTopContent && isMaxTag,
          [styles.selectScroll]: isLimitInputHeight,
          [styles.selectScrollSm]: isLimitInputHeight && props.size === "small",
          [styles.selectScrollLg]: isLimitInputHeight && props.size === "large"
        }),
        popupClassName: cn(props.popupClassName, {
          [styles.popupSub]: isSubTitle
        }),
        open: isOpen,
        popupMatchSelectWidth: isPopupMatchSelectWidth,
        listHeight: (_e = (_d = theme == null ? void 0 : theme.components) == null ? void 0 : _d.TreeSelect) == null ? void 0 : _e.menuMaxHeight,
        style: selectStyle,
        treeData: newTreeData,
        searchValue,
        maxTagCount,
        maxTagTextLength,
        onFocus: handleFocus,
        onBlur: handleBlur,
        autoFocus: props.autoFocus || dropdownVisible && isTopContent,
        maxTagPlaceholder: /* @__PURE__ */ __name((omittedValues) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip$1, { overlayStyle: { pointerEvents: "none" }, title: omittedValues.map(({ label: label2 }) => label2).join(", "), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: `+${omittedValues == null ? void 0 : omittedValues.length}` }) }), "maxTagPlaceholder"),
        notFoundContent: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: props.notFoundContent ?? /* @__PURE__ */ jsxRuntimeExports.jsx(Empty$1, { image: Empty.PRESENTED_IMAGE_SIMPLE, description: "Записи не найдены" }) }),
        onDropdownVisibleChange: /* @__PURE__ */ __name((visible) => {
          var _a2;
          visible || setIsMaxTag(!1), setDropdownVisible(visible), (_a2 = props == null ? void 0 : props.onDropdownVisibleChange) == null || _a2.call(props, visible);
        }, "onDropdownVisibleChange"),
        treeNodeLabelProp: isSubTitle ? treeNodeLabelProp || "label" : treeNodeLabelProp,
        autoClearSearchValue: isAutoClearSearchValue,
        disabled: isDisabled,
        labelInValue: isLabelInValue,
        multiple: isMultiple,
        dropdownRender: /* @__PURE__ */ __name((menu2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          isLoading && !isLoadingScroll ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1, { loading: isLoading && !isLoadingScroll, active: !0 }) : menu2,
          isLoadingScroll && isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1, { loading: isLoading && isLoadingScroll, active: !0 })
        ] }), "dropdownRender"),
        removeIcon: removeIcon ?? /* @__PURE__ */ jsxRuntimeExports.jsx(IconX, { width: 10, height: 10, stroke: 1.5 }),
        suffixIcon: suffixIcon !== null ? suffixIcon ?? /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronDown, { width: iconSize, height: iconSize, stroke: 1.5 }) : null,
        switcherIcon: switcherIcon || ((props2) => /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultTreeExpandIcon, { expanded: props2.expanded })),
        showSearch: isShowSearch,
        onPopupScroll: handleScroll,
        onSearch: isDebounceSearch ? handleDebounceSearch : handleSearch,
        placeholder,
        treeCheckable: isTreeCheckable,
        treeCheckStrictly: isTreeCheckStrictly,
        treeDefaultExpandAll: isTreeDefaultExpandAll,
        treeIcon: isTreeIcon,
        virtual: isVirtual,
        filterTreeNode: isDebounceSearch ? !1 : props == null ? void 0 : props.filterTreeNode
      }
    ),
    compactAddonAfter && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.compactAfter, children: compactAddonAfter })
  ] });
}, "TreeSelect");
instance.init({
  resources
});
export {
  Accordion,
  Alert,
  AutoComplete,
  AvatarSkeleton,
  Badge,
  Breadcrumbs,
  Button$1 as Button,
  ButtonSkeleton,
  ButtonsGroup,
  cl as Card,
  cf as Checkbox,
  CheckboxGroup,
  CodeBlock,
  Col,
  Collapse,
  Content,
  b_ as DEFAULT_THEME,
  bZ as DEFAULT_THEME_ID,
  c1 as DatePicker,
  Divider,
  Drawer2 as Drawer,
  Dropdown,
  DropdownButton,
  Empty$1 as Empty,
  FileInput,
  Filter,
  Flex,
  FloatAutoComplete,
  c7 as FloatInput,
  FloatSelect,
  Footer,
  c5 as Form,
  c4 as FormItem,
  GlobalNotificationContext,
  GlobalNotificationProvider,
  cm as Header,
  Icon$1 as Icon,
  Image,
  ImageSkeleton,
  Input$1 as Input,
  c6 as InputComponent,
  cb as InputNumber,
  InputSearch,
  ca as InputSearchComponent,
  InputSkeleton,
  Label,
  Layout,
  Link,
  List,
  c9 as MaskedInput,
  ce as MaskedTextArea,
  Menu,
  Modal,
  ModalButton,
  ModalDocument,
  MultiExpandTable,
  cc as MultipleSelect,
  cj as NCommonTable,
  ck as NTypography,
  NodeSkeleton,
  PageSpinner,
  Pagination,
  Paragraph,
  cg as Popover,
  ch as PopoverTitle,
  PreviewGroup,
  Progress,
  Radio,
  RadioButton,
  RadioGroup,
  c2 as RangePicker,
  Row,
  ScrollArea,
  ci as Segmented,
  Select$1 as Select,
  Sider,
  SiderPanel,
  Skeleton,
  Space,
  Steps,
  Switch,
  bY as THEME_LOCAL_STORAGE_PROP_DEFAULT_NAME,
  Table,
  Tabs,
  Tag,
  Text,
  cd as TextArea,
  c0 as ThemeContext,
  ThemeProvider,
  b$ as ThemeRegistry,
  c3 as TimePicker,
  Title,
  Tooltip$1 as Tooltip,
  Transfer,
  Tree,
  TreeSelect,
  c8 as conversionMaskedValue,
  bW as registerTheme,
  useModal,
  useNotification,
  useTheme,
  bX as useThemeRegistry
};
