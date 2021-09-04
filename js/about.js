var map = new BMapGL.Map('allmap'); // 创建Map实例
var point = new BMapGL.Point(119.389453, 32.397627);
map.centerAndZoom(point, 15); // 初始化地图,设置中心点坐标和地图级别
map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
var marker = new BMapGL.Marker(new BMapGL.Point(119.389453, 32.397627));
// 在地图上添加点标记
map.addOverlay(marker);
var opts = {
  width: 200, // 信息窗口宽度
  height: 60, // 信息窗口高度
  title: "国泰大厦", // 信息窗口标题
}
var infoWindow = new BMapGL.InfoWindow("地址：江苏省扬州市邗江区文昌西路450号国泰大厦1号楼20层", opts); // 创建信息窗口对象 
marker.addEventListener("click", function () {
  map.openInfoWindow(infoWindow, point); //开启信息窗口
});