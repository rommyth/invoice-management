import {
  View,
  Text,
  useWindowDimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import BottomNavbar from '../components/organisms/BottomNavbar.oragnism';
import FloatingButton from '../components/molecules/FloatingButton.molecule';
import {
  FolderMinusIcon,
  NewspaperIcon,
  PlusIcon,
} from 'react-native-heroicons/outline';
import CommonListEmpty from '../components/molecules/CommonListEmpty.molecule';

const Invoice = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const routes = [
    {key: 'all', title: 'All'},
    {key: 'unpaid', title: 'Unpaid'},
    {key: 'paid', title: 'Paid'},
    {key: 'cancelled', title: 'Cancelled'},
  ];

  const _renderTabBar = (props: any) => (
    <TabBar
      {...props}
      tabStyle={tw`h-10`}
      indicatorStyle={tw`bg-slate-800`}
      activeColor="black"
      inactiveColor="#ababab"
      style={tw`bg-white text-black`}
    />
  );

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`p-4`}>
        <Text style={tw`font-primary--semibold text-2xl text-slate-800`}>
          Invoice
        </Text>
      </View>
      <TabView
        lazy
        renderTabBar={_renderTabBar}
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderScene={SceneMap({
          all: () => <InvoiceAll />,
          unpaid: () => <InvoiceUnPaid />,
          paid: () => <InvoicePaid />,
          cancelled: () => <InvoiceCancelled />,
        })}
      />

      <FloatingButton icon={<PlusIcon style={tw`text-white`} />} />
      <BottomNavbar />
    </View>
  );
};

export default Invoice;

// ============================================================================
// ### Page Invoce All
// ----------------------------------------------------------------------
const InvoiceAll = () => {
  return (
    <View style={tw`flex-1 px-4`}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={[...Array(0).fill('')]}
        ListFooterComponent={() => <View style={tw`h-24`} />}
        ItemSeparatorComponent={() => <View style={tw`h-3`} />}
        ListEmptyComponent={() => <CommonListEmpty />}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {}}
              style={tw`p-3 border-b border-slate-300 rounded-md flex-row items-center gap-4`}>
              <NewspaperIcon style={tw`text-slate-800`} size={28} />
              <View style={tw`flex-1`}>
                <Text style={tw`font-primary--semibold text-sm text-slate-800`}>
                  Nama Invoice
                </Text>
                <Text style={tw`font-primary--regular text-xs text-slate-500`}>
                  No. 9940930001
                </Text>
              </View>
              <View style={tw`bg-green-600 px-2 py-0.5 rounded`}>
                <Text style={tw`font-primary--medium text-xs text-white`}>
                  Paid
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

// ============================================================================
// ### Page Invoce UnPaid
// ----------------------------------------------------------------------
const InvoiceUnPaid = () => {
  return (
    <View>
      <Text>Invoice UnPaid</Text>
    </View>
  );
};

// ============================================================================
// ### Page Invoce Paid
// ----------------------------------------------------------------------
const InvoicePaid = () => {
  return (
    <View>
      <Text>Invoice Paid</Text>
    </View>
  );
};

// ============================================================================
// ### Page Invoce Cancelled
// ----------------------------------------------------------------------
const InvoiceCancelled = () => {
  return (
    <View>
      <Text>Invoice Cancelled</Text>
    </View>
  );
};
