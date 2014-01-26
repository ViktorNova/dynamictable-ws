#!/usr/bin/python
# coding: utf-8

import tornado.ioloop
import tornado.web
import tornado.websocket
import random
import json
import time
import pdb

from tornado.options import define, options, parse_command_line
from generator import generate_data

define("port", default=8888, help="run on the given port", type=int)

# we gonna store clients in dictionary..
clients = dict()

def getData():
   n = 10
   row = random.randint(n,n)
   col = random.randint(2*n,2*n)
   return json.dumps(generate_data(row, col))

class IndexHandler(tornado.web.RequestHandler):
    @tornado.web.asynchronous
    def get(self):
        # self.write("This is your response")
        self.render('index.html')
        # self.finish()

class WebSocketHandler(tornado.websocket.WebSocketHandler):
    def open(self, *args):
        print u"Connexion opened"
        self.n = int(self.get_argument("n"))
        self.refresh = int(self.get_argument("refresh"))
        self.stream.set_nodelay(True)

    def on_message(self, message):        
        """
        when we receive some message we want some message handler..
        for this example i will just print message to console
        """
        print message

        i = 0
        while i<self.n:
            self.write_message(getData())
            i += 1
            if self.refresh != None and self.refresh > 0:
                time.sleep(self.refresh)

        
    def on_close(self):
        print u"Connexion interrupted"

app = tornado.web.Application([
    (r'/', IndexHandler),
    (r'/data/', WebSocketHandler),
    (r"/src/(.*)", tornado.web.StaticFileHandler, {"path": "src"})
], debug=True)

if __name__ == '__main__':
    parse_command_line()
    app.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()


    