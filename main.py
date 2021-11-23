'''
start and end date included in a date range
a day's price means the price at 00.00 UTC time or as close to midnight as possible
allow the user of your application to pass the start and end sates of the date range in some way,
e.g. via input fields or as parameters to an API
'''

import tkinter as tk

class MainApp(tk.Tk): 
    def __init__(self):
        super().__init__()

        self.configure_gui()
        
    def configure_gui(self):
        self.title("LOOL")
        self.geometry("700x500")
        self.columnconfigure(tuple(range(10)), weight=1)
        self.rowconfigure(tuple(range(10)), weight=1)
        
    def widgets(self):
        ""

if __name__ == "__main__":
    app = MainApp()
    app.mainloop()
