const work1 = () => {
  new Promise((resolve) => {
    setTimeout(() => resolve('작업1 완료!'), 100);
  });
};
const work2 = () => {
  new Promise((resolve) => {
    setTimeout(() => resolve('작업2 완료!'), 200);
  });
};
const work1 = () => {
  new Promise((resolve) => {
    setTimeout(() => resolve('작업3 완료!'), 300);
  });
};

function urgentWork() {
  console.log('긴급 작업');
}

const nextWorkOnDone = (msg1) => {
  console.log('done after 100ms:' + msg1);
  return work2();
};

work1()
  .then