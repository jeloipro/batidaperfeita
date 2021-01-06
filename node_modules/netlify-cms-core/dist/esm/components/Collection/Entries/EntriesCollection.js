"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.filterNestedEntries = exports.EntriesCollection = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _partial2 = _interopRequireDefault(require("lodash/partial"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactImmutableProptypes = _interopRequireDefault(require("react-immutable-proptypes"));

var _reactRedux = require("react-redux");

var _reactPolyglot = require("react-polyglot");

var _netlifyCmsLibUtil = require("netlify-cms-lib-util");

var _netlifyCmsUiDefault = require("netlify-cms-ui-default");

var _entries = require("../../../actions/entries");

var _entries2 = require("../../../reducers/entries");

var _cursors = require("../../../reducers/cursors");

var _Entries = _interopRequireDefault(require("./Entries"));

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const GroupHeading = (0, _styledBase.default)("h2", {
  target: "e5mmq7y0",
  label: "GroupHeading"
})("font-size:23px;font-weight:600;color:", _netlifyCmsUiDefault.colors.textLead, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vRW50cmllcy9FbnRyaWVzQ29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQjhCIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vRW50cmllcy9FbnRyaWVzQ29sbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICdyZWFjdC1wb2x5Z2xvdCc7XG5pbXBvcnQgeyBwYXJ0aWFsIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEN1cnNvciB9IGZyb20gJ25ldGxpZnktY21zLWxpYi11dGlsJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJ25ldGxpZnktY21zLXVpLWRlZmF1bHQnO1xuaW1wb3J0IHtcbiAgbG9hZEVudHJpZXMgYXMgYWN0aW9uTG9hZEVudHJpZXMsXG4gIHRyYXZlcnNlQ29sbGVjdGlvbkN1cnNvciBhcyBhY3Rpb25UcmF2ZXJzZUNvbGxlY3Rpb25DdXJzb3IsXG59IGZyb20gJ0FjdGlvbnMvZW50cmllcyc7XG5pbXBvcnQge1xuICBzZWxlY3RFbnRyaWVzLFxuICBzZWxlY3RFbnRyaWVzTG9hZGVkLFxuICBzZWxlY3RJc0ZldGNoaW5nLFxuICBzZWxlY3RHcm91cHMsXG59IGZyb20gJy4uLy4uLy4uL3JlZHVjZXJzL2VudHJpZXMnO1xuaW1wb3J0IHsgc2VsZWN0Q29sbGVjdGlvbkVudHJpZXNDdXJzb3IgfSBmcm9tICdSZWR1Y2Vycy9jdXJzb3JzJztcbmltcG9ydCBFbnRyaWVzIGZyb20gJy4vRW50cmllcyc7XG5cbmNvbnN0IEdyb3VwSGVhZGluZyA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogJHtjb2xvcnMudGV4dExlYWR9O1xuYDtcblxuY29uc3QgR3JvdXBDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XG5cbmNvbnN0IGdldEdyb3VwRW50cmllcyA9IChlbnRyaWVzLCBwYXRocykgPT4ge1xuICByZXR1cm4gZW50cmllcy5maWx0ZXIoZW50cnkgPT4gcGF0aHMuaGFzKGVudHJ5LmdldCgncGF0aCcpKSk7XG59O1xuXG5jb25zdCBnZXRHcm91cFRpdGxlID0gKGdyb3VwLCB0KSA9PiB7XG4gIGNvbnN0IHsgbGFiZWwsIHZhbHVlIH0gPSBncm91cDtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdCgnY29sbGVjdGlvbi5ncm91cHMub3RoZXInKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gdmFsdWUgPyBsYWJlbCA6IHQoJ2NvbGxlY3Rpb24uZ3JvdXBzLm5lZ2F0ZUxhYmVsJywgeyBsYWJlbCB9KTtcbiAgfVxuICByZXR1cm4gYCR7bGFiZWx9ICR7dmFsdWV9YC50cmltKCk7XG59O1xuXG5jb25zdCB3aXRoR3JvdXBzID0gKGdyb3VwcywgZW50cmllcywgRW50cmllc1RvUmVuZGVyLCB0KSA9PiB7XG4gIHJldHVybiBncm91cHMubWFwKGdyb3VwID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGdldEdyb3VwVGl0bGUoZ3JvdXAsIHQpO1xuICAgIHJldHVybiAoXG4gICAgICA8R3JvdXBDb250YWluZXIga2V5PXtncm91cC5pZH0gaWQ9e2dyb3VwLmlkfT5cbiAgICAgICAgPEdyb3VwSGVhZGluZz57dGl0bGV9PC9Hcm91cEhlYWRpbmc+XG4gICAgICAgIDxFbnRyaWVzVG9SZW5kZXIgZW50cmllcz17Z2V0R3JvdXBFbnRyaWVzKGVudHJpZXMsIGdyb3VwLnBhdGhzKX0gLz5cbiAgICAgIDwvR3JvdXBDb250YWluZXI+XG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY2xhc3MgRW50cmllc0NvbGxlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbGxlY3Rpb246IEltbXV0YWJsZVByb3BUeXBlcy5tYXAuaXNSZXF1aXJlZCxcbiAgICBwYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudHJpZXM6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIGdyb3VwczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGlzRmV0Y2hpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgdmlld1N0eWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGN1cnNvcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGxvYWRFbnRyaWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRyYXZlcnNlQ29sbGVjdGlvbkN1cnNvcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBlbnRyaWVzTG9hZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNvbGxlY3Rpb24sIGVudHJpZXNMb2FkZWQsIGxvYWRFbnRyaWVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChjb2xsZWN0aW9uICYmICFlbnRyaWVzTG9hZGVkKSB7XG4gICAgICBsb2FkRW50cmllcyhjb2xsZWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3QgeyBjb2xsZWN0aW9uLCBlbnRyaWVzTG9hZGVkLCBsb2FkRW50cmllcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoY29sbGVjdGlvbiAhPT0gcHJldlByb3BzLmNvbGxlY3Rpb24gJiYgIWVudHJpZXNMb2FkZWQpIHtcbiAgICAgIGxvYWRFbnRyaWVzKGNvbGxlY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUN1cnNvckFjdGlvbnMgPSAoY3Vyc29yLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCB7IGNvbGxlY3Rpb24sIHRyYXZlcnNlQ29sbGVjdGlvbkN1cnNvciB9ID0gdGhpcy5wcm9wcztcbiAgICB0cmF2ZXJzZUNvbGxlY3Rpb25DdXJzb3IoY29sbGVjdGlvbiwgYWN0aW9uKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb2xsZWN0aW9uLCBlbnRyaWVzLCBncm91cHMsIGlzRmV0Y2hpbmcsIHZpZXdTdHlsZSwgY3Vyc29yLCBwYWdlLCB0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgRW50cmllc1RvUmVuZGVyID0gKHsgZW50cmllcyB9KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RW50cmllc1xuICAgICAgICAgIGNvbGxlY3Rpb25zPXtjb2xsZWN0aW9ufVxuICAgICAgICAgIGVudHJpZXM9e2VudHJpZXN9XG4gICAgICAgICAgaXNGZXRjaGluZz17aXNGZXRjaGluZ31cbiAgICAgICAgICBjb2xsZWN0aW9uTmFtZT17Y29sbGVjdGlvbi5nZXQoJ2xhYmVsJyl9XG4gICAgICAgICAgdmlld1N0eWxlPXt2aWV3U3R5bGV9XG4gICAgICAgICAgY3Vyc29yPXtjdXJzb3J9XG4gICAgICAgICAgaGFuZGxlQ3Vyc29yQWN0aW9ucz17cGFydGlhbCh0aGlzLmhhbmRsZUN1cnNvckFjdGlvbnMsIGN1cnNvcil9XG4gICAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGlmIChncm91cHMgJiYgZ3JvdXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB3aXRoR3JvdXBzKGdyb3VwcywgZW50cmllcywgRW50cmllc1RvUmVuZGVyLCB0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gPEVudHJpZXNUb1JlbmRlciBlbnRyaWVzPXtlbnRyaWVzfSAvPjtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmlsdGVyTmVzdGVkRW50cmllcyA9IChwYXRoLCBjb2xsZWN0aW9uRm9sZGVyLCBlbnRyaWVzKSA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkID0gZW50cmllcy5maWx0ZXIoZSA9PiB7XG4gICAgY29uc3QgZW50cnlQYXRoID0gZS5nZXQoJ3BhdGgnKS5zdWJzdHJpbmcoY29sbGVjdGlvbkZvbGRlci5sZW5ndGggKyAxKTtcbiAgICBpZiAoIWVudHJ5UGF0aC5zdGFydHNXaXRoKHBhdGgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gb25seSBzaG93IGltbWVkaWF0ZSBjaGlsZHJlblxuICAgIGlmIChwYXRoKSB7XG4gICAgICAvLyBub24gcm9vdCBwYXRoXG4gICAgICBjb25zdCB0cmltbWVkID0gZW50cnlQYXRoLnN1YnN0cmluZyhwYXRoLmxlbmd0aCArIDEpO1xuICAgICAgcmV0dXJuIHRyaW1tZWQuc3BsaXQoJy8nKS5sZW5ndGggPT09IDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHJvb3QgcGF0aFxuICAgICAgcmV0dXJuIGVudHJ5UGF0aC5zcGxpdCgnLycpLmxlbmd0aCA8PSAyO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmaWx0ZXJlZDtcbn07XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgY29uc3QgeyBjb2xsZWN0aW9uLCB2aWV3U3R5bGUsIGZpbHRlclRlcm0gfSA9IG93blByb3BzO1xuICBjb25zdCBwYWdlID0gc3RhdGUuZW50cmllcy5nZXRJbihbJ3BhZ2VzJywgY29sbGVjdGlvbi5nZXQoJ25hbWUnKSwgJ3BhZ2UnXSk7XG5cbiAgbGV0IGVudHJpZXMgPSBzZWxlY3RFbnRyaWVzKHN0YXRlLmVudHJpZXMsIGNvbGxlY3Rpb24pO1xuICBjb25zdCBncm91cHMgPSBzZWxlY3RHcm91cHMoc3RhdGUuZW50cmllcywgY29sbGVjdGlvbik7XG5cbiAgaWYgKGNvbGxlY3Rpb24uaGFzKCduZXN0ZWQnKSkge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25Gb2xkZXIgPSBjb2xsZWN0aW9uLmdldCgnZm9sZGVyJyk7XG4gICAgZW50cmllcyA9IGZpbHRlck5lc3RlZEVudHJpZXMoZmlsdGVyVGVybSB8fCAnJywgY29sbGVjdGlvbkZvbGRlciwgZW50cmllcyk7XG4gIH1cbiAgY29uc3QgZW50cmllc0xvYWRlZCA9IHNlbGVjdEVudHJpZXNMb2FkZWQoc3RhdGUuZW50cmllcywgY29sbGVjdGlvbi5nZXQoJ25hbWUnKSk7XG4gIGNvbnN0IGlzRmV0Y2hpbmcgPSBzZWxlY3RJc0ZldGNoaW5nKHN0YXRlLmVudHJpZXMsIGNvbGxlY3Rpb24uZ2V0KCduYW1lJykpO1xuXG4gIGNvbnN0IHJhd0N1cnNvciA9IHNlbGVjdENvbGxlY3Rpb25FbnRyaWVzQ3Vyc29yKHN0YXRlLmN1cnNvcnMsIGNvbGxlY3Rpb24uZ2V0KCduYW1lJykpO1xuICBjb25zdCBjdXJzb3IgPSBDdXJzb3IuY3JlYXRlKHJhd0N1cnNvcikuY2xlYXJEYXRhKCk7XG5cbiAgcmV0dXJuIHsgY29sbGVjdGlvbiwgcGFnZSwgZW50cmllcywgZ3JvdXBzLCBlbnRyaWVzTG9hZGVkLCBpc0ZldGNoaW5nLCB2aWV3U3R5bGUsIGN1cnNvciB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvYWRFbnRyaWVzOiBhY3Rpb25Mb2FkRW50cmllcyxcbiAgdHJhdmVyc2VDb2xsZWN0aW9uQ3Vyc29yOiBhY3Rpb25UcmF2ZXJzZUNvbGxlY3Rpb25DdXJzb3IsXG59O1xuXG5jb25zdCBDb25uZWN0ZWRFbnRyaWVzQ29sbGVjdGlvbiA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEVudHJpZXNDb2xsZWN0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNsYXRlKCkoQ29ubmVjdGVkRW50cmllc0NvbGxlY3Rpb24pO1xuIl19 */"));
const GroupContainer = (0, _styledBase.default)("div", {
  target: "e5mmq7y1",
  label: "GroupContainer"
})(process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vRW50cmllcy9FbnRyaWVzQ29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QmlDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vRW50cmllcy9FbnRyaWVzQ29sbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICdyZWFjdC1wb2x5Z2xvdCc7XG5pbXBvcnQgeyBwYXJ0aWFsIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEN1cnNvciB9IGZyb20gJ25ldGxpZnktY21zLWxpYi11dGlsJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJ25ldGxpZnktY21zLXVpLWRlZmF1bHQnO1xuaW1wb3J0IHtcbiAgbG9hZEVudHJpZXMgYXMgYWN0aW9uTG9hZEVudHJpZXMsXG4gIHRyYXZlcnNlQ29sbGVjdGlvbkN1cnNvciBhcyBhY3Rpb25UcmF2ZXJzZUNvbGxlY3Rpb25DdXJzb3IsXG59IGZyb20gJ0FjdGlvbnMvZW50cmllcyc7XG5pbXBvcnQge1xuICBzZWxlY3RFbnRyaWVzLFxuICBzZWxlY3RFbnRyaWVzTG9hZGVkLFxuICBzZWxlY3RJc0ZldGNoaW5nLFxuICBzZWxlY3RHcm91cHMsXG59IGZyb20gJy4uLy4uLy4uL3JlZHVjZXJzL2VudHJpZXMnO1xuaW1wb3J0IHsgc2VsZWN0Q29sbGVjdGlvbkVudHJpZXNDdXJzb3IgfSBmcm9tICdSZWR1Y2Vycy9jdXJzb3JzJztcbmltcG9ydCBFbnRyaWVzIGZyb20gJy4vRW50cmllcyc7XG5cbmNvbnN0IEdyb3VwSGVhZGluZyA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogJHtjb2xvcnMudGV4dExlYWR9O1xuYDtcblxuY29uc3QgR3JvdXBDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XG5cbmNvbnN0IGdldEdyb3VwRW50cmllcyA9IChlbnRyaWVzLCBwYXRocykgPT4ge1xuICByZXR1cm4gZW50cmllcy5maWx0ZXIoZW50cnkgPT4gcGF0aHMuaGFzKGVudHJ5LmdldCgncGF0aCcpKSk7XG59O1xuXG5jb25zdCBnZXRHcm91cFRpdGxlID0gKGdyb3VwLCB0KSA9PiB7XG4gIGNvbnN0IHsgbGFiZWwsIHZhbHVlIH0gPSBncm91cDtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdCgnY29sbGVjdGlvbi5ncm91cHMub3RoZXInKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gdmFsdWUgPyBsYWJlbCA6IHQoJ2NvbGxlY3Rpb24uZ3JvdXBzLm5lZ2F0ZUxhYmVsJywgeyBsYWJlbCB9KTtcbiAgfVxuICByZXR1cm4gYCR7bGFiZWx9ICR7dmFsdWV9YC50cmltKCk7XG59O1xuXG5jb25zdCB3aXRoR3JvdXBzID0gKGdyb3VwcywgZW50cmllcywgRW50cmllc1RvUmVuZGVyLCB0KSA9PiB7XG4gIHJldHVybiBncm91cHMubWFwKGdyb3VwID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGdldEdyb3VwVGl0bGUoZ3JvdXAsIHQpO1xuICAgIHJldHVybiAoXG4gICAgICA8R3JvdXBDb250YWluZXIga2V5PXtncm91cC5pZH0gaWQ9e2dyb3VwLmlkfT5cbiAgICAgICAgPEdyb3VwSGVhZGluZz57dGl0bGV9PC9Hcm91cEhlYWRpbmc+XG4gICAgICAgIDxFbnRyaWVzVG9SZW5kZXIgZW50cmllcz17Z2V0R3JvdXBFbnRyaWVzKGVudHJpZXMsIGdyb3VwLnBhdGhzKX0gLz5cbiAgICAgIDwvR3JvdXBDb250YWluZXI+XG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY2xhc3MgRW50cmllc0NvbGxlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbGxlY3Rpb246IEltbXV0YWJsZVByb3BUeXBlcy5tYXAuaXNSZXF1aXJlZCxcbiAgICBwYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudHJpZXM6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIGdyb3VwczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGlzRmV0Y2hpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgdmlld1N0eWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGN1cnNvcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGxvYWRFbnRyaWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRyYXZlcnNlQ29sbGVjdGlvbkN1cnNvcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBlbnRyaWVzTG9hZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNvbGxlY3Rpb24sIGVudHJpZXNMb2FkZWQsIGxvYWRFbnRyaWVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChjb2xsZWN0aW9uICYmICFlbnRyaWVzTG9hZGVkKSB7XG4gICAgICBsb2FkRW50cmllcyhjb2xsZWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3QgeyBjb2xsZWN0aW9uLCBlbnRyaWVzTG9hZGVkLCBsb2FkRW50cmllcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoY29sbGVjdGlvbiAhPT0gcHJldlByb3BzLmNvbGxlY3Rpb24gJiYgIWVudHJpZXNMb2FkZWQpIHtcbiAgICAgIGxvYWRFbnRyaWVzKGNvbGxlY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUN1cnNvckFjdGlvbnMgPSAoY3Vyc29yLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCB7IGNvbGxlY3Rpb24sIHRyYXZlcnNlQ29sbGVjdGlvbkN1cnNvciB9ID0gdGhpcy5wcm9wcztcbiAgICB0cmF2ZXJzZUNvbGxlY3Rpb25DdXJzb3IoY29sbGVjdGlvbiwgYWN0aW9uKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb2xsZWN0aW9uLCBlbnRyaWVzLCBncm91cHMsIGlzRmV0Y2hpbmcsIHZpZXdTdHlsZSwgY3Vyc29yLCBwYWdlLCB0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgRW50cmllc1RvUmVuZGVyID0gKHsgZW50cmllcyB9KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RW50cmllc1xuICAgICAgICAgIGNvbGxlY3Rpb25zPXtjb2xsZWN0aW9ufVxuICAgICAgICAgIGVudHJpZXM9e2VudHJpZXN9XG4gICAgICAgICAgaXNGZXRjaGluZz17aXNGZXRjaGluZ31cbiAgICAgICAgICBjb2xsZWN0aW9uTmFtZT17Y29sbGVjdGlvbi5nZXQoJ2xhYmVsJyl9XG4gICAgICAgICAgdmlld1N0eWxlPXt2aWV3U3R5bGV9XG4gICAgICAgICAgY3Vyc29yPXtjdXJzb3J9XG4gICAgICAgICAgaGFuZGxlQ3Vyc29yQWN0aW9ucz17cGFydGlhbCh0aGlzLmhhbmRsZUN1cnNvckFjdGlvbnMsIGN1cnNvcil9XG4gICAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGlmIChncm91cHMgJiYgZ3JvdXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB3aXRoR3JvdXBzKGdyb3VwcywgZW50cmllcywgRW50cmllc1RvUmVuZGVyLCB0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gPEVudHJpZXNUb1JlbmRlciBlbnRyaWVzPXtlbnRyaWVzfSAvPjtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmlsdGVyTmVzdGVkRW50cmllcyA9IChwYXRoLCBjb2xsZWN0aW9uRm9sZGVyLCBlbnRyaWVzKSA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkID0gZW50cmllcy5maWx0ZXIoZSA9PiB7XG4gICAgY29uc3QgZW50cnlQYXRoID0gZS5nZXQoJ3BhdGgnKS5zdWJzdHJpbmcoY29sbGVjdGlvbkZvbGRlci5sZW5ndGggKyAxKTtcbiAgICBpZiAoIWVudHJ5UGF0aC5zdGFydHNXaXRoKHBhdGgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gb25seSBzaG93IGltbWVkaWF0ZSBjaGlsZHJlblxuICAgIGlmIChwYXRoKSB7XG4gICAgICAvLyBub24gcm9vdCBwYXRoXG4gICAgICBjb25zdCB0cmltbWVkID0gZW50cnlQYXRoLnN1YnN0cmluZyhwYXRoLmxlbmd0aCArIDEpO1xuICAgICAgcmV0dXJuIHRyaW1tZWQuc3BsaXQoJy8nKS5sZW5ndGggPT09IDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHJvb3QgcGF0aFxuICAgICAgcmV0dXJuIGVudHJ5UGF0aC5zcGxpdCgnLycpLmxlbmd0aCA8PSAyO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmaWx0ZXJlZDtcbn07XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgY29uc3QgeyBjb2xsZWN0aW9uLCB2aWV3U3R5bGUsIGZpbHRlclRlcm0gfSA9IG93blByb3BzO1xuICBjb25zdCBwYWdlID0gc3RhdGUuZW50cmllcy5nZXRJbihbJ3BhZ2VzJywgY29sbGVjdGlvbi5nZXQoJ25hbWUnKSwgJ3BhZ2UnXSk7XG5cbiAgbGV0IGVudHJpZXMgPSBzZWxlY3RFbnRyaWVzKHN0YXRlLmVudHJpZXMsIGNvbGxlY3Rpb24pO1xuICBjb25zdCBncm91cHMgPSBzZWxlY3RHcm91cHMoc3RhdGUuZW50cmllcywgY29sbGVjdGlvbik7XG5cbiAgaWYgKGNvbGxlY3Rpb24uaGFzKCduZXN0ZWQnKSkge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25Gb2xkZXIgPSBjb2xsZWN0aW9uLmdldCgnZm9sZGVyJyk7XG4gICAgZW50cmllcyA9IGZpbHRlck5lc3RlZEVudHJpZXMoZmlsdGVyVGVybSB8fCAnJywgY29sbGVjdGlvbkZvbGRlciwgZW50cmllcyk7XG4gIH1cbiAgY29uc3QgZW50cmllc0xvYWRlZCA9IHNlbGVjdEVudHJpZXNMb2FkZWQoc3RhdGUuZW50cmllcywgY29sbGVjdGlvbi5nZXQoJ25hbWUnKSk7XG4gIGNvbnN0IGlzRmV0Y2hpbmcgPSBzZWxlY3RJc0ZldGNoaW5nKHN0YXRlLmVudHJpZXMsIGNvbGxlY3Rpb24uZ2V0KCduYW1lJykpO1xuXG4gIGNvbnN0IHJhd0N1cnNvciA9IHNlbGVjdENvbGxlY3Rpb25FbnRyaWVzQ3Vyc29yKHN0YXRlLmN1cnNvcnMsIGNvbGxlY3Rpb24uZ2V0KCduYW1lJykpO1xuICBjb25zdCBjdXJzb3IgPSBDdXJzb3IuY3JlYXRlKHJhd0N1cnNvcikuY2xlYXJEYXRhKCk7XG5cbiAgcmV0dXJuIHsgY29sbGVjdGlvbiwgcGFnZSwgZW50cmllcywgZ3JvdXBzLCBlbnRyaWVzTG9hZGVkLCBpc0ZldGNoaW5nLCB2aWV3U3R5bGUsIGN1cnNvciB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvYWRFbnRyaWVzOiBhY3Rpb25Mb2FkRW50cmllcyxcbiAgdHJhdmVyc2VDb2xsZWN0aW9uQ3Vyc29yOiBhY3Rpb25UcmF2ZXJzZUNvbGxlY3Rpb25DdXJzb3IsXG59O1xuXG5jb25zdCBDb25uZWN0ZWRFbnRyaWVzQ29sbGVjdGlvbiA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEVudHJpZXNDb2xsZWN0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNsYXRlKCkoQ29ubmVjdGVkRW50cmllc0NvbGxlY3Rpb24pO1xuIl19 */");

const getGroupEntries = (entries, paths) => {
  return entries.filter(entry => paths.has(entry.get('path')));
};

const getGroupTitle = (group, t) => {
  const {
    label,
    value
  } = group;

  if (value === undefined) {
    return t('collection.groups.other');
  }

  if (typeof value === 'boolean') {
    return value ? label : t('collection.groups.negateLabel', {
      label
    });
  }

  return `${label} ${value}`.trim();
};

const withGroups = (groups, entries, EntriesToRender, t) => {
  return groups.map(group => {
    const title = getGroupTitle(group, t);
    return (0, _core.jsx)(GroupContainer, {
      key: group.id,
      id: group.id
    }, (0, _core.jsx)(GroupHeading, null, title), (0, _core.jsx)(EntriesToRender, {
      entries: getGroupEntries(entries, group.paths)
    }));
  });
};

class EntriesCollection extends _react.default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleCursorActions", (cursor, action) => {
      const {
        collection,
        traverseCollectionCursor
      } = this.props;
      traverseCollectionCursor(collection, action);
    });
  }

  componentDidMount() {
    const {
      collection,
      entriesLoaded,
      loadEntries
    } = this.props;

    if (collection && !entriesLoaded) {
      loadEntries(collection);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      collection,
      entriesLoaded,
      loadEntries
    } = this.props;

    if (collection !== prevProps.collection && !entriesLoaded) {
      loadEntries(collection);
    }
  }

  render() {
    const {
      collection,
      entries,
      groups,
      isFetching,
      viewStyle,
      cursor,
      page,
      t
    } = this.props;

    const EntriesToRender = ({
      entries
    }) => {
      return (0, _core.jsx)(_Entries.default, {
        collections: collection,
        entries: entries,
        isFetching: isFetching,
        collectionName: collection.get('label'),
        viewStyle: viewStyle,
        cursor: cursor,
        handleCursorActions: (0, _partial2.default)(this.handleCursorActions, cursor),
        page: page
      });
    };

    if (groups && groups.length > 0) {
      return withGroups(groups, entries, EntriesToRender, t);
    }

    return (0, _core.jsx)(EntriesToRender, {
      entries: entries
    });
  }

}

exports.EntriesCollection = EntriesCollection;

_defineProperty(EntriesCollection, "propTypes", {
  collection: _reactImmutableProptypes.default.map.isRequired,
  page: _propTypes.default.number,
  entries: _reactImmutableProptypes.default.list,
  groups: _propTypes.default.array,
  isFetching: _propTypes.default.bool.isRequired,
  viewStyle: _propTypes.default.string,
  cursor: _propTypes.default.object.isRequired,
  loadEntries: _propTypes.default.func.isRequired,
  traverseCollectionCursor: _propTypes.default.func.isRequired,
  entriesLoaded: _propTypes.default.bool
});

const filterNestedEntries = (path, collectionFolder, entries) => {
  const filtered = entries.filter(e => {
    const entryPath = e.get('path').substring(collectionFolder.length + 1);

    if (!entryPath.startsWith(path)) {
      return false;
    } // only show immediate children


    if (path) {
      // non root path
      const trimmed = entryPath.substring(path.length + 1);
      return trimmed.split('/').length === 2;
    } else {
      // root path
      return entryPath.split('/').length <= 2;
    }
  });
  return filtered;
};

exports.filterNestedEntries = filterNestedEntries;

function mapStateToProps(state, ownProps) {
  const {
    collection,
    viewStyle,
    filterTerm
  } = ownProps;
  const page = state.entries.getIn(['pages', collection.get('name'), 'page']);
  let entries = (0, _entries2.selectEntries)(state.entries, collection);
  const groups = (0, _entries2.selectGroups)(state.entries, collection);

  if (collection.has('nested')) {
    const collectionFolder = collection.get('folder');
    entries = filterNestedEntries(filterTerm || '', collectionFolder, entries);
  }

  const entriesLoaded = (0, _entries2.selectEntriesLoaded)(state.entries, collection.get('name'));
  const isFetching = (0, _entries2.selectIsFetching)(state.entries, collection.get('name'));
  const rawCursor = (0, _cursors.selectCollectionEntriesCursor)(state.cursors, collection.get('name'));

  const cursor = _netlifyCmsLibUtil.Cursor.create(rawCursor).clearData();

  return {
    collection,
    page,
    entries,
    groups,
    entriesLoaded,
    isFetching,
    viewStyle,
    cursor
  };
}

const mapDispatchToProps = {
  loadEntries: _entries.loadEntries,
  traverseCollectionCursor: _entries.traverseCollectionCursor
};
const ConnectedEntriesCollection = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EntriesCollection);

var _default = (0, _reactPolyglot.translate)()(ConnectedEntriesCollection);

exports.default = _default;