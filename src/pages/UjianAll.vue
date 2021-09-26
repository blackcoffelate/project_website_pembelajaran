<template>
  <q-page class="q-pr-md q-pl-md q-pa-md">
    <div class="col col-lg-12 col-md-6 col-sm-8 col-xs-10 q-pt-md">
      <q-card class="my-card q-pa-md">
        <q-breadcrumbs separator="---" class="text-blue-10" active-color="secondary">
          <q-breadcrumbs-el label="Main Menu" icon="widgets" />
          <q-breadcrumbs-el label="Semua Ujian" icon="collections_bookmark" />
        </q-breadcrumbs>
      </q-card>

      <div class="row q-mt-lg">

        <div class="row col-12">
          <q-card class="my-card col" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="col-12 q-pa-sm">
                <q-table
                  title="Master Data Ujian"
                  aria-label="Text"
                  class="text-h5"
                  :rows="ujian.rows"
                  flat
                  :columns="ujian.columns"
                  row-key="name"
                  :filter="filter"
                >

                <template v-slot:top>
                  <div class="col">
                    <div class="col-2 q-table__title">Master Data Ujian</div>
                    <p class="text-caption">Data ujian yang terdaftar di dalam sistem.</p>
                  </div>

                  <q-space />

                  <q-btn flat round color="primary" icon="search" @click="visible = !visible" size="md" class="q-mr-sm" />
                  <q-slide-transition>
                    <div v-show="visible">
                      <q-input outlined debounce="300" placeholder="Cari.." style="width:300px" color="primary" v-model="filter" dense />
                    </div>
                  </q-slide-transition>
                  <q-btn
                    dense
                    icon="add"
                    class="q-ml-md q-pr-md q-mr-md"
                    color="blue-13"
                    label="Tambah Ujian"
                    :to="{ name: 'ujian_add' }"
                    size="md"
                    outline
                  />
                </template>

                <template v-slot:body="props">
                  <q-tr :props="props">
                    <q-td key="ujian_id" :props="props">
                      {{ props.row.ujian_id }}
                    </q-td>
                    <q-td key="judulUjian" :props="props">
                      {{ props.row.judulUjian }}
                    </q-td>
                    <q-td key="tanggalMulai" :props="props">
                      {{ props.row.tanggalMulai }}
                    </q-td>
                    <q-td key="jamMulai" :props="props">
                      {{ props.row.jamMulai }}
                    </q-td>
                    <q-td key="jamSelesai" :props="props">
                      {{ props.row.jamSelesai }}
                    </q-td>
                    <q-td key="pengajar" :props="props">
                      {{ props.row.pengajar }}
                    </q-td>
                    <q-td key="deskripsi" :props="props">
                      {{ props.row.deskripsi }}
                    </q-td>
                    <q-td key="aksi_add" :props="props">
                      <q-btn clickable :to="{ name: 'soal_add' }" outline color="primary" size="sm" icon="add" label="Tambah soal"  no-caps />
                    </q-td>
                    <q-td key="aksi" :props="props">
                      <q-btn round outline color="green" size="sm" icon="edit"  no-caps />
                      <q-btn round outline color="red" size="sm" icon="delete" no-caps class="q-ml-sm" />
                    </q-td>
                  </q-tr>
                </template>

                </q-table>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>

      </div>
    </div>
  </q-page>

</template>

<script>

export default {
  name: 'PageIndex',
  data () {
    return {
      visible: false,
      filter: null,
      ujian: {
        columns: [
          { name: 'ujian_id', required: true, label: 'ID Ujian', align: 'left', field: 'ujian_id', sortable: true },
          { name: 'judulUjian', required: true, label: 'Judul ujian', align: 'left', field: 'judulUjian', sortable: true },
          { name: 'tanggalMulai', required: true, label: 'Tgl mulai', align: 'left', field: 'tanggalMulai', sortable: true },
          { name: 'jamMulai', required: true, label: 'Jam mulai', align: 'left', field: 'jamMulai', sortable: true },
          { name: 'jamSelesai', required: true, label: 'Jam selesai', align: 'left', field: 'jamSelesai', sortable: true },
          { name: 'pengajar', required: true, label: 'Pengajar', align: 'left', field: 'pengajar', sortable: true },
          { name: 'deskripsi', required: true, label: 'Deskripsi', align: 'left', field: 'deskripsi', sortable: true },
          { name: 'aksi_add', required: true, label: 'Soal', align: 'left', field: 'aksi_add' },
          { name: 'aksi', label: 'Actions', field: 'aksi', align: 'center' }
        ],
        rows: [
          {
            ujian_id: 'ID-091899',
            judulUjian: 'Ujian Semester Ganjil',
            tanggalMulai: '01 Januari 2021',
            jamMulai: '08:00 AM',
            jamSelesai: '11:00 PM',
            pengajar: 'Hasanudin, S.Pd',
            deskripsi: 'Ujian Semester Ganjil TA 2021',
            aksi_add: '',
            aksi: ''
          }
        ]
      }
    }
  },
  created () {
  },
  methods: {
  }
}
</script>
<style scoped>

</style>
