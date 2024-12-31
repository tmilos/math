
const root = $('#root');
for (let cnt = 0; cnt < 50; cnt++) {
  const [a, b, c, x1, x2] = generateQuadraticBinome(true);
  root.append(`
  <tr data-x="${x1},${x2}">
    <td>
      <tt>${a == 1 ? '' : a}x<sup>2</sup> ${plusMinus(b)}x ${plusMinus(c)} = 0</tt>
    </td>
    <td>&nbsp;</td>
    <td>
      <input type="text"/>
    </td>
    <td>
      <input type="text"/>
    </td>
    <td class="icon">
      ${questionMark()}
    </td>
  </tr>\n`);
}

function isCorrect(correct, answers) {
  if (correct[0] == answers[0] && correct[1] == answers[1]) {
    return true;
  }
  if (correct[0] == answers[1] && correct[1] == answers[0]) {
    return true;
  }
  return false;
}

$('#root input').on('change', function(e) {
  const correct = $(e.target).parents('tr').data('x').split(',');
  const answers = [];
  $(e.target).parents('tr').find('input').each(function() {
    answers.push($(this).val());
  })
  console.log(correct);
  console.log(answers);
  if (answers[0] == '' || answers[1] == '') {
    $(e.target).parents('tr').find('.icon').html(questionMark());
  } else if (isCorrect(correct, answers)) {
    $(e.target).parents('tr').find('.icon').html(check());
  } else {
    $(e.target).parents('tr').find('.icon').html(cross());
    $('#horse')[0].play();
  }
});
