'use strict'

///////////////////////////////////////////////////////////////////////////////
// RemixWebOSDesktopIcon - a shortcut icon to appear on the desktop

class RemixWebOSDesktopIcon extends HTMLElement
{
	constructor(program, window)
    {
		super();
        
        // create tray icon and add it
        this.program = program;
        this.window = window;
        this.className = 'desktopIcon';
        this.innerHTML = '<div class=desktopIconIcon>' + (program.folder ? '📁' : program.icon);
        this.innerHTML += this.title = program.name;
    }
    
    Open() { this.window && this.window.SetActive(); this.program.Open(); }
} // RemixWebOSDesktopIcon
customElements.define('d-', RemixWebOSDesktopIcon);