#!/usr/bin/python
# coding: utf-8

import json

class Member:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return "'"+str(self.name)+"'"

class Position:
    def __init__(self, Members):
        self.Members = Members

    def __str__(self):
        s = "{"
        i = 0
        for mem in self.Members:
            s += "'"+str(i)+"'"+": "+str(mem)+(", " if i < len(self.Members)-1 else "")
            i += 1
        return s+"}"

class Axis:
    """ n: 0 for columns, 1 for rows"""
    def __init__(self, n):
        self.n = n
        self.Positions = []

    def __str__(self):
        s = "{"
        i = 0
        for pos in self.Positions:
            s += "'"+str(i)+"'"+": "+str(pos)+(", " if i < len(self.Positions)-1 else "")
            i += 1
        return s+"}"

class CellSet:
    """docstring for ClassName"""
    def __init__(self, nAxis):
        self.nAxis = nAxis
        self.axis = []
        for i in range(0, nAxis):
            self.axis.append(Axis(i))

    def __repr__(self):
        s = "{"
        i = 0
        for axis in self.axis:
            s += "'"+str(i)+"'"+": "+str(axis)+(", " if i < len(self.axis)-1 else "")
            i += 1
        return s+"}"

    def __str__(self):
        return self.__repr__()

def jdefault(o):
    return o.__dict__

if __name__ == '__main__':
    position_months = Position([
        Member("Jan"), Member("Jan"), 
        Member("Feb"), Member("Feb"), 
        Member("Mar"), Member("Mar"), 
        Member("Apr"), Member("Apr")
        ])
    position_measures = Position([
        Member("pnl"), Member("count"),
        Member("pnl"), Member("count"),
        Member("pnl"), Member("count"),
        Member("pnl"), Member("count")
        ])
    position_country = Position([Member("France"), Member("USA"), Member("Japan"), Member("England"), Member("Italy")])
    cellSet = CellSet(2)
    cellSet.axis[0].Positions = [position_country]
    cellSet.axis[1].Positions = [position_months, position_measures] # CJ, becareful, the members of the first position 
    # have to be doubled in this case and the two positions must have the same length
    print "CellSet:"
    print "As a string: " + str(cellSet)
    print json.dumps(cellSet, default=jdefault) 
    print json.dumps(cellSet, default=jdefault, sort_keys=True, indent=4, separators=(',', ': '))

    # print json.dumps({0: {0: 0, 1: 0, 2: 7}, 1: {0: 3, 1: 3, 2: 5}, 2: {0: 3, 1: 1, 2: 7}}, indent=4, separators=(',', ': '))
