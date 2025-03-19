import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import TopNavbar from '../components/organisms/TopNavbar.organism';
import {CalendarDaysIcon} from 'react-native-heroicons/outline';
import {
  ArrowDownOnSquareIcon,
  ArrowDownTrayIcon,
} from 'react-native-heroicons/solid';

const ReportSales = () => {
  const [showList, setShowList] = useState<'sales' | 'expenses'>('sales');

  const _renderHeader = () => (
    <View style={tw`flex-row items-center justify-between`}>
      <TouchableOpacity
        style={tw`flex-row items-center justify-between bg-white border border-slate-300 rounded-md p-2 gap-1`}>
        <CalendarDaysIcon style={tw`text-slate-800`} size={18} />
        <Text style={tw`font-primary--semibold text-xs text-slate-800`}>
          Maret
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`flex-row items-center justify-between bg-slate-800 border border-slate-300 rounded-md p-2 gap-1`}>
        <ArrowDownTrayIcon style={tw`text-white`} size={18} />
        <Text style={tw`font-primary--semibold text-xs text-white`}>
          Download Report
        </Text>
      </TouchableOpacity>
    </View>
  );

  const _renderTablePenjualan = () => (
    <View style={tw`p-4 mt-4 bg-white rounded-md `}>
      <Text style={tw`font-primary--semibold text-sm text-slate-800`}>
        Penjualan
      </Text>
      <Text style={tw`font-primary--regular text-xs text-slate-500`}>
        (Penjualan - Diskon)
      </Text>
      <View style={tw`mt-2`}>
        <View
          style={tw`p-2 bg-slate-100 flex-row items-center justify-between`}>
          <Text style={tw`font-primary--regular text-sm text-slate-800`}>
            Keterangan
          </Text>
          <Text style={tw`font-primary--regular text-sm text-slate-800`}>
            Jumlah
          </Text>
        </View>
        <View
          style={tw`p-2 bg-white border-b border-slate-200 flex-row items-center justify-between`}>
          <Text style={tw`font-primary--regular text-xs text-slate-500`}>
            Jumlah Transaksi
          </Text>
          <Text style={tw`font-primary--regular text-xs text-slate-800`}>
            10
          </Text>
        </View>
        <View
          style={tw`p-2 bg-white border-b border-slate-200 flex-row items-center justify-between`}>
          <Text style={tw`font-primary--regular text-xs text-slate-500`}>
            Penjualan Kotor
          </Text>
          <Text style={tw`font-primary--regular text-xs text-slate-800`}>
            Rp 100.000.000
          </Text>
        </View>
        <View
          style={tw`p-2 bg-white border-b border-slate-200 flex-row items-center justify-between`}>
          <Text style={tw`font-primary--regular text-xs text-slate-500`}>
            Diskon
          </Text>
          <Text style={tw`font-primary--regular text-xs text-slate-800`}>
            Rp 10.000.000
          </Text>
        </View>
        <View
          style={tw`p-2 bg-slate-800 border-b flex-row items-center justify-between`}>
          <Text style={tw`font-primary--semibold text-xs text-white`}>
            Total Penjualan
          </Text>
          <Text style={tw`font-primary--semibold text-base text-white`}>
            Rp 90.000.000
          </Text>
        </View>
      </View>
    </View>
  );

  const _renderTableProfit = () => (
    <View style={tw`p-4 mt-4 bg-white rounded-md `}>
      <Text style={tw`font-primary--semibold text-sm text-green-600`}>
        Keuntungan
      </Text>
      <Text style={tw`font-primary--regular text-xs text-slate-500`}>
        (Total Penjualan - Harga Modal - Pengeluaran)
      </Text>
      <View style={tw`mt-2`}>
        <View
          style={tw`p-2 bg-slate-100 flex-row items-center justify-between`}>
          <Text style={tw`font-primary--regular text-sm text-slate-800`}>
            Keterangan
          </Text>
          <Text style={tw`font-primary--regular text-sm text-slate-800`}>
            Jumlah
          </Text>
        </View>
        <View
          style={tw`p-2 bg-white border-b border-slate-200 flex-row items-center justify-between`}>
          <Text style={tw`font-primary--regular text-xs text-slate-500`}>
            Total Penjualan
          </Text>
          <Text style={tw`font-primary--regular text-xs text-slate-800`}>
            Rp 90.000.000
          </Text>
        </View>
        <View
          style={tw`p-2 bg-white border-b border-slate-200 flex-row items-center justify-between`}>
          <Text style={tw`font-primary--regular text-xs text-slate-500`}>
            Total Harga Modal Produk
          </Text>
          <Text style={tw`font-primary--regular text-xs text-slate-800`}>
            Rp 70.000.000
          </Text>
        </View>
        <View
          style={tw`p-2 bg-white border-b border-slate-200 flex-row items-center justify-between`}>
          <Text style={tw`font-primary--regular text-xs text-slate-500`}>
            Pengeluaran
          </Text>
          <Text style={tw`font-primary--regular text-xs text-slate-800`}>
            Rp 1.000.000
          </Text>
        </View>
        <View
          style={tw`p-2 bg-green-100 flex-row items-center justify-between`}>
          <Text style={tw`font-primary--semibold text-xs text-green-800`}>
            Total Keuntungan
          </Text>
          <Text style={tw`font-primary--semibold text-base text-green-800`}>
            Rp 19.000.000
          </Text>
        </View>
      </View>
    </View>
  );

  const _renderTab = () => (
    <View style={tw`flex-row items-center mt-8`}>
      <TouchableOpacity
        onPress={() => setShowList('sales')}
        style={tw`py-2 px-4 ${
          showList === 'sales' ? 'bg-white' : 'bg-slate-100'
        }`}>
        <Text style={tw`font-primary--regular text-sm text-slate-800`}>
          Penjualan
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setShowList('expenses')}
        style={tw`py-2 px-4 ${
          showList === 'expenses' ? 'bg-white' : 'bg-slate-100'
        }`}>
        <Text style={tw`font-primary--regular text-sm text-slate-800`}>
          Pengeluaran
        </Text>
      </TouchableOpacity>
    </View>
  );

  const _renderListPenjualan = useCallback(() => {
    return (
      <View style={tw`bg-white`}>
        <ScrollView horizontal>
          <View>
            <View
              style={tw`flex-row items-center p-2 border-b border-slate-800`}>
              <Text
                style={tw`w-48 font-primary--semibold text-xs text-slate-800 text-start`}>
                Nama
              </Text>
              <Text
                style={tw`w-15 font-primary--semibold text-xs text-slate-800 text-center`}>
                Qty
              </Text>
              <Text
                style={tw`w-28 font-primary--semibold text-xs text-slate-800 text-start`}>
                Price
              </Text>
            </View>
            {[...Array(5)].map((_, index) => {
              return (
                <View
                  key={index.toString()}
                  style={tw`flex-row items-center p-2 border-b border-slate-200`}>
                  <Text
                    style={tw`w-48 font-primary--regular text-xs text-slate-800 text-start`}>
                    Franchise Nasi Padang RM qweqw eqwe qweqw ewq
                  </Text>
                  <Text
                    style={tw`w-15 font-primary--regular text-xs text-slate-800 text-center`}>
                    1
                  </Text>
                  <Text
                    style={tw`w-28 font-primary--regular text-xs text-slate-800 text-start`}>
                    15.000.000
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }, []);

  const _renderListExpenses = useCallback(() => {
    return (
      <View style={tw`bg-white`}>
        <ScrollView horizontal>
          <View>
            <View
              style={tw`flex-row items-center p-2 border-b border-slate-800`}>
              <Text
                style={tw`w-32 font-primary--semibold text-xs text-slate-800 text-start`}>
                Tanggal
              </Text>
              <Text
                style={tw`w-48 font-primary--semibold text-xs text-slate-800 text-start`}>
                Nama
              </Text>
              <Text
                style={tw`w-15 font-primary--semibold text-xs text-slate-800 text-center`}>
                Qty
              </Text>
              <Text
                style={tw`w-28 font-primary--semibold text-xs text-slate-800 text-start`}>
                Price
              </Text>
            </View>
            {[...Array(5)].map((_, index) => {
              return (
                <View
                  key={index.toString()}
                  style={tw`flex-row items-center p-2 border-b border-slate-200`}>
                  <Text
                    style={tw`w-32 font-primary--regular text-xs text-slate-800 text-start`}>
                    12 Feb 2025 11:32
                  </Text>
                  <Text
                    style={tw`w-48 font-primary--regular text-xs text-slate-800 text-start`}>
                    Beli Galon
                  </Text>
                  <Text
                    style={tw`w-15 font-primary--regular text-xs text-slate-800 text-center`}>
                    1
                  </Text>
                  <Text
                    style={tw`w-28 font-primary--regular text-xs text-slate-800 text-start`}>
                    10.000.000
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }, []);

  return (
    <View style={tw`flex-1 w-full min-h-full bg-slate-200`}>
      <TopNavbar title="Report Sales" />
      <ScrollView>
        <View style={tw`p-4`}>
          {_renderHeader()}
          {_renderTablePenjualan()}
          {_renderTableProfit()}
          {_renderTab()}
          {showList === 'sales' && _renderListPenjualan()}
          {showList === 'expenses' && _renderListExpenses()}
        </View>
      </ScrollView>
    </View>
  );
};

export default ReportSales;
