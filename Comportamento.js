
google.charts.load('current', {'packages':['gantt']});
google.charts.setOnLoadCallback(drawChart);

function toMilliseconds(segunds) {
  return segunds * 1 * 1000;
}

function drawChart() {

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
    ['toTrain', 'Deslocamento até Carrossel  ', null, null, null, toMilliseconds(5), 100, null],
    ['music', 'Tempo Total ', 'smed', null, null, toMilliseconds(1597), 100, null],
    ['wait', 'Abastecimento Carrossel', , null, null, toMilliseconds(24), 100, 'toTrain'],
    ['1', 'Deslocamento até OLMA ',null, null, null, toMilliseconds(30), 100, 'wait'],
    ['2', ' Deslocamento até Carrossel', , null, null, toMilliseconds(19), 100, '1'],
    ['3', ' Abastecimento Carrossel', , null, null, toMilliseconds(80), 100, '2'],
    ['4', 'Programar painel principal ', , null, null, toMilliseconds(25), 100, '3'],
    ['5', 'Registrar troca de modelo', , null, null, toMilliseconds(30), 100, '4'],
    ['6', 'Acompanhar processo ', , null, null, toMilliseconds(35), 100, '5'],
    ['7', 'Programar painel principal ', , null, null, toMilliseconds(106), 100, '6'],
    ['8', ' Deslocamento até o painel da ST 112', , null, null, toMilliseconds(9), 100, '7'],
    ['9', 'Programar painel ST 112 ', , null, null, toMilliseconds(4), 100, '8'],
    ['10', 'Deslocamento até o painel da ST 82 ', , null, null, toMilliseconds(9), 100, '9'],
    ['B1', 'Programar painel da ST 82', , null, null, toMilliseconds(15), 100, '10'],
    ['11', ' Aplicar LOTO porta principal', , null, null, toMilliseconds(5), 100, 'B1'],
    ['12', 'Deslocamento até a ST 112 ', , null, null, toMilliseconds(4), 100, '11'],
    ['13', 'Setup manual da ST 112 ', , null, null, toMilliseconds(20), 100, '12'],
    ['14', 'Deslocamento até a ST 82 ', , null, null, toMilliseconds(5), 100, '13'],
    ['15', ' Setup manual da ST 82', , null, null, toMilliseconds(4), 100, '14'],
    ['16', 'Deslocamento até a porta principal ', , null, null, toMilliseconds(5), 100, '15'],
    ['17', 'Encerrar LOTO porta principal ', , null, null, toMilliseconds(4), 100, '16'],
    ['18', ' Programar painel principal', , null, null, toMilliseconds(6), 100, '17'],
    ['19', 'Deslocamento até a OLMA ', , null, null, toMilliseconds(21), 100, '18'],
    ['20', 'Programar painel da ST estampagem ', , null, null, toMilliseconds(12), 100, '19'],
    ['21', 'Aplicar LOTO porta da estampagem ', , null, null, toMilliseconds(4), 100, '20'],
    ['22', 'Setup manual da estampagem ', , null, null, toMilliseconds(17), 100, '21'],
    ['23', 'Registrar troca de modelo ', , null, null, toMilliseconds(5), 100, '22'],
    ['24', 'Encerrar LOTO porta da estampagem', , null, null, toMilliseconds(5), 100, '23'],
    ['25', 'Programar painel da estampagem ', , null, null, toMilliseconds(2), 100, '24'],
    ['26', 'Deslocamento até painel corredor ', , null, null, toMilliseconds(6), 100, '25'],
    ['27', ' Programar painel corredor', , null, null, toMilliseconds(26), 100, '26'],
    ['28', 'Verificar processamento ', , null, null, toMilliseconds(45), 100, '27'],
    ['29', 'Deslocamento até dobra U ', , null, null, toMilliseconds(7), 100, '28'],
    ['30', 'Verificar processamento Dobra U ', , null, null, toMilliseconds(33), 100, '29'],
    ['31', 'Deslocamento até painel principal ', , null, null, toMilliseconds(57), 100, '30'],
    ['32', ' Programar painel', , null, null, toMilliseconds(6), 100, '31'],
    ['33', 'Deslocamento até painel da ST 82 ', , null, null, toMilliseconds(2), 100, '32'],
    ['34', 'Programar painel da ST 82 ', , null, null, toMilliseconds(7), 100, '33'],
    ['35', 'Aplicar LOTO portão principal ', , null, null, toMilliseconds(8), 100, '34'],
    ['36', 'Deslocamento até a ST 82 ', , null, null, toMilliseconds(3), 100, '35'],
    ['37', 'Ajuste manual ST 82 ', , null, null, toMilliseconds(8), 100, '36'],
    ['38', ' Deslocamento até o portão principal', , null, null, toMilliseconds(2), 100, '37'],
    ['39', ' Encerrar LOTO portão principal', , null, null, toMilliseconds(4), 100, '38'],
    ['40', 'Programar painel principal ', , null, null, toMilliseconds(4), 100, '39'],
    ['41', ' Verificar processamento', , null, null, toMilliseconds(23), 100, '40'],
    ['42', 'Aplicar LOTO portão principal ', , null, null, toMilliseconds(5), 100, '41'],
    ['43', 'Deslocamento até a ST 82 ', , null, null, toMilliseconds(1), 100, '42'],
    ['50', 'Ajuste manual ST 82 ', , null, null, toMilliseconds(10), 100, '43'],
    ['51', 'Deslocamento até o armário de ferramentas ', , null, null, toMilliseconds(11), 100, '50'],
    ['52', 'Pegar ferramentas ', , null, null, toMilliseconds(6), 100, '51'],
    ['53', 'Deslocamento até a ST 82 ', , null, null, toMilliseconds(7), 100, '52'],
    ['54', 'Ajuste manual ST 82 ', , null, null, toMilliseconds(16), 100, '53'],
    ['55', ' Deslocamento até o portão principal', , null, null, toMilliseconds(2), 100, '54'],
    ['56', 'Encerrar LOTO portão principal ', , null, null, toMilliseconds(4), 100, '55'],
    ['57', 'Programar painel principal ', , null, null, toMilliseconds(3), 100, '56'],
    ['58', ' Verificar processamento', , null, null, toMilliseconds(23), 100, '57'],
    ['59', ' Programar painel principal', , null, null, toMilliseconds(1), 100, '58'],
    ['60', 'Aplicar LOTO portão principal ', , null, null, toMilliseconds(5), 100, '59'],
    ['61', 'Deslocamento até a ST 82 ', , null, null, toMilliseconds(2), 100, '60'],
    ['62', 'Ajuste manual ST 82 ', , null, null, toMilliseconds(31), 100, '61'],
    ['63', ' Deslocamento até o portão principal', , null, null, toMilliseconds(2), 100, '62'],
    ['64', 'Encerrar LOTO portão principal ', , null, null, toMilliseconds(7), 100, '63'],
    ['65', 'Deslocamento até o painel principal ', , null, null, toMilliseconds(2), 100, '64'],
    ['66', 'Programar painel principal ', , null, null, toMilliseconds(19), 100, '65'],
    ['67', 'Programar painel da ST 82', , null, null, toMilliseconds(32), 100, '66'],
    ['68', 'Aplicar LOTO portão principal ', , null, null, toMilliseconds(4), 100, '67'],
    ['69', 'Deslocamento até o transfer (ST 9.3) ', , null, null, toMilliseconds(3), 100, '68'],
    ['70', 'Ajuste manual transfer (ST 9.3) ', , null, null, toMilliseconds(22), 100, '69'],
    ['71', 'Encerrar LOTO portão principal ', , null, null, toMilliseconds(3), 100, '70'],
    ['72', 'Programar painel principal ', , null, null, toMilliseconds(3), 100, '71'],
    ['73', 'Verificar processamento ', , null, null, toMilliseconds(66), 100, '72'],
    ['74', 'Deslocamento até saída da Sares 3 ', , null, null, toMilliseconds(16), 100, '73'],
    ['75', 'Verificar peça ', , null, null, toMilliseconds(240), 100, '74'],
    ['76', 'Deslocamento até o armário de ferramentas ', , null, null, toMilliseconds(31), 100, '75'],
    ['77', 'Pegar ferramentas ', , null, null, toMilliseconds(11), 100, '76'],
    ['78', 'Deslocamento até a porta principal ', , null, null, toMilliseconds(7), 100, '77'],
    ['79', ' Aplicar LOTO portão principal', , null, null, toMilliseconds(3), 100, '78'],
    ['80', 'Deslocamento até a ST 93/94 ', , null, null, toMilliseconds(2), 100, '79'],
    ['81', 'Ajuste manual ST 93/94', , null, null, toMilliseconds(166), 100, '80'],
    ['82', 'Deslocamento até a porta principal', , null, null, toMilliseconds(2), 100, '81'],
    ['B2', 'Encerrar LOTO portão principal', , null, null, toMilliseconds(4), 100, '82'],
    ['83', 'Programar painel principal', , null, null, toMilliseconds(12), 100, 'B2'],
    ['84', 'Verificar processamento ', , null, null, toMilliseconds(29), 100, '83'],
    ['85', 'Programar painel principal ', , null, null, toMilliseconds(6), 100, '84'],
    ['86', 'Deslocamento até o painel da ST 82 ', , null, null, toMilliseconds(6), 100, '85'],
    ['87', 'Programar painel da ST 82 ', , null, null, toMilliseconds(6), 100, '86'],
    



































  ]);

  var options = {
    height: 5000,
    width:  2000,
    source: 9,
    lines: 0.2,
    bars: 0.5,
    

   
    gantt: {
      defaultStartDateMillis: new Date(2015, 3, 28)
    }
  };

  var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

  chart.draw(otherData, options);
}