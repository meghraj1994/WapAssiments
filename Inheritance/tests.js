describe("filter", function () {
  it("Remove Banned Word Using filter", function () {
    assert.equal("This is nice house".filter("nice"), "This is house");
  });
});

describe("bubbleSort", function () {
  it("Returns sorted Array using bubble short", function () {
    assert.equal(
      [6, 4, 0, 3, -2, 1].bubbleSort().toString(),
      [-2, 0, 1, 3, 4, 6].toString()
    );
  });
});

describe("teach", function () {
  it("Returns the teacher name and her teaching course name", function () {
    let teacher = new Teacher();
    teacher.initialize("Meghraj", 26);
    assert.equal(teacher.teach("WAP"), `${teacher.name} is now teaching WAP`);
  });
});
