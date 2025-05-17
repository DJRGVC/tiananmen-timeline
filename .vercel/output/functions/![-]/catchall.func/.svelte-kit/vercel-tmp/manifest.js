export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","data/text.json","favicon.png","images/2june.jpg","images/Chinese_Premier_Li_Peng_1996.jpg","images/Hu-YaoBang.jpg","images/PeoplesDailyEditorial26.jpg","images/Xidan-Democracy-Wall.jpg","images/death-hu.jpg","images/deng.jpg","images/fang-tiananmen.jpg","images/hunger-strike.jpg","images/tank-man.jpg","images/zhao.jpg"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.SrQDFzYY.js","app":"_app/immutable/entry/app.E6PG8zZG.js","imports":["_app/immutable/entry/start.SrQDFzYY.js","_app/immutable/chunks/entry.63WRjsu-.js","_app/immutable/chunks/scheduler.zEsWufrc.js","_app/immutable/chunks/paths.rdagAt6j.js","_app/immutable/entry/app.E6PG8zZG.js","_app/immutable/chunks/scheduler.zEsWufrc.js","_app/immutable/chunks/index.IZZh_heo.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
