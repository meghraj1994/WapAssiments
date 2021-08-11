$(() => {
  const clearMsg = () => $("#msg").text("");

  const success = (e) => {
    $("#question").text(e.answer);
    $("#msg").text("Question replaced with Answer");
    $("#question").focus();
    $("#question").select();
    setTimeout(clearMsg, 3000);
  };

  const failure = () => {
    $("#msg").text("Unable to connect with server");
    setTimeout(clearMsg, 3000);
  };

  $("#8ball").submit(() => {
    const data = {
      question: $("#question").val(),
    };
    $.post({
      url: "/8ball",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
    })
      .done(success)
      .failur(failure);
    return false;
  });
});
