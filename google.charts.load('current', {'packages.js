google.charts.load('current', {'packages':['gantt']});
google.charts.setOnLoadCallback(drawChart);

function toMilliseconds(seconds) {
  return seconds * 100 * 10;
}

function drawChart() {00 * 5

  var otherData = new google.visualization.DataTable();
  otherData.addColumn('string', 'Task ID');
  otherData.addColumn('string', 'Task Name');
  otherData.addColumn('string', 'Resource');
  otherData.addColumn('date', 'Start');
  otherData.addColumn('date', 'End');
  otherData.addColumn('number', 'Duration');
  otherData.addColumn('number', 'Percent Complete');
  otherData.addColumn('string', 'Dependencies');

  otherData.addRows([
    ['toTrain', 'Deslocamento até Carrossel', 'walk', null, null, toMilliseconds(5), 100, null],
    ['music', 'Tempo Total', 'music', null, null, toMilliseconds(1166), 100, null],
    ['wait', 'Abastecimento Carrossel', 'wait', null, null, toMilliseconds(24), 100, 'toTrain'],
    ['train', 'Deslocamento até OLMA', 'train', null, null, toMilliseconds(30), 75, 'wait'],
    ['toWork', 'Deslocamento até Carrossel', 'walk', null, null, toMilliseconds(19), 0, 'train'],
    ['work', 'Abastecimento Carrossel', null, null, null, toMilliseconds(79), 0, 'toWork'],
   ['work', 'Sit down at desk', null, null, null, toMilliseconds(2), 0, 'toWork'],
['work', 'Sit down at desk', null, null, null, toMilliseconds(2), 0, 'toWork'],
  ]);

  var options = {
    height: 275,
    gantt: {
      defaultStartDateMillis: new Date(2015, 3, 28)
    }
  };

  var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

  chart.draw(otherData, options);
}