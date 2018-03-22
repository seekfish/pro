-- phpMyAdmin SQL Dump
-- version 2.11.2.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 03 月 16 日 05:40
-- 服务器版本: 5.0.45
-- PHP 版本: 5.2.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- 数据库: `seek`
--

-- --------------------------------------------------------

--
-- 表的结构 `mall_users`
--

CREATE TABLE `mall_users` (
  `uid` int(11) NOT NULL auto_increment,
  `email` varchar(50) collate utf8_unicode_ci NOT NULL,
  `password` varchar(50) collate utf8_unicode_ci NOT NULL,
  `firstname` varchar(50) collate utf8_unicode_ci default NULL,
  `lastname` varchar(50) collate utf8_unicode_ci default NULL,
  `score` int(11) default '100',
  `level` varchar(50) collate utf8_unicode_ci default 'VIP01',
  `createtime` timestamp NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY  (`uid`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=34 ;

--
-- 导出表中的数据 `mall_users`
--

INSERT INTO `mall_users` (`uid`, `email`, `password`, `firstname`, `lastname`, `score`, `level`, `createtime`) VALUES
(23, '123', '', '', '', 100, 'VIP01', '2018-03-12 15:38:43'),
(24, '', '', '', '', 100, 'VIP01', '2018-03-12 16:03:28'),
(25, '123123', '123123', NULL, NULL, 100, 'VIP01', '2018-03-12 17:07:40'),
(26, '123123123', '123123', NULL, NULL, 100, 'VIP01', '2018-03-12 17:08:43'),
(27, '12312313', '123123', NULL, NULL, 100, 'VIP01', '2018-03-12 17:11:00'),
(28, 'xcxcvxc', '123123', NULL, NULL, 100, 'VIP01', '2018-03-12 17:12:21'),
(29, '邮箱/用户名/手机号', '', NULL, NULL, 100, 'VIP01', '2018-03-12 17:14:02'),
(30, '1231231231', '123123', NULL, NULL, 100, 'VIP01', '2018-03-12 17:17:13'),
(31, '123a', '123123', NULL, NULL, 100, 'VIP01', '2018-03-12 17:18:11'),
(32, 'xvxc', '123123', NULL, NULL, 100, 'VIP01', '2018-03-12 17:19:02'),
(33, '12312312312', '123123', NULL, NULL, 100, 'VIP01', '2018-03-12 17:30:01');
