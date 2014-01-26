// var data_json = '{"1" : {"1" : "a", "2" : "b" , "3" : "c"},"2" : {"1" : "d", "2" : "e" , "3" : "f"},"3" : {"1" : "g", "2" : "h" , "3" : "i"}}';

function convertJSON2dArray(data_json){
	var data = eval('(' + data_json + ')');

	//convert json into 2D-array
	var result = [];
	for( var i in data){
		var row = [];
		for(var j in data[i]){
			row.push(data[i][j]);
		}
		result.push(row);
	}

	return result;
}