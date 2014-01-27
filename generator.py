#!/usr/bin/python
# coding: utf-8

import random
import json

def generate_data(row, col):
	""" {0: {0: 0, 1: 0, 2: 7}, 1: {0: 3, 1: 3, 2: 5}, 2: {0: 3, 1: 1, 2: 7}} """
	pass

	result = dict()
	for i in range(0, row):
		d = dict()
		for j in range(0, col):
			d[j] = random.randint(0,1)
		result[i] = d

	return result

if __name__ == '__main__':
	result = generate_data(3,3)
	print result
	print json.dumps(result, sort_keys=True, indent=4, separators=(',', ': '))
