<template>
  <q-page class="q-pr-md q-pl-md q-pa-md">
    <div class="col col-lg-12 col-md-6 col-sm-8 col-xs-10 q-pt-md">
      <q-card class="my-card q-pa-md">
        <q-breadcrumbs separator="---" class="text-blue-10" active-color="secondary">
          <q-breadcrumbs-el label="Main Menu" icon="widgets" />
          <q-breadcrumbs-el label="Nilai" icon="military_tech" />
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
                    <div class="col-2 q-table__title">Master Data Detail Nilai Siswa</div>
                    <p class="text-caption">Data detail nilai ujian siswa yang terdaftar di dalam sistem.</p>
                  </div>

                  <q-space />

                  <q-btn flat round color="primary" icon="search" @click="visible = !visible" size="md" class="q-mr-sm" />
                  <q-slide-transition>
                    <div v-show="visible">
                      <q-input outlined debounce="300" placeholder="Cari.." style="width:300px" color="primary" v-model="filter" dense />
                    </div>
                  </q-slide-transition>
                </template>

                <template v-slot:body="props">
                  <q-tr :props="props">
                    <q-td key="ujian_id" :props="props">
                      {{ props.row.ujian_id }}
                    </q-td>
                    <q-td key="judulUjian" :props="props">
                      {{ props.row.judulUjian }}
                    </q-td>
                    <q-td key="judulSoal" :props="props">
                      {{ props.row.judulSoal }}
                    </q-td>
                    <q-td key="jawabanBenar" :props="props">
                      {{ props.row.jawabanBenar }}
                    </q-td>
                    <q-td key="jawabanPilihan" :props="props">
                      {{ props.row.jawabanPilihan }}
                    </q-td>
                    <q-td key="bobotSoal" :props="props">
                      {{ props.row.bobotSoal }}
                    </q-td>
                    <q-td key="bobotAnda" :props="props">
                      {{ props.row.bobotAnda }}
                    </q-td>
                    <q-td key="buktiJawaban" :props="props">
                      {{ props.row.buktiJawaban }}
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
          { name: 'judulSoal', required: true, label: 'Judul soal', align: 'left', field: 'judulSoal', sortable: true },
          { name: 'jawabanBenar', required: true, label: 'Jawaban benar', align: 'left', field: 'jawabanBenar', sortable: true },
          { name: 'jawabanPilihan', required: true, label: 'Jawaban anda', align: 'left', field: 'jawabanPilihan', sortable: true },
          { name: 'bobotSoal', required: true, label: 'Bobot soal', align: 'left', field: 'bobotSoal', sortable: true },
          { name: 'bobotAnda', required: true, label: 'Bobot anda', align: 'left', field: 'bobotAnda', sortable: true },
          { name: 'buktiJawaban', label: 'Bukti', field: 'buktiJawaban', align: 'center' }
        ],
        rows: [
          {
            ujian_id: 'ID-8911198',
            judulUjian: 'Ujian tengah semester',
            judulSoal: 'muatan PKN',
            jawabanBenar: 'C',
            jawabanPilihan: 'C',
            bobotSoal: '10',
            bobotAnda: '10',
            buktiJawaban: '#'
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
