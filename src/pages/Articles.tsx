import PinnedArticle from '../components/PinnedArticle';
import RecentArticles from '../components/RecentArticles';

export default function Articles() {
  return (
    <main className="py-10">
      <PinnedArticle />
      <RecentArticles />
    </main>
  );
}