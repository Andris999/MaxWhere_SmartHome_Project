"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maxwhere_1 = require("maxwhere");
const next_1 = require("@mxw/next");
module.exports.init = function () { };
module.exports.done = function (nodeReturnedByRenderFunction) { };
module.exports.render = function (options) {
    this.gizmo = new next_1.Gizmo(options);
    return maxwhere_1.wom.create('node', {});
};
module.exports.clear = function () {
    this.gizmo.clear();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSx1Q0FZa0I7QUFDbEIsb0NBQW1EO0FBS25ELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLGNBQWEsQ0FBQyxDQUFDO0FBRXJDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFVBQVUsNEJBQWtDLElBQUcsQ0FBQyxDQUFDO0FBRXZFLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLFVBQVUsT0FBcUI7SUFDckQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFlBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxPQUFPLGNBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHO0lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDckIsQ0FBQyxDQUFDIn0=