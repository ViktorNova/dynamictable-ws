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

class Position:
    def __init__(self, Members):
        self.Members = Members

class Axis:
    """ n: 0 for columns, 1 for rows"""
    def __init__(self, n):
        self.n = n
        self.Positions = []

class CellSet:
    def __init__(self, nAxis):
        self.nAxis = nAxis
        self.cells = None
        self.axis = []
        for i in range(nAxis):
            self.axis.append(Axis(i))

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
    Position([Member("Apr"), Member("count")]),
    Position([Member("May"), Member("pnl")]),
    Position([Member("May"), Member("count")]),
    Position([Member("Jun"), Member("pnl")]),
    Position([Member("Jun"), Member("count")]),
    Position([Member("Jul"), Member("pnl")]),
    Position([Member("Jul"), Member("count")]),
    Position([Member("Aug"), Member("pnl")]),
    Position([Member("Aug"), Member("count")]),
    Position([Member("Sept"), Member("pnl")]),
    Position([Member("Sept"), Member("count")]),
    Position([Member("Oct"), Member("pnl")]),
    Position([Member("Oct"), Member("count")]),
    Position([Member("Nov"), Member("pnl")]),
    Position([Member("Nov"), Member("count")]),
    Position([Member("Dec"), Member("pnl")]),
    Position([Member("Dec"), Member("count")])
    ]
    cellSet.axis[0].Positions = [
    Position([Member("France"), Member("A1"), Member("B1")]),
    Position([Member("France"), Member("A1"), Member("B2")]),
    Position([Member("France"), Member("A2"), Member("B1")]),
    Position([Member("France"), Member("A2"), Member("B2")]),
    Position([Member("France"), Member("A3"), Member("B1")]),
    Position([Member("France"), Member("A3"), Member("B2")]),
    Position([Member("France"), Member("A4"), Member("B1")]),
    Position([Member("France"), Member("A4"), Member("B2")]),

    # Position([Member("USA"), Member("A1"), Member("B1")]),
    # Position([Member("USA"), Member("A1"), Member("B2")]),
    # Position([Member("USA"), Member("A2"), Member("B1")]),
    # Position([Member("USA"), Member("A2"), Member("B2")]),
    # Position([Member("USA"), Member("A3"), Member("B1")]),
    # Position([Member("USA"), Member("A3"), Member("B2")]),
    # Position([Member("USA"), Member("A4"), Member("B1")]),
    # Position([Member("USA"), Member("A4"), Member("B2")]),

    # Position([Member("Japan"), Member("A1"), Member("B1")]),
    # Position([Member("Japan"), Member("A1"), Member("B2")]),
    # Position([Member("Japan"), Member("A2"), Member("B1")]),
    # Position([Member("Japan"), Member("A2"), Member("B2")]),
    # Position([Member("Japan"), Member("A3"), Member("B1")]),
    # Position([Member("Japan"), Member("A3"), Member("B2")]),
    # Position([Member("Japan"), Member("A4"), Member("B1")]),
    # Position([Member("Japan"), Member("A4"), Member("B2")]),

    Position([Member("England"), Member("A1"), Member("B1")]),
    Position([Member("England"), Member("A1"), Member("B2")]),
    Position([Member("England"), Member("A2"), Member("B1")]),
    Position([Member("England"), Member("A2"), Member("B2")]),
    Position([Member("England"), Member("A3"), Member("B1")]),
    Position([Member("England"), Member("A3"), Member("B2")]),
    Position([Member("England"), Member("A4"), Member("B1")]),
    Position([Member("England"), Member("A4"), Member("B2")])
    # Position([Member("Italy")])
    ]

    cellSet.cells = Cells(24,16)
    print "CellSet:"
    print json.dumps(cellSet, default=jdefault) 
    # print json.dumps(cellSet, default=jdefault, sort_keys=True, indent=4, separators=(',', ': '))

