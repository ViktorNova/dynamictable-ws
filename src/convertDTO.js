
//Give the max length among members of the same hierarchy
//size of the array is the size of the positions array
function maxLengthPath(axis){
	var positions = axis.positions;
	var nPos = positions.length;
	var maxArray = [];
	var nMem = positions[0].members.length;
	for(var k = 0; k<nMem; k += 1){
		var max = 0;
		for(var j = 0; j<nPos; j += 1){
			var member = positions[j].members[k];
			var pathLength = member.path.path.length;
			if(member.path.path[0] == "AllMember"){
				pathLength -= 1;
			}
			if(max < pathLength){
				max = pathLength;   
			}
		}
		maxArray.push(max);
	}
	return maxArray;
}

function convert(cellSetDto){
	var n = cellSetDto.axes.length;
	for(var i = 0; i<n; i += 1){
	    var axis = cellSetDto.axes[i];
	    var max = maxLengthPath(axis);
	    // console.log(max);
		var positions = axis.positions;
		var nPos = positions.length;
		for(var j = 0; j<nPos; j += 1){
			var members = positions[j].members;
			var nMem = members.length;
			var dispNameTotal = null;
			for(var k = 0; k<nMem; k += 1){
			     var member = members[k];
			     var path = member.path.path;

			     //first condition to avoid AllMember member
			     if(member.path.path.length > 1 && k+1 < nMem && members[k+1].levelName == "ALL"){
			     	dispNameTotal = member.displayName;
			     	member.displayName = "Total "+dispNameTotal;
			     }else if(dispNameTotal != null && member.levelName == "ALL"){
			     	member.displayName = "Total "+dispNameTotal;
			     }

			     if(path.length > 2){
			         //it's a drilldown, need to cut
			         for(var l = 1; l<path.length-1; l +=1){
			             members.splice(k, 0, {"displayName":path[l]});
			         }
			     }
			     else{
			         for(var l = 0; l<max[k]-1; l +=1){
			             members.splice(k, 0, {"displayName":member.displayName});
			         }
			     }
			}
		}
	}
}
