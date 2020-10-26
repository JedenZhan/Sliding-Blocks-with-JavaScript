let startEle = document.getElementById('start'),
    local    = new Local(),
    isStart  = false;

startEle.addEventListener('click', () => {
	if (!isStart) {
		local.start();
		isStart = true;
	};
});