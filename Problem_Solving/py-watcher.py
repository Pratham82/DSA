import sys
import os
import subprocess
import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

file = sys.argv[1]

class Handler(FileSystemEventHandler):
    def on_modified(self, event):
        if event.src_path.endswith(file):
            os.system("clear")
            print(f"▶️ Running {file}...\n")
            subprocess.run(["python3", file])

print(f"👀 Watching {file}...\n")

event_handler = Handler()
observer = Observer()
observer.schedule(event_handler, ".", recursive=False)
observer.start()

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    observer.stop()

observer.join()

