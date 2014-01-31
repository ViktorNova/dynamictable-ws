#!/usr/bin/python
# coding: utf-8

import json
import random

class Cells:
    def __init__(self, n, m):
        self.cells = [[random.randint(0,1000) for e in range(m)] for e in range(n)]

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
        self.cells = None
        self.axis = []
        for i in range(nAxis):
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
    cellSet = CellSet(2)
    cellSet.axis[1].Positions = [
    Position([Member("Jan"), Member("pnl")]),
    Position([Member("Jan"), Member("count")]), 
    Position([Member("Feb"), Member("pnl")]),
    Position([Member("Feb"), Member("count")]), 
    Position([Member("Mar"), Member("pnl")]),
    Position([Member("Mar"), Member("count")]),
    Position([Member("Apr"), Member("pnl")]),
    Position([Member("Apr"), Member("count")])
    ]
    cellSet.axis[0].Positions = [
    Position([Member("France")]),
    Position([Member("USA")]),
    # Position([Member("Japan")]),
    Position([Member("England")]),
    Position([Member("Italy")])
    ]

    cellSet.cells = Cells(8,4)
    print "CellSet:"
    print "As a string: " + str(cellSet)
    print json.dumps(cellSet, default=jdefault) 
    print json.dumps(cellSet, default=jdefault, sort_keys=True, indent=4, separators=(',', ': '))

    # print json.dumps({0: {0: 0, 1: 0, 2: 7}, 1: {0: 3, 1: 3, 2: 5}, 2: {0: 3, 1: 1, 2: 7}}, indent=4, separators=(',', ': '))
