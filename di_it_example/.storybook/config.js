import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/InputStory');
  require('../src/stories/ReduxStory');
  require('../src/stories/FormStory');
  // 이 곳에 스토리 파일을 추가할 수 있다.
}

configure(loadStories, module);