const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.Sin,
		C3.Plugins.Touch,
		C3.Plugins.Particles,
		C3.Plugins.Audio,
		C3.Plugins.Mouse,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Audio.Acts.PlayByName,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.ToggleBoolInstanceVar,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Acts.ResetEventVar
	];
};
self.C3_JsPropNameTable = [
	{background: 0},
	{soal_level1: 0},
	{jawaban_instance: 0},
	{frame_level1: 0},
	{startX: 0},
	{startY: 0},
	{originalStartX: 0},
	{originalStartY: 0},
	{DragDrop: 0},
	{aksara_jawa_level1: 0},
	{Sine: 0},
	{judul: 0},
	{Touch: 0},
	{Particles: 0},
	{posisi_level1: 0},
	{popUp: 0},
	{text_lulus: 0},
	{text_gagal: 0},
	{layout: 0},
	{poin_view: 0},
	{sound: 0},
	{home_button: 0},
	{tujuan: 0},
	{back_button: 0},
	{lulus_view: 0},
	{scoreReload: 0},
	{ulang_button: 0},
	{menu: 0},
	{menu_button: 0},
	{mainmenu: 0},
	{tujuan_view: 0},
	{materi: 0},
	{nextLayout: 0},
	{materi_button: 0},
	{audio: 0},
	{aksara_jawa: 0},
	{Audio: 0},
	{Mouse: 0},
	{pasangan: 0},
	{sandhangan: 0},
	{contoh_soal: 0},
	{soal: 0},
	{see: 0},
	{viewpoint_button: 0},
	{jawaban_contoh_aksara: 0},
	{jawaban: 0},
	{soal_level2: 0},
	{nilai: 0},
	{pilihan_ganda: 0},
	{jawaban_level2: 0},
	{soal_level3: 0},
	{jawaban_level3: 0},
	{gagal_view: 0},
	{level: 0},
	{level_quiz: 0},
	{loading: 0},
	{nextSoal: 0},
	{startXFrame: 0},
	{checkingAnswer: 0},
	{jawabanBenar: 0},
	{jumlahJawaban: 0},
	{scoreLevel1: 0},
	{questionHasBeenUsed: 0},
	{timerActive: 0},
	{kkm: 0},
	{soalSudahDijawab: 0},
	{audioAksara: 0},
	{nextLevel: 0},
	{scoreLevel2: 0},
	{score: 0},
	{scoreLevel3: 0},
	{scoreName: 0}
];

self.InstanceType = {
	background: class extends self.ISpriteInstance {},
	soal_level1: class extends self.ITextInstance {},
	frame_level1: class extends self.ISpriteInstance {},
	aksara_jawa_level1: class extends self.ISpriteInstance {},
	judul: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Particles: class extends self.IParticlesInstance {},
	posisi_level1: class extends self.ISpriteInstance {},
	popUp: class extends self.ISpriteInstance {},
	text_lulus: class extends self.ITextInstance {},
	text_gagal: class extends self.ITextInstance {},
	poin_view: class extends self.ISpriteInstance {},
	home_button: class extends self.ISpriteInstance {},
	back_button: class extends self.ISpriteInstance {},
	lulus_view: class extends self.ISpriteInstance {},
	ulang_button: class extends self.ISpriteInstance {},
	menu_button: class extends self.ISpriteInstance {},
	mainmenu: class extends self.ISpriteInstance {},
	tujuan_view: class extends self.ISpriteInstance {},
	materi_button: class extends self.ISpriteInstance {},
	aksara_jawa: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	pasangan: class extends self.ISpriteInstance {},
	sandhangan: class extends self.ISpriteInstance {},
	contoh_soal: class extends self.ISpriteInstance {},
	viewpoint_button: class extends self.ISpriteInstance {},
	jawaban_contoh_aksara: class extends self.ISpriteInstance {},
	soal_level2: class extends self.ITextInstance {},
	pilihan_ganda: class extends self.ISpriteInstance {},
	jawaban_level2: class extends self.ISpriteInstance {},
	soal_level3: class extends self.ITextInstance {},
	jawaban_level3: class extends self.ISpriteInstance {},
	gagal_view: class extends self.ISpriteInstance {},
	level_quiz: class extends self.ISpriteInstance {},
	loading: class extends self.ISpriteInstance {}
}