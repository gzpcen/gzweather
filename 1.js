console.log("json文件数据", gz_shorttime);
console.log("json文件数据", gz_obtStatistics);
var k = gz_livingIndex;
var st = gz_shorttime;
var jz = gz_obtStatistics;
kg = "&nbsp;&nbsp;";
tip = st.forecast;
d = document;
t1 = "最高温度：" + jz.maxt_n + kg + jz.maxt_v + "℃";
t2 = "最低温度：" + jz.mint_n + kg + jz.mint_v + "℃";
r1 = "最大雨量：" + jz.maxrain_n + kg + jz.maxrain_v + "mm";
w1 = "最大风速：" + jz.maxwind_n + kg + jz.maxwind_v + "m/s";
uv = "最高"+k.ultraviolet.index+"级，"+k.ultraviolet.level
fi = k.fireDanger.info
um = k.umbrella.umbrella
ft = k.bodyComfortable.airT
fh = k.bodyComfortable.rH
mb = k.mildew.index
d.getElementById("info").innerHTML = tip;
d.getElementById("tm").innerHTML = t1;
d.getElementById("tmi").innerHTML = t2;
d.getElementById("rm").innerHTML = r1;
d.getElementById("wm").innerHTML = w1;
d.getElementById("uv").innerHTML = uv;
d.getElementById("fi").innerHTML = fi;
d.getElementById("um").innerHTML = um;
d.getElementById("ft").innerHTML = ft;
d.getElementById("fh").innerHTML = fh;
d.getElementById("mb").innerHTML = mb;
