import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const nftCards = [
    {
      id: 1,
      title: 'Telegram Premium Stars',
      description: 'Эксклюзивная коллекция звезд для премиума',
      price: '0.05 ETH',
      rarity: 'Legendary',
      image: '/img/cb609278-dd3a-4e53-b0bb-b235345bb6b7.jpg',
      verified: true
    },
    {
      id: 2,
      title: 'Sticker Pack Genesis',
      description: 'Первая коллекция стикеров NFT',
      price: '0.02 ETH',
      rarity: 'Rare',
      image: '/img/6f425549-bc3a-4193-beb1-361ccf566ab2.jpg',
      verified: true
    },
    {
      id: 3,
      title: 'Emoji Collection',
      description: 'Уникальные эмодзи для вашего профиля',
      price: '0.01 ETH',
      rarity: 'Common',
      image: '/img/8f4aed38-0bd8-48c4-8f6b-d893049281f4.jpg',
      verified: false
    }
  ];

  const stats = [
    { label: 'Всего NFT', value: '12,847', icon: 'Package' },
    { label: 'Пользователей', value: '8,392', icon: 'Users' },
    { label: 'Объем торгов', value: '1,284 ETH', icon: 'TrendingUp' },
    { label: 'Сделки сегодня', value: '142', icon: 'Activity' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/70 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gift" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">NFT Gifts</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Каталог</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Профиль</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Торговля</a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon">
                <Icon name="Search" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Bell" className="h-5 w-5" />
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="User" className="h-4 w-4 mr-2" />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Маркетплейс NFT подарков
              <span className="text-primary block">для Telegram</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Покупайте, продавайте и дарите уникальные NFT подарки. 
              Интеграция с Telegram кошельками для мгновенных транзакций.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Gift" className="h-5 w-5 mr-2" />
                Начать покупки
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="TrendingUp" className="h-5 w-5 mr-2" />
                Продать NFT
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name={stat.icon} className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Filter" className="h-5 w-5 mr-2" />
                    Фильтры
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Категория</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="stickers">Стикеры</SelectItem>
                        <SelectItem value="emoji">Эмодзи</SelectItem>
                        <SelectItem value="premium">Премиум</SelectItem>
                        <SelectItem value="themes">Темы</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Редкость</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите редкость" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="common">Обычные</SelectItem>
                        <SelectItem value="rare">Редкие</SelectItem>
                        <SelectItem value="legendary">Легендарные</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Цена</label>
                    <div className="space-y-2">
                      <Input placeholder="От" />
                      <Input placeholder="До" />
                    </div>
                  </div>
                  <Button className="w-full">
                    Применить фильтры
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* NFT Grid */}
            <div className="lg:w-3/4">
              <Tabs defaultValue="marketplace" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="marketplace">Маркетплейс</TabsTrigger>
                  <TabsTrigger value="auctions">Аукционы</TabsTrigger>
                  <TabsTrigger value="trending">Популярные</TabsTrigger>
                </TabsList>
                
                <TabsContent value="marketplace" className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">Все NFT подарки</h3>
                    <Select>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Сортировать по" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                        <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                        <SelectItem value="newest">Новые</SelectItem>
                        <SelectItem value="popular">Популярные</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {nftCards.map((nft) => (
                      <Card key={nft.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <CardHeader className="p-0">
                          <div className="relative">
                            <img 
                              src={nft.image} 
                              alt={nft.title}
                              className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="absolute top-3 right-3 flex gap-2">
                              {nft.verified && (
                                <Badge className="bg-green-500 hover:bg-green-600">
                                  <Icon name="CheckCircle" className="h-3 w-3 mr-1" />
                                  Верифицирован
                                </Badge>
                              )}
                              <Badge variant="secondary">
                                {nft.rarity}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4">
                          <CardTitle className="text-lg mb-2">{nft.title}</CardTitle>
                          <CardDescription className="mb-3">{nft.description}</CardDescription>
                          <div className="flex items-center justify-between">
                            <div className="text-lg font-bold text-primary">{nft.price}</div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Icon name="Heart" className="h-4 w-4" />
                              </Button>
                              <Button size="sm">
                                Купить
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="auctions" className="space-y-6">
                  <div className="text-center py-12">
                    <Icon name="Gavel" className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                    <h3 className="text-xl font-semibold mb-2">Аукционы скоро!</h3>
                    <p className="text-gray-600">Функция аукционов находится в разработке</p>
                  </div>
                </TabsContent>

                <TabsContent value="trending" className="space-y-6">
                  <div className="text-center py-12">
                    <Icon name="TrendingUp" className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                    <h3 className="text-xl font-semibold mb-2">Аналитика популярности</h3>
                    <p className="text-gray-600">Раздел с трендами в разработке</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Возможности торговли</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наша платформа предлагает все необходимые инструменты для успешной торговли NFT подарками
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Мгновенные покупки</h3>
                <p className="text-gray-600">Покупайте NFT подарки мгновенно по фиксированной цене</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wallet" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Telegram кошельки</h3>
                <p className="text-gray-600">Интеграция с кошельками Telegram для удобных транзакций</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Верификация подлинности</h3>
                <p className="text-gray-600">Каждый NFT проходит проверку на подлинность и уникальность</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gift" className="h-6 w-6" />
                <span className="text-xl font-bold">NFT Gifts</span>
              </div>
              <p className="text-gray-400">
                Маркетплейс NFT подарков для Telegram с интеграцией кошельков
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Маркетплейс</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Каталог NFT</a></li>
                <li><a href="#" className="hover:text-white">Популярные</a></li>
                <li><a href="#" className="hover:text-white">Новинки</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Торговля</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Как купить</a></li>
                <li><a href="#" className="hover:text-white">Как продать</a></li>
                <li><a href="#" className="hover:text-white">Аукционы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Помощь</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
                <li><a href="#" className="hover:text-white">Telegram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NFT Gifts. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;