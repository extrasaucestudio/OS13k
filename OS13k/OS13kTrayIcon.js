'use strict'

///////////////////////////////////////////////////////////////////////////////
// RemixWebOSTrayIcon - icon on taskbar tray for OS shortcuts

class RemixWebOSTrayIcon extends HTMLElement
{
	constructor()
    {
		super();
        
        // create tray icon and add it
        this.className = 'trayIcon';
        tray.appendChild(this);
    }
    
    SetProgram(program)
    {
        // set program, title, and icon
        this.program = program;
        this.title = program.name;
        this.innerHTML = program.icon;
    }
    
    Open() { this.program.Toggle(); }
} // RemixWebOSTrayIcon
customElements.define('t-', RemixWebOSTrayIcon);