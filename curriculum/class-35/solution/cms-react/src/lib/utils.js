export const renderIf = (test, trueComponent = null, falseComponent = null) =>
  test ? trueComponent : falseComponent;
