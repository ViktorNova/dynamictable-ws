#!/usr/bin/python
# coding: utf-8

import json
from CellSet import CellSet, Position, Member, Cells

def data1():
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

    Position([Member("England"), Member("A1"), Member("B1")]),
    Position([Member("England"), Member("A1"), Member("B2")]),
    Position([Member("England"), Member("A2"), Member("B1")]),
    Position([Member("England"), Member("A2"), Member("B2")]),
    Position([Member("England"), Member("A3"), Member("B1")]),
    Position([Member("England"), Member("A3"), Member("B2")]),
    Position([Member("England"), Member("A4"), Member("B1")]),
    Position([Member("England"), Member("A4"), Member("B2")])
    ]

    cellSet.cells = Cells(24,16)
    return json.dumps(cellSet, default=jdefault)

def jdefault(o):
    return o.__dict__

if __name__ == '__main__':
    print data1()


    