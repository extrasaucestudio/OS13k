if(!t){K=F=0
m=`46:1,44:1,46:8,:4,44:1,42:1,41:1,39:1,38:4,39:4,:8,34:1,33:1,34:8,:4,29:4,30:2,26:2,27:8,:8,22:1,20:1,22:8,:4,20:1,18:1,17:1,15:1,14:4,15:4,:8,14:6,14:12;17:6,17:12;20:6,20:6;23:6,14:12;17:12;20:12;23:12;26:12,:8,15:16;22:16;27:16;31:16;34:16`;
mus=m.split(',').map(i=>i.split(/;/).map(j=>j.split(':')))
P=(n,d)=>{K=1
I=[1,2,4,8,16,32]
I.map(H=>{RemixWebOS.PlaySamples(parent.zzfxG(1/(1+Math.log2(H)),0,(F=16.3516*2**((n-1)/12))*H,.01,d/10,.06,0,2),1)})
}
g=()=>{if(n=mus.shift()){n.map(i=>{T=i[1];i[0]&&P(i[0],T)})}
setTimeout(g,99*T)}
setTimeout(g,2e3)}
x.globalAlpha=.1;x.fillRect(0,0,2e3,2e3)
K/=1.01
x.fillStyle=R(F*K)
for(X=-5;X<5;X=X+.01)
Y=(1-(X)**2)*2**-((X+F/199+S(t+F))**2),x.clearRect((X+5)*192,600+Y*120*(S(F+S(X*4)/2)+C(F*t)/4)*K,2,999)
// by Rodrigo Siqueira