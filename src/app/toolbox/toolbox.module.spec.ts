import { ToolboxModule } from './toolbox.module';

describe('ToolboxModule', () => {
  let toolboxModule: ToolboxModule;

  beforeEach(() => {
    toolboxModule = new ToolboxModule();
  });

  it('should create an instance', () => {
    expect(toolboxModule).toBeTruthy();
  });
});
