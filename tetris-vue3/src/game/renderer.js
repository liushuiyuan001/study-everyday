import { gameRow, gameCol } from './config'
export function render(box, map) {
	reset(map)
	_render(box, map)
}

function reset(map) {
	for (let i = 0; i < gameRow; i++) {
		for (let j = 0; j < gameCol; j++) {
			if (map[i][j] > 0) {
				map[i][j] = 0
			}
		}
	}
}
function _render(box, map) {
	const row = box.shape.length
	const col = box.shape[0].length
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			const x = box.y + i
			const y = box.x + j
			if (box.shape[i][j] > 0) {
				map[x][y] = 1 // color 
			}
		}
	}
}