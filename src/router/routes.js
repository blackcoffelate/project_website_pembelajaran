
const routes = [
  {
    path: '/auth',
    component: () => import('layouts/Signin.vue'),
    children: [
      { path: '', name: 'signin', component: () => import('src/pages/access/Signin.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'dashboard', component: () => import('pages/Index.vue') },
      { path: '/materiall', name: 'materi_all', component: () => import('pages/MateriAll.vue') },
      { path: '/materiadd', name: 'materi_add', component: () => import('pages/MateriAdd.vue') },
      { path: '/materidetail', name: 'materi_detail', component: () => import('pages/MateriDetail.vue') },
      { path: '/materivideoall', name: 'materi_video_all', component: () => import('pages/MateriVideoAll.vue') },
      { path: '/materivideoadd', name: 'materi_video_add', component: () => import('pages/MateriVideoAdd.vue') },
      { path: '/ujianall', name: 'ujian_all', component: () => import('pages/UjianAll.vue') },
      { path: '/ujianadd', name: 'ujian_add', component: () => import('pages/UjianAdd.vue') },
      { path: '/soalall', name: 'soal_all', component: () => import('pages/SoalAll.vue') },
      { path: '/soaladd', name: 'soal_add', component: () => import('pages/SoalAdd.vue') },
      { path: '/nilai', name: 'nilai', component: () => import('pages/Nilai.vue') },
      { path: '/nilaisiswa', name: 'nilai_siswa', component: () => import('pages/NilaiSiswa.vue') },
      { path: '/nilaisiswadetail', name: 'nilai_siswa_detail', component: () => import('pages/NilaiSiswaDetail.vue') }
    ],
    meta: {
      authAdmin: true
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
