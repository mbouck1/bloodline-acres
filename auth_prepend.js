// ── AUTH MODAL ─────────────────────────────────────────────────────────────────
function AuthModal(_ref) {
  var onLogin = _ref.onLogin;
  var _useState = React.useState('login'),
    mode = _useState[0], setMode = _useState[1];
  var _useState2 = React.useState(''),
    email = _useState2[0], setEmail = _useState2[1];
  var _useState3 = React.useState(''),
    password = _useState3[0], setPassword = _useState3[1];
  var _useState4 = React.useState(''),
    username = _useState4[0], setUsername = _useState4[1];
  var _useState5 = React.useState(''),
    error = _useState5[0], setError = _useState5[1];
  var _useState6 = React.useState(false),
    loading = _useState6[0], setLoading = _useState6[1];
  var _useState7 = React.useState(false),
    showReset = _useState7[0], setShowReset = _useState7[1];
  var _useState8 = React.useState(''),
    resetMsg = _useState8[0], setResetMsg = _useState8[1];

  async function handleSubmit() {
    setError(''); setLoading(true);
    try {
      if (mode === 'login') {
        var _ref2 = await window.sb.auth.signInWithPassword({ email: email, password: password });
        if (_ref2.error) throw _ref2.error;
        onLogin(_ref2.data.user);
      } else {
        if (!username.trim()) { setError('Username is required'); setLoading(false); return; }
        var _ref3 = await window.sb.auth.signUp({
          email: email, password: password,
          options: { data: { username: username.trim(), display_name: username.trim() } }
        });
        if (_ref3.error) throw _ref3.error;
        setError(''); setMode('confirm');
      }
    } catch(e) {
      setError(e.message || 'Something went wrong');
    }
    setLoading(false);
  }

  async function handleReset() {
    setLoading(true);
    var _ref4 = await window.sb.auth.resetPasswordForEmail(email);
    setLoading(false);
    if (_ref4.error) { setError(_ref4.error.message); return; }
    setResetMsg('Password reset email sent! Check your inbox.');
  }

  var s = {
    overlay: { position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.85)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:9999 },
    box: { background:'#1a0a00',border:'4px solid #8B4513',borderRadius:12,padding:32,width:360,maxWidth:'90vw' },
    title: { color:'#f5e6c8',fontSize:'1.5rem',fontWeight:'bold',marginBottom:8,textAlign:'center' },
    sub: { color:'#a0856a',fontSize:'0.85rem',textAlign:'center',marginBottom:24 },
    label: { color:'#f5e6c8',fontSize:'0.85rem',marginBottom:4,display:'block' },
    input: { width:'100%',padding:'8px 12px',borderRadius:6,border:'1px solid #5a3a1a',background:'#2a1500',color:'#f5e6c8',fontSize:'0.95rem',marginBottom:16,boxSizing:'border-box' },
    btn: { width:'100%',padding:'10px',borderRadius:6,border:'none',background:'#8B4513',color:'#f5e6c8',fontSize:'1rem',fontWeight:'bold',cursor:'pointer',marginBottom:8 },
    link: { background:'none',border:'none',color:'#a0856a',cursor:'pointer',fontSize:'0.85rem',textDecoration:'underline',padding:0 },
    error: { color:'#ff6b6b',fontSize:'0.85rem',marginBottom:12,textAlign:'center' },
    success: { color:'#6bff9e',fontSize:'0.85rem',marginBottom:12,textAlign:'center' },
  };

  if (mode === 'confirm') return React.createElement('div', {style:s.overlay},
    React.createElement('div', {style:s.box},
      React.createElement('div', {style:s.title}, '🐾 Almost there!'),
      React.createElement('div', {style:{...s.sub, fontSize:'1rem', lineHeight:1.6}},
        'Check your email and click the confirmation link, then come back and log in.'),
      React.createElement('button', {style:{...s.btn,marginTop:24}, onClick:()=>setMode('login')}, 'Go to Login')
    )
  );

  return React.createElement('div', {style:s.overlay},
    React.createElement('div', {style:s.box},
      React.createElement('div', {style:s.title}, '🧬 Bloodline Acres'),
      React.createElement('div', {style:s.sub}, mode==='login' ? 'Sign in to your kennel' : 'Create your kennel account'),
      error ? React.createElement('div', {style:s.error}, error) : null,
      resetMsg ? React.createElement('div', {style:s.success}, resetMsg) : null,
      !showReset ? React.createElement(React.Fragment, null,
        mode === 'signup' ? React.createElement(React.Fragment, null,
          React.createElement('label', {style:s.label}, 'Username'),
          React.createElement('input', {style:s.input, value:username, onChange:function(e){setUsername(e.target.value)}, placeholder:'YourKennelName'})
        ) : null,
        React.createElement('label', {style:s.label}, 'Email'),
        React.createElement('input', {style:s.input, type:'email', value:email, onChange:function(e){setEmail(e.target.value)}, placeholder:'you@email.com'}),
        React.createElement('label', {style:s.label}, 'Password'),
        React.createElement('input', {style:s.input, type:'password', value:password, onChange:function(e){setPassword(e.target.value)}, placeholder:'••••••••',
          onKeyDown:function(e){if(e.key==='Enter')handleSubmit();}}),
        React.createElement('button', {style:s.btn, onClick:handleSubmit, disabled:loading},
          loading ? 'Please wait...' : mode==='login' ? 'Sign In' : 'Create Account'),
        React.createElement('div', {style:{textAlign:'center',marginTop:8}},
          mode==='login'
            ? React.createElement(React.Fragment, null,
                React.createElement('span', {style:{color:'#a0856a',fontSize:'0.85rem'}}, "No account? "),
                React.createElement('button', {style:s.link, onClick:()=>{setMode('signup');setError('');}}, 'Sign up'),
                React.createElement('span', {style:{color:'#a0856a',fontSize:'0.85rem'}}, ' · '),
                React.createElement('button', {style:s.link, onClick:()=>setShowReset(true)}, 'Forgot password?')
              )
            : React.createElement(React.Fragment, null,
                React.createElement('span', {style:{color:'#a0856a',fontSize:'0.85rem'}}, "Have an account? "),
                React.createElement('button', {style:s.link, onClick:()=>{setMode('login');setError('');}}, 'Sign in')
              )
        )
      ) : React.createElement(React.Fragment, null,
        React.createElement('label', {style:s.label}, 'Enter your email to reset password'),
        React.createElement('input', {style:s.input, type:'email', value:email, onChange:function(e){setEmail(e.target.value)}, placeholder:'you@email.com'}),
        React.createElement('button', {style:s.btn, onClick:handleReset, disabled:loading}, loading ? 'Sending...' : 'Send Reset Email'),
        React.createElement('button', {style:{...s.link,display:'block',margin:'8px auto'}, onClick:()=>setShowReset(false)}, '← Back to login')
      )
    )
  );
}

// ── AUTH SESSION CHECK ─────────────────────────────────────────────────────────
