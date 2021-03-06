const axios = require('axios');

module.exports = async (ctx) => {
	const { data } = await axios.get(
		"https://api.live.bilibili.com/xlive/web-room/v1/dM/gethistory?roomid=21877310"
	);

	const result = getNewMessage(data.data.room)

	ctx.body = {
		state: 1,
		msg: "success",
		data: result
	}
}

let lastTs = 0;
function getNewMessage(rooms = []) {
	// 1. 记录最后一个时间戳
	// 2. 后续过来数据的话 只返回比这个时间戳大的数据

	let result = rooms.filter(room => room.check_info.ts > lastTs)

	lastTs = rooms[rooms.length - 1].check_info.ts

	return result
}