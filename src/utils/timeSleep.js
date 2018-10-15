async function timeSleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}

export default timeSleep;